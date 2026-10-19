# AGENTS.md — Contexto del proyecto para asistentes/agentes de IA

> Propósito de este archivo: que cualquier persona (o IA) que abra este repositorio en otra computadora pueda entender el proyecto en minutos y continuar el trabajo sin preguntas básicas.

## Qué es este proyecto

Sitio web romántico **one-page** (una sola página HTML) regalado por Erik a su novia Yanet. Todo en español. No tiene framework, ni build, ni servidor: son archivos HTML/CSS/JS estáticos que se abren directo en el navegador (o se publican en GitHub Pages).

- **Página única:** `Index.html` (raíz del proyecto)
- **Stack:** HTML5 + CSS3 vanilla + JavaScript ES Modules (ESM). Nada más.
- **Sin dependencias:** no hay `package.json`, no hay npm, no hay librerías externas.
- **Ejecución:** abrir `Index.html` con doble clic basta. Para desarrollo, cualquier servidor estático sirve (`npx serve`, Live Server de VS Code, etc.). Los módulos ES requieren que no se cargue por `file://` en algunos navegadores — si los imports fallan, usar un servidor local.

## Estructura del proyecto

```
Pagina-de-novios/
├── Index.html              ← ÚNICA página (todo el contenido)
├── AGENTS.md               ← Este archivo
├── Assets/
│   ├── Icons/              ← PNG: corazon, cruz, carta-de-amor, izquierda, derecha
│   ├── Images/             ← Fotos del álbum y del quiz (numéricas: 11.jpeg, ...)
│   └── Music/              ← EVERYTHING.mp3 (canción de fondo, loop)
├── CSS/
│   ├── main.css            ← SOLO @imports (agregar aquí el import de cada css nuevo)
│   ├── general.css         ← body, botones, .btn, .card, .icon, .section, body.modal-open
│   ├── scroll.css          ← animación .fade al hacer scroll
│   ├── hero.css            ← portada 100vh
│   ├── moments.css         ← carrusel infinito (marquee CSS)
│   ├── album.css           ← álbum con efecto libro
│   ├── phrases.css         ← tarjeta de frases cambiantes
│   ├── story.css           ← sección "Nuestra historia"
│   ├── footer.css          ← pie con corazones flotantes
│   └── quiz.css            ← modal del quiz
├── JS/
│   ├── main.js             ← ORQUESTADOR: importa todos los módulos y los ejecuta en DOMContentLoaded
│   ├── album.js            ← initAlbum(): fotos con efecto libro (prev/next)
│   ├── moments.js          ← initMoments(): llena #carousel y duplica items para loop infinito
│   ├── phrases.js          ← initPhrases(): cambia #phrase cada 2 segundos
│   ├── quiz.js             ← initQuiz(): modal, preguntas, puntaje y música
│   └── scroll.js           ← initScroll(): IntersectionObserver para .fade
└── docs/
    ├── como-funciona-el-proyecto.html / .pdf   ← documentación general del proyecto
    └── pantalla-inicial-musica.html / .pdf     ← doc de la mejora de la cortina inicial
```

## Convenciones del proyecto (SEGUIR SIEMPRE)

1. **Todo el texto al español**, incluidos comentarios del código y mensajes en consola.
2. **Comentarios extensos y explicativos** en cada archivo: se diseñó el código para que sea didáctico para Erik mientras aprende. Cada bloque importante tiene un comentario tipo encabezado `==========`.
3. **CSS:** un archivo por sección de la página. `main.css` solo contiene `@import`s — **todo css nuevo debe importarse ahí** (el orden importa: al final gana la regla de mayor especificidad).
4. **JS:** patrón de módulos ES (`export function initXxx()`). `main.js` importa y ejecuta cada `initXxx()` dentro de `DOMContentLoaded`. Cada módulo nuevo debe registrarse ahí.
5. **Nombres de clases:** kebab-case (`.quiz-modal`, `.splash-content`, `.book-cover`). IDs en camelCase (`#openQuizBtn`, `#bgMusic`).
6. **Rutas de archivos:** distinguen mayúsculas/minúsculas (importante para GitHub Pages en Linux). Las carpetas se llaman exactamente `CSS/`, `JS/`, `Assets/`.
7. **No introducir frameworks ni librerías.** El proyecto es vanilla a propósito.
8. **Paleta de colores:** azul `#5DADE2`, azul oscuro texto `#2C3E50`, rojo/rosa `#e55353`/`#efcccc`, gradientes rosado→blanco→azul.

## Cómo funciona cada sección (mapa mental)

| Sección | HTML | CSS | JS |
|---|---|---|---|
| Música de fondo | `<audio id="bgMusic" loop>` en `<body>` | — | iniciada por el splash y reforzada en quiz.js |
| Cortina inicial (splash) | `.splash#splash` con botón `#startBtn` | `splash.css` | `initSplash()` |
| Hero/portada | `<header class="hero">` | `hero.css` | — |
| Frases cambiantes | `#phrase` | `phrases.css` | `initPhrases()` |
| Nuestra historia | `.story-section` | `story.css` | — |
| Momentos (marquee) | `#carousel` | `moments.css` | `initMoments()` |
| Álbum (libro) | `.book-cover`/`.book-page` | `album.css` | `initAlbum()` |
| Quiz (modal) | `.quiz-modal` + `#quizModal` | `quiz.css` | `initQuiz()` |
| Footer | `.love-footer` | `footer.css` | — |
| Animación al scroll | clases `.fade` | `scroll.css` | `initScroll()` (IntersectionObserver) |

## Detalles críticos / trampas comunes

- **Autoplay de audio:** los navegadores bloquean `audio.play()` sin un clic previo del usuario. Por eso existe la **cortina inicial** (`.splash`): su botón es el "user gesture" que arranca la música. Si se elimina la cortina, la música dejaría de sonar hasta abrir el quiz.
- **`body.modal-open`:** clase genérica en `general.css` que hace `overflow: hidden` sobre el body (bloquea scroll). Se usa tanto para el modal del quiz como para la cortina splash.
- **`z-index` jerárquicos:** footer/hero normales (auto), modal quiz = `9999`, cortina splash = `10000`. Respetar ese orden si se agregan capas nuevas.
- **`#quizImage`** se reutiliza entre preguntas; quiz.js alterna `display: block/none` con estilo inline según si la pregunta tiene `img`.
- **Carrusel infinito:** `moments.js` duplica los items en el DOM y CSS anima con `@keyframes` (`scrollGallery`); no es un scroll real.
- **El modal del quiz** limita su alto con `max-height: 90vh` + `display: flex`; el scroll interno vive en `#quizContent`/`.quiz-result` (regla `overflow-y: auto` + `min-height: 0`).

## Estado actual del proyecto (última revisión)

- ✅ Todas las secciones operativas: hero, frases, historia, momentos, álbum, quiz, footer.
- ✅ Música de fondo con cortina inicial (splash) que la arranca desde el primer clic.
- ✅ Modal del quiz corregido: no desborda con imágenes y bloquea el scroll del fondo.
- 🎯 Fase: retoques finales antes de regalar la página.

## Documentación en `docs/`

- `como-funciona-el-proyecto.html` / `.pdf` — documentación técnica general.
- `pantalla-inicial-musica.html` / `.pdf` — mejora de la cortina inicial paso a paso.

**Cómo generar un PDF nuevo a partir de un HTML en Windows (PowerShell):**
```powershell
$edge = "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
$tmp  = "$env:TEMP\edge-pdf-profile"
New-Item -ItemType Directory -Force -Path $tmp | Out-Null
& $edge --headless=new --disable-gpu --no-pdf-header-footer `
  --user-data-dir="$tmp" `
  --print-to-pdf="ruta\completa\salida.pdf" `
  "file:///C:/ruta/completa/entrada.html"
```
(Ruta con espacios: usar `%20` en la URL `file:///` y comillas dobles en `--print-to-pdf`.)

## Reglas para cambios grandes

1. Antes de modificar, leer el archivo completo (son pequeños: HTML ~240 líneas, CSS <200, JS <210).
2. Mantener el estilo de comentarios existente.
3. Si se agrega un archivo CSS: importarlo en `CSS/main.css`.
4. Si se agrega un módulo JS: importarlo y ejecutar su `initXxx()` en `JS/main.js`.
5. No romper las rutas de `Assets/` (distinguen mayúsculas).
6. Probar en desktop y en móvil (ancho ≤ 768px) — hay media queries en casi todos los css.
