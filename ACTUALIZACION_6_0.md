# FitCasa 6.0 — acceso único y datos personales en la nube

1. En Supabase SQL Editor ejecuta la sección «FITCASA 6: DATOS PERSONALES MULTIDISPOSITIVO» del archivo SUPABASE_CONFIGURACION.sql (o el archivo entero si no lo ejecutaste antes).
2. Verifica en `public.fitcasa_accounts` que tu cuenta Google tenga `status=approved` y `role=owner`. La app no se autoasigna permisos.
3. Sube a la raíz del repositorio todos los archivos dentro de `fitcasa/` y espera la publicación de GitHub Pages.
4. Entra con Google o correo. Al aprobar la cuenta, se abre FitCasa sin pedir contraseña local. El panel de administración está en el botón **Administración**.
5. Los datos de cada cuenta se guardan en `fitcasa_user_data` y se consultan desde otros dispositivos con la misma cuenta.

**Limitaciones:** Los datos de perfiles locales antiguos no se migran automáticamente; permanecen en el almacenamiento del dispositivo anterior. El sistema usa la última escritura completa para actualizar el registro: evita editar simultáneamente en dos dispositivos. La sincronización necesita conexión y la copia local no está cifrada. No está validado para datos de salud sensibles. La recuperación de contraseña por correo es para cuentas de correo/contraseña; Google recupera su contraseña en Google. El administrador no puede ver contraseñas.
