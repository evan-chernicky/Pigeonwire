import gsap from 'gsap'

gsap.from(".scale-on-scroll", {
  scale: 1.1, 
  scrollTrigger: {
    trigger: ".scale-on-scroll",
    start: "top bottom", 
    end: "center center", 
    scrub: 0.6,   
    // markers: true
  }
});

