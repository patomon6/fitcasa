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
