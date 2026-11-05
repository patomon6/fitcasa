# FitCasa 5.9.1 — Recuperación de contraseñas

## Usuarios
En la pantalla de correo, escribe el correo y pulsa «¿Olvidaste tu contraseña?». Recibirás un enlace de Supabase (si corresponde). Al abrirlo en FitCasa, se mostrará el formulario para establecer una contraseña nueva. La contraseña nunca se muestra al administrador.

## Administrador
Después de que tu cuenta tenga rol `owner` o `admin` y esté aprobada, abre el panel FitCasa. En «Recuperar acceso de un familiar», escribe el correo del familiar y pulsa «Enviar enlace de recuperación». El correo se envía desde Supabase, no desde el dispositivo del administrador.

## Configuración Supabase
En Authentication > URL Configuration: Site URL = https://patomon6.github.io/fitcasa/ y Redirect URLs incluye https://patomon6.github.io/fitcasa/ . Configura el servicio de correo SMTP si necesitas envío confiable y a más usuarios; el correo integrado de Supabase puede tener límites.

## Advertencias
- Las cuentas que entran con Google recuperan su contraseña directamente en Google.
- El administrador no puede leer contraseñas existentes ni establecer una contraseña ajena.
- Esta versión NO migra ni restablece las contraseñas de los perfiles locales antiguos.
- No borres los datos del navegador si necesitas conservar perfiles y rutinas anteriores.
- La recuperación requiere conexión a Internet y correos correctamente configurados.
