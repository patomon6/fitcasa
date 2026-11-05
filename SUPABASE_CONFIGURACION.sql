-- FitCasa: ejecutar en Supabase > SQL Editor, proyecto FitCasa.
-- Requiere que el propietario se registre primero con Google o correo.
create table if not exists public.fitcasa_accounts (
 user_id uuid primary key references auth.users(id) on delete cascade,
 display_name text not null check (char_length(display_name) between 1 and 100),
 status text not null default 'pending' check(status in ('pending','approved','rejected')),
 role text not null default 'member' check(role in ('owner','admin','member')),
 relationship text,
 created_at timestamptz not null default now(),
 reviewed_at timestamptz
);
create index if not exists fitcasa_accounts_pending on public.fitcasa_accounts(status);
alter table public.fitcasa_accounts enable row level security;
revoke all on public.fitcasa_accounts from anon;
grant select,insert on public.fitcasa_accounts to authenticated;
-- La app no puede actualizar roles ni estados directamente.
revoke update,delete on public.fitcasa_accounts from authenticated;
-- Función auxiliar SECURITY DEFINER evita recursión RLS.
create schema if not exists private;
create or replace function private.fitcasa_is_admin() returns boolean
language sql stable security definer set search_path='' as $$
 select exists(select 1 from public.fitcasa_accounts where user_id=(select auth.uid()) and status='approved' and role in ('owner','admin'));
$$;
revoke all on function private.fitcasa_is_admin() from public;
grant usage on schema private to authenticated;
grant execute on function private.fitcasa_is_admin() to authenticated;
drop policy if exists fitcasa_read_self_or_admin on public.fitcasa_accounts;
create policy fitcasa_read_self_or_admin on public.fitcasa_accounts for select to authenticated
 using (user_id=(select auth.uid()) or (select private.fitcasa_is_admin()));
drop policy if exists fitcasa_register_pending on public.fitcasa_accounts;
create policy fitcasa_register_pending on public.fitcasa_accounts for insert to authenticated
 with check(user_id=(select auth.uid()) and status='pending' and role='member' and relationship is null and reviewed_at is null);
create or replace function public.fitcasa_review_request(target_user uuid,decision text,relation text default null)
returns boolean language plpgsql security definer set search_path='' as $$
declare reviewer_role text;
begin
 select role into reviewer_role from public.fitcasa_accounts where user_id=auth.uid() and status='approved' and role in ('owner','admin');
 if reviewer_role is null then raise exception 'Acceso denegado'; end if;
 if decision not in ('approve','reject') then raise exception 'Decisión inválida'; end if;
 if decision='approve' and (relation is null or relation not in ('otro','conyuge','hijo','padre','madre','hermano','familiar')) then raise exception 'Parentesco inválido'; end if;
 update public.fitcasa_accounts set status=case when decision='approve' then 'approved' else 'rejected' end,
 relationship=case when decision='approve' then relation else null end,reviewed_at=now()
 where user_id=target_user and status='pending' and role='member';
 return found;
end $$;
revoke all on function public.fitcasa_review_request(uuid,text,text) from public;
grant execute on function public.fitcasa_review_request(uuid,text,text) to authenticated;
-- PASO MANUAL OBLIGATORIO: después de iniciar sesión por primera vez, localizar
-- el UUID del propietario en Authentication > Users y ejecutar por separado:
-- update public.fitcasa_accounts set status='approved',role='owner'
-- where user_id='REEMPLAZAR_CON_UUID_DEL_PROPIETARIO' and status='pending';
-- No otorgar propietario automáticamente al primer usuario: es inseguro.
