# FitCasa 5.2 — Idiomas y calidad visual

## Idiomas
Español (Latinoamérica), inglés y portugués de Brasil. La navegación y más de 140 etiquetas, nombres de ejercicios y términos de uso frecuente tienen traducción revisada en el código. Los textos narrativos y algunos flujos de salud/administración todavía pueden aparecer en español: la localización completa sigue en desarrollo. El idioma se detecta del dispositivo y puede cambiarse desde el encabezado.

## Animaciones
Se conservan diagramas vectoriales sin conexión para siete ejercicios concretos, con pausa y velocidad. **No son GIF de personas ni vídeos de técnica validada**. Los demás ejercicios muestran una advertencia cuando no hay una demostración verificada. No deben usarse como única guía técnica.

## Correcciones
Se reincorporó `sleep.js`, que faltaba en el ZIP 5.1 aunque estaba referenciado en HTML y en el service worker. Se actualizó la versión de caché.

## Instalación
Sube el contenido de la carpeta `fitcasa` a la raíz de tu repositorio GitHub Pages, no el ZIP ni la carpeta contenedora. Conserva `icons/`.

## Seguridad
FitCasa guarda información localmente, sin cifrado integral ni autenticación de servidor. No es apta aún para ofrecer garantías de privacidad de datos de salud en un servicio público. Antes de una distribución amplia, revisar seguridad, traducciones de alertas y técnica de ejercicios con especialistas.


## Versión 5.3 — recuperación del acceso local
- Los perfiles antiguos pueden iniciar sesión con su contraseña existente, incluso si es corta.
- Tras el inicio de sesión con una clave corta se solicita su actualización a una contraseña de 6 a 12 caracteres.
- Ajustes > Cambiar contraseña exige verificar la contraseña actual.
- Cada perfil sigue siendo local e independiente en el mismo dispositivo.
- **No existe todavía registro por correo, recuperación por email ni sincronización entre dispositivos.** Requiere implementar backend de autenticación (p. ej., Supabase Auth) y migración consentida.
- La información de salud permanece sin cifrado local.

## Versión 5.4
- Nuevas contraseñas de 6 a 12 caracteres, con recomendación de 10 a 12.
- Las contraseñas existentes fuera del rango pueden seguir usándose para iniciar sesión y luego actualizarse.
- La autenticación sigue siendo local; no hay recuperación por correo.


## Versión 5.6
Portada con dos fotografías locales que alternan cada 10 segundos mediante transiciones CSS. Saludo, botón de acceso y selección de perfil permanecen fijos. Respeta la preferencia de movimiento reducido. No borra datos existentes.


## 5.7
Portada con cuatro fotografías rotatorias cada 10 segundos en bucle continuo, fundido suave, controles fijos. Sin modificar perfiles ni datos locales.
