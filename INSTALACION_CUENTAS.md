# FitCasa 5.8 — Integración Google y correo

1. En Supabase, abre **SQL Editor** y ejecuta `SUPABASE_CONFIGURACION.sql`.
2. En **Authentication > URL Configuration**, Site URL y Redirect URLs: `https://patomon6.github.io/fitcasa/`.
3. En **Authentication > Providers > Google**, habilita Google con el cliente OAuth nuevo. El secreto OAuth nunca se agrega al repositorio.
4. Sube **todos los archivos de la carpeta fitcasa** a la raíz del repositorio GitHub Pages, incluidos `cloud-auth.js` y `sw.js`. El archivo `.sql` es solo para el editor de Supabase.
5. Abre la web e inicia sesión con la cuenta del propietario. Quedará en **Pendiente** (correcto).
6. En **Supabase > Authentication > Users**, copia el UUID de esa cuenta. En **SQL Editor** ejecuta:

```sql
update public.fitcasa_accounts
set status='approved', role='owner'
where user_id='PEGA_AQUI_EL_UUID_DE_TU_CUENTA' and status='pending';
```

7. Recarga FitCasa. El propietario verá la bandeja de solicitudes y podrá aprobar/rechazar y asignar parentesco.

**Límites de esta primera integración:** la identidad y aprobación son reales y se validan en la base de datos. Las rutinas, medidas y datos de salud antiguos aún se guardan localmente: NO se han migrado a Supabase. Para evitar mostrar datos de otra persona en un dispositivo compartido, solo propietarios/administradores tienen acceso opcional a la app local antigua. Los miembros aprobados ven una pantalla de cuenta aprobada hasta completar la migración segura de datos. No hay notificaciones push: el propietario consulta solicitudes desde su panel. La cuenta rechazada sigue registrada con estado rechazado para evitar reenvíos simples; no se borra automáticamente. El acceso con Google puede seguir restringido a usuarios de prueba hasta publicar la app OAuth.

**Seguridad:** cambia/elimina el cliente OAuth anterior cuyo secreto se mostró en capturas y rota cualquier secreto compartido. Nunca publiques `service_role`, `sb_secret_...` ni secretos OAuth. La clave `sb_publishable_...` sí es pública. Las contraseñas de cuentas en línea las administra Supabase Auth (no el límite local de 6–12 caracteres).
