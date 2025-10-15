import gsap from 'gsap'

gsap.utils.toArray(".scale-on-scroll").forEach(el => {
  gsap.from(el, {
    scale: 1.1,
    scrollTrigger: {
      trigger: el,
      start: "top bottom",
      end: "center center",
      scrub: 0.6,
    }
  });
});