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


// 1. Refresh ScrollTrigger when GF form is re-rendered (e.g., AJAX validation)
document.addEventListener('gform_post_render', function () {
  ScrollTrigger.refresh();
});

// 2. Prevent ScrollSmoother from jumping to the bottom after form submission
document.addEventListener('gform_confirmation_loaded', function (event) {
  // Pause the smoothing to let GF adjust normally
  smoother.paused(true);

  // Optional: Scroll manually to form location if needed
  const form = document.getElementById('gform_' + event.detail.formId);
  if (form) {
    gsap.to(window, { scrollTo: form.offsetTop, duration: 0 });
  }

  // Re-enable smooth scrolling after short delay
  setTimeout(() => smoother.paused(false), 300);
});