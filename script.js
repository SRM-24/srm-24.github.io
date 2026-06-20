// -----------------------------
// Loader inicial
// -----------------------------
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  const content = document.getElementById("content");

  setTimeout(() => {
    loader?.classList.add("hide");

    content?.classList.remove("hidden");
    content?.classList.add("show");
  }, 5200);

  setTimeout(() => {
    loader?.remove();
  }, 6200);
});

// -----------------------------
// Fondo Matrix Rain
// Basado en el efecto canvas del repo rain_matrix/html-css-javascript
// -----------------------------
(() => {
  const canvas = document.getElementById("matrixCanvas");
  if (!canvas) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (reduceMotion.matches) return;

  const ctx = canvas.getContext("2d");
  const chars = "0123456789/*-+/<>?;:[]~!@#$%^&*()+=abcdefghijklmnopqrstuvwxyz";
  const fontSize = 16;
  let drops = [];
  let columns = 0;
  let animationId;

  function resizeCanvas() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    canvas.width = Math.floor(window.innerWidth * dpr);
    canvas.height = Math.floor(window.innerHeight * dpr);
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    columns = Math.ceil(window.innerWidth / fontSize);
    drops = Array.from({ length: columns }, () => Math.floor(Math.random() * window.innerHeight / fontSize));
  }

  function drawMatrixRain() {
    ctx.fillStyle = "rgba(2, 4, 3, 0.08)";
    ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

    ctx.fillStyle = "rgba(0, 255, 65, 0.82)";
    ctx.font = `${fontSize}px 'Share Tech Mono', monospace`;

    drops.forEach((drop, x) => {
      const text = chars[Math.floor(Math.random() * chars.length)];
      ctx.fillText(text, x * fontSize, drop * fontSize);

      if (drop * fontSize > window.innerHeight && Math.random() > 0.975) {
        drops[x] = 0;
      } else {
        drops[x] += 1;
      }
    });

    animationId = requestAnimationFrame(drawMatrixRain);
  }

  window.addEventListener("resize", resizeCanvas);

  reduceMotion.addEventListener?.("change", (event) => {
    if (event.matches && animationId) {
      cancelAnimationFrame(animationId);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    } else {
      resizeCanvas();
      drawMatrixRain();
    }
  });

  resizeCanvas();
  drawMatrixRain();
})();
