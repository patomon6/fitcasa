# FitCasa 4 · Entrenador familiar

Aplicación PWA gratuita para Android publicada en GitHub Pages. No requiere cuenta ni backend.

## Funciones
- Perfiles familiares locales con foto y clave opcional (protección básica, no cifrado).
- Ficha inicial, IMC, metabolismo basal Mifflin-St Jeor, gasto diario estimado y explicaciones.
- Recordatorio de revisión semanal al abrir la aplicación.
- Programa de 52 semanas, entrenamiento guiado, cronómetro activo, pausa, ejercicios confirmados y descanso.
- Diario de comidas con base de alimentos limitada, peso, cintura, bicicleta, gráficas, estadísticas, exportación e importación de respaldo.
- Panel de progreso basado en registros reales.

## Instalación / actualización
1. Desde FitCasa 1.0, exportar respaldo JSON antes de cambiar archivos.
2. Subir el contenido de este ZIP a la raíz del repositorio `patomon6/fitcasa` en rama main, reemplazando archivos con el mismo nombre. Subir también `family.js`, `dashboard.js`, `coach4.js` y `icons/`.
3. Esperar GitHub Pages; cerrar y volver a abrir la PWA. Si se queda en versión antigua, refrescar en Chrome, sin borrar datos del sitio.
4. Probar crear perfil, completar ficha, iniciar/pausar/finalizar sesión, exportar/importar respaldo.

## Límites honestos
- Los datos están solo en el dispositivo; no hay sincronización entre celulares ni notificaciones push con la app cerrada.
- La clave local no cifra datos ni protege frente a un usuario técnico con acceso al dispositivo.
- No detecta repeticiones, calorías quemadas ni peso automáticamente sin sensores.
- Las calorías y proyecciones son estimaciones, no mediciones ni prescripciones médicas.
- La primera carga necesita internet; después el caché permite uso sin conexión, sujeto al navegador.

## Pruebas
`node --check app.js && node --check family.js && node --check dashboard.js && node --check coach4.js && node --check sw.js`

## Adaptación por perfil (versión final)
- En la ficha inicial se registra edad, experiencia, movilidad y limitaciones opcionales.
- Los perfiles principiantes de 65 años o más, o personas que indican movilidad reducida, reciben variantes de menor complejidad. La edad por sí sola no determina la aptitud.
- La adaptación no diagnostica lesiones ni sustituye evaluación clínica; el usuario confirma el esfuerzo y el trabajo completado.
- La configuración es individual y puede editarse en Ajustes → Editar ficha.
- Subir también `adaptive.js` junto con el resto de los archivos de la raíz.


## Administración de perfiles
La cuenta principal preexistente (id `principal`) se asigna como administradora al actualizar. En instalaciones nuevas, el primer perfil es administrador. En la pantalla de selección se muestran todos los perfiles. Para crear otro, ingresa al perfil administrador y abre Ajustes → Agregar perfil. La evaluación inicial solo se solicita al entrar por primera vez a cada perfil.

IMPORTANTE: el control de administrador y las claves son locales y no constituyen seguridad fuerte; con acceso técnico al almacenamiento del navegador pueden eludirse. No hay sincronización entre dispositivos.


## FitCasa 4.2 — Mensajes motivacionales
En Inicio, la frase cambia automáticamente cada 9 segundos mientras la página está visible. Incluye mensajes breves en español, inglés, portugués, francés, alemán e italiano, identificados por idioma. Animación discreta y compatible con la preferencia de movimiento reducido. No es un GIF: el texto sigue siendo accesible y ligero.


## FitCasa 4.3
- Indicadores IMC, metabolismo y otros con explicaciones desplegables dentro de la aplicación, sin alerta del navegador.
- Esquemas animados de movimiento y enfoque muscular en cada ejercicio y en el entrenador guiado. Son ilustraciones simplificadas, no videos de técnica ni GIF anatómicos.
- Las confirmaciones de otras operaciones aún pueden usar cuadros del navegador; requieren revisión posterior.

## Versión 4.4: animaciones controlables
- Los esquemas de movimiento se repiten automáticamente y funcionan sin conexión.
- Cada esquema permite pausar/reanudar y ajustar velocidad (lenta, normal o rápida).
- Incluye enfoque muscular y una indicación breve; son esquemas orientativos, **no demostraciones biomecánicas verificadas**.
- Se respeta la preferencia del dispositivo de reducir movimiento.

## FitCasa 4.5
- Se eliminó la tarjeta repetitiva de plan adaptado, conservando la adaptación interna.
- Pestañas Entrenar y Cardio.
- Cardio permite registrar bicicleta, caminar, correr, elíptica, bailar u otra actividad.


## FitCasa 4.7 — Salud y adaptación
- Cuestionario sin texto libre: condiciones declaradas, síntomas, molestias, restricciones y consentimiento explícito.
- «Ninguna conocida» no significa autorización médica.
- Reglas conservadoras de adaptación de ejercicios; advertencias integradas.
- Si se declaran síntomas de alarma, se deshabilitan los botones principales de inicio en la pestaña Entrenar. No es una barrera médica certificada ni garantiza impedir todo ejercicio desde otras rutas.
- Los datos sensibles se guardan solo localmente y **no están cifrados**. No usar como historia clínica ni publicar como producto médico.
- Para modificar las respuestas: Ajustes → Editar ficha y salud.
- La aplicación es para adultos; las recomendaciones no sustituyen evaluación clínica.


## Seguridad y administración 4.8
- En Ajustes → Administrar perfiles, el administrador puede eliminar perfiles secundarios y sus registros locales. Requiere confirmar con su propia contraseña.
- No puede ver, recuperar ni cambiar la contraseña de otro perfil.
- Contraseñas nuevas de 12 a 128 caracteres, PBKDF2-HMAC-SHA-256 con 310.000 iteraciones y sal aleatoria por perfil. Contraseñas antiguas se migran al ingresar correctamente.
- Bloqueo temporal tras cinco intentos fallidos, solo en memoria (no impide manipulación técnica).
- IMPORTANTE: los datos permanecen en localStorage SIN CIFRAR; esto NO equivale a seguridad de nivel bancario ni garantiza protección frente a acceso al dispositivo, herramientas de desarrollador o modificación de archivos. Para protección real de datos de salud y administración remota, usar backend, autenticación de servidor, control de acceso y cifrado.


## FitCasa 4.9: roles familiares
- Propietario: perfil principal migrado desde el administrador existente; no se puede borrar ni degradar desde la interfaz.
- Administrador: puede crear perfiles y eliminar perfiles normales, no modificar al propietario ni a otros administradores.
- Adulto: datos y configuración propios.
- Menor supervisado: etiqueta de rol; **aún no incluye** control parental real ni rutinas pediátricas validadas. No debe utilizarse para menores hasta implementarlas.
- Solo el propietario puede promover/degradar administradores, confirmando con su contraseña.
- Los roles se guardan localmente y NO proporcionan seguridad de servidor, cifrado de datos ni sincronización entre dispositivos.


## Edad y roles (5.0)
- Fecha de nacimiento obligatoria para perfiles nuevos; se calcula la edad con día y mes, sin pedir escribirla.
- Menores de 18 años reciben automáticamente el rol Menor supervisado y no pueden ser administradores.
- Para perfiles previos, registrar fecha desde Ajustes > Foto, nombre y clave.
- No se habilitan rutinas de adultos ni cálculos de déficit para menores. Se requiere módulo infantil validado y supervisión adulta.
- La fecha se almacena localmente; los permisos locales no equivalen a seguridad de servidor.
