<div align="center">

# 🏡 FitCasa

### Bienestar y entrenamiento en casa, a tu ritmo

**Una aplicación web progresiva para organizar rutinas, acompañar hábitos saludables y gestionar el acceso de la familia desde una experiencia sencilla.**

[![Versión](https://img.shields.io/badge/versi%C3%B3n-5.9.1-188f72?style=flat-square)](https://github.com/patomon6/fitcasa)
![Estado](https://img.shields.io/badge/estado-en%20desarrollo-f0ad4e?style=flat-square)
![Plataforma](https://img.shields.io/badge/plataforma-Web%20%2F%20PWA-3973b9?style=flat-square)

**[Abrir FitCasa](https://patomon6.github.io/fitcasa/)** · **[Guía de instalación](INSTALACION_CUENTAS.md)** · **[Recuperación de acceso](RECUPERACION_CUENTAS.md)**

</div>

---

## ✨ ¿Qué es FitCasa?

FitCasa es un proyecto de aplicación web progresiva (PWA) pensado para facilitar el ejercicio en casa y el seguimiento personal de hábitos de bienestar. Combina una interfaz adaptable a dispositivos móviles con herramientas de entrenamiento y un sistema de cuentas familiares en desarrollo.

> **Estado actual:** versión de desarrollo y pruebas. Algunas funciones de cuentas utilizan Supabase; los datos de entrenamiento y salud anteriores permanecen almacenados localmente y todavía no se sincronizan entre dispositivos.

## 🚀 Funcionalidades

| Área | Características |
| --- | --- |
| 🏋️ Entrenamiento | Rutinas y funciones de adaptación del entrenamiento |
| 📊 Seguimiento | Vistas de progreso y registro personal en el dispositivo |
| 🌙 Bienestar | Herramientas relacionadas con descanso y hábitos saludables |
| 👨‍👩‍👧‍👦 Familia | Solicitudes de acceso, aprobación y asignación de parentescos |
| 🔐 Acceso | Inicio de sesión con Google o correo mediante Supabase Auth |
| ✉️ Recuperación | Restablecimiento de contraseña por correo para cuentas compatibles |
| 🌐 Idiomas | Español, inglés y portugués de Brasil, con traducción aún parcial |
| 📱 Experiencia móvil | Aplicación web instalable, diseño adaptable y recursos locales |

### Una bienvenida más cercana

La portada incorpora fotografías que alternan cada **10 segundos**, transiciones suaves y un acceso separado del contenido principal. El diseño contempla la preferencia del dispositivo por movimiento reducido.

### Demostraciones de ejercicios

Se incluyen diagramas vectoriales sin conexión para **siete ejercicios**, con controles de pausa y velocidad. **No sustituyen instrucciones técnicas verificadas ni asesoramiento profesional.**

## 🛠️ Tecnologías

- **Frontend:** HTML, CSS y JavaScript.
- **Aplicación progresiva:** manifiesto web y service worker.
- **Autenticación y gestión de cuentas:** Supabase Auth y base de datos con políticas de acceso.
- **Publicación web:** GitHub Pages.

## 📲 Ejecutar la aplicación

Visita **https://patomon6.github.io/fitcasa/** desde un navegador compatible.

Para publicar una actualización:

1. Coloca los archivos de la carpeta `fitcasa` en la **raíz** del repositorio; conserva `icons/`.
2. Comprueba que GitHub Pages publique la rama y carpeta configuradas.
3. Verifica el acceso y las funciones en el navegador antes de compartir la aplicación.

La configuración inicial de Supabase y Google OAuth está documentada en **[INSTALACION_CUENTAS.md](INSTALACION_CUENTAS.md)**. El archivo `SUPABASE_CONFIGURACION.sql` se ejecuta en el editor SQL de Supabase, **no** en GitHub Pages.

## 🔑 Cuentas y permisos

FitCasa distingue entre la autenticación en línea y los perfiles antiguos del dispositivo:

- **Cuentas en línea:** registro e inicio de sesión con Google o correo; aprobación de solicitudes por propietario o administrador.
- **Recuperación de acceso:** envío de enlaces de restablecimiento para cuentas de correo; las cuentas exclusivas de Google recuperan el acceso desde Google.
- **Perfiles locales anteriores:** siguen siendo independientes y sus contraseñas no se recuperan automáticamente mediante Supabase.

La asignación inicial del propietario debe realizarse de forma controlada desde Supabase. Consulta **[INSTALACION_CUENTAS.md](INSTALACION_CUENTAS.md)**.

## 🔒 Privacidad y seguridad

FitCasa está en desarrollo. Antes de su uso público con datos personales o de salud, deben completarse las revisiones de seguridad, privacidad, consentimiento y tratamiento de datos.

- Las credenciales en línea son administradas por Supabase Auth; el administrador **no puede leer contraseñas**.
- Los datos antiguos de salud y entrenamiento **permanecen en almacenamiento local**, sin migración ni cifrado integral implementados.
- **No publiques** claves `service_role`, `sb_secret_...`, secretos OAuth ni credenciales privadas en el repositorio.
- No borres los datos del navegador sin respaldar la información local que necesites conservar.

## 🧭 Próximas mejoras

- Migración segura y consentida de perfiles y registros locales.
- Sincronización de datos personales entre dispositivos, con controles de acceso.
- Mayor cobertura de traducciones y accesibilidad.
- Validación de demostraciones y recomendaciones de ejercicio.
- Pruebas integrales de autenticación, recuperación y permisos.

## 📚 Documentación

| Documento | Propósito |
| --- | --- |
| [INSTALACION_CUENTAS.md](INSTALACION_CUENTAS.md) | Configuración de Supabase, Google y propietario |
| [RECUPERACION_CUENTAS.md](RECUPERACION_CUENTAS.md) | Recuperación de acceso por correo |
| [SUPABASE_CONFIGURACION.sql](SUPABASE_CONFIGURACION.sql) | Esquema y políticas de cuentas |
| [CORRECCION_URL.txt](CORRECCION_URL.txt) | Referencia de corrección de la URL de Supabase |

## ⚠️ Aviso

FitCasa es una herramienta de apoyo al bienestar y **no reemplaza la evaluación ni las indicaciones de profesionales de salud o actividad física**.

---

<div align="center">

**FitCasa** · Proyecto independiente en evolución 💚

</div>
