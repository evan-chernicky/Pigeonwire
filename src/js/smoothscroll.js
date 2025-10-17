import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export const smoother = ScrollSmoother.create({
  smooth: .6,
  effects: true,  
});


//Allows anchor links to work w/ the smoothscroller
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        smoother.scrollTo(target, {
            duration: 1.5,     // seconds for the scroll animation
            ease: "power2.out" // any GSAP easing function
        });
      }
    });
  });
})
