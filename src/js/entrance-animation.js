import { gsap } from "gsap";

document.addEventListener("DOMContentLoaded", () => {
    const mediaElements = document.querySelectorAll(".hero img, .hero lottiefile, .hero video");
    let loadedCount = 0;

    mediaElements.forEach(el => {
    if (el.complete || el.readyState === 4) {
        loadedCount++;
    } else {
        el.addEventListener("load", () => {
        loadedCount++;
        if (loadedCount === mediaElements.length) animateHero();
        });
    }
    });

    function animateHero() {
        gsap.to(".entry-content", {opacity: 1, duration: 1,});
    }

    if (loadedCount === mediaElements.length) animateHero();

})
