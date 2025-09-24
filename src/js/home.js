import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin) 

var tl = gsap.timeline();

tl.from("svg path", { duration: 2, drawSVG: 0 }, 0.1); 
tl.play();

console.log(tl)