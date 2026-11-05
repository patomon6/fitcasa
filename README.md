# FitCasa PWA — Versión 1.0

Aplicación web estática y gratuita para registrar entrenamiento de fuerza (series, repeticiones, peso), bicicleta estática, alimentación (calorías y proteína), peso, cintura y metas de 75/70 kg.

## Probar en computador

1. Descomprime la carpeta `fitcasa`.
2. Instala Python si no lo tienes.
3. Abre una terminal en la carpeta `fitcasa` y ejecuta `python -m http.server 8000` (en Windows también puedes usar `py -m http.server 8000`).
4. Abre `http://localhost:8000`.

## Instalar en Android

Para que sea instalable en Android, **debes publicar los archivos en HTTPS** (abrir `index.html` directamente no basta). Por ejemplo, crea un repositorio público en GitHub, sube los archivos de la carpeta `fitcasa` a la raíz, entra en Settings > Pages > Deploy from a branch y elige `main` / `root`. Abre la URL HTTPS que muestre GitHub Pages en Chrome Android y usa el menú de Chrome → Instalar aplicación o Agregar a pantalla de inicio. En algunos navegadores la opción puede variar.

## Datos y privacidad

- Todos los datos se almacenan en `localStorage` del navegador, no se envían a ningún servidor.
- Exporta regularmente un respaldo JSON desde Ajustes; puedes importarlo después en otro dispositivo.
- No existe sincronización automática entre dispositivos.
- Si borras los datos del sitio o desinstalas la app, puedes perder los registros.
- La app no calcula automáticamente calorías ni nutrientes: debes introducirlos a partir de una fuente fiable.
- El servicio sin conexión funciona después de visitar la aplicación publicada y almacenar los recursos en caché.

## Estructura

- `index.html`: interfaz principal
- `style.css`: estilos responsivos
- `app.js`: lógica y almacenamiento local
- `manifest.webmanifest`: metadatos de instalación
- `sw.js`: caché para uso sin conexión
- `icons/`: iconos

## Limitaciones y seguridad

Esta versión es un prototipo personal. No tiene cuenta, nube, recordatorios, fotografías, catálogo nutricional, ni sincronización. Los pesos y calorías propuestos son orientativos y no sustituyen evaluación profesional. No ingreses datos de terceros en un equipo compartido.
