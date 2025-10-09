import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
    if (document.body.classList.contains('home')) initHome();
});

function initHome() {
    let tl = gsap.timeline({
        scrollTrigger: {
      trigger: ".hero",     
      start: "top top", 
      end: "top+=800 top",       
            toggleActions: "play reverse play reverse",
            scrub: true,
            markers: false
        }
    });

    tl.to("body", { backgroundColor: 'rgb(17, 17, 17)', duration: 1, ease: "power2.out"}, 0)
      .to(".hero", { duration: 0.35, autoAlpha: 0 }, 0)
      .to(".hero-decoration--container svg path", { duration: 0.7, fill: "#ffffff" }, 0);
}