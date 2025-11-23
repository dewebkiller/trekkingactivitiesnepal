$(document).ready(function () {
  // Register GSAP ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);

  // Create snowfall effect
  function createSnowflakes() {
    const snowContainer = document.getElementById("snow-container");
    const numberOfSnowflakes = 100;

    for (let i = 0; i < numberOfSnowflakes; i++) {
      const snowflake = document.createElement("div");
      snowflake.classList.add("snowflake");

      const size = Math.random() * 8 + 2;
      const startPosition = Math.random() * 100;
      const animationDuration = Math.random() * 5 + 4;
      const animationDelay = Math.random() * 8;
      const opacity = Math.random() * 0.7 + 0.3;

      const fallTypes = ["fall", "fall-left", "fall-right", "fall-diagonal"];
      const randomFallType =
        fallTypes[Math.floor(Math.random() * fallTypes.length)];

      snowflake.style.width = size + "px";
      snowflake.style.height = size + "px";
      snowflake.style.left = startPosition + "%";
      snowflake.style.animationName = randomFallType;
      snowflake.style.animationDuration = animationDuration + "s";
      snowflake.style.animationDelay = animationDelay + "s";
      snowflake.style.opacity = opacity;

      snowContainer.appendChild(snowflake);
    }
  }

  createSnowflakes();

  // GSAP Parallax Animation
  gsap
    .timeline({
      scrollTrigger: {
        trigger: "header",
        start: "top top",
        end: "bottom top",
        scrub: 0.5,
        markers: true,
      },
    })
    .fromTo(".sky", { y: 0 }, { y: -300 }, 0)
    .fromTo(".mountBg", { y: 0 }, { y: -150 }, 0)
    .fromTo(".mountMg", { y: 0 }, { y: -250 }, 0)
    .fromTo(".mountFg", { y: 0 }, { y: -250 }, 0)
    // .fromTo(".cloud1", { y: 100 }, { y: -220 }, 0)
    .fromTo(".cloud2", { y: 0 }, { y: -200 }, 0)
    .fromTo(".cloud3", { y: 0 }, { y: -150 }, 0)
    .fromTo("tanhero h1", { y: 0 }, { y: 100 }, 0)
    .fromTo("tanhero h2", { y: 0 }, { y: 100 }, 0);
});
