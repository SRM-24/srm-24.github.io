# Web mejorada para srm-24.github.io

## Qué cambia

- Diseño responsive para móvil y escritorio.
- Cabecera más limpia y navegación con estado activo.
- Portada sin texto "WIP".
- Página "Sobre mí" sin Lorem ipsum y con secciones editables.
- CV legible en HTML, con opción de enlazar un PDF.
- Modo oscuro persistente con `localStorage`.
- Mejoras de accesibilidad: `viewport`, `description`, `aria-current`, `aria-pressed`, foco visible y enlace para saltar al contenido.
- Código JavaScript sin `onclick` inline.

## Cómo usarlo

1. Copia estos archivos encima de los equivalentes de tu repositorio.
2. Mantén tus carpetas `images/` y, si usas PDF, crea `objects/document.pdf` o cambia el enlace en `pages/CV.html`.
3. Personaliza los textos de `about_me.html` y `CV.html` con tus datos reales.
4. Haz commit y push a GitHub Pages.

```bash
git add .
git commit -m "Mejora diseño y accesibilidad de la web"
git push
```
