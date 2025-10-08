import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {SplitText} from "gsap/SplitText";

gsap.registerPlugin(SplitText) 

window.addEventListener("DOMContentLoaded", () => {
    document.fonts.ready.then(() => {
        // Split text into spans
        let typeSplit = SplitText.create(".text-split", {
            types: "words, chars",
            tagName: "span",
              autoSplit: true,
            onSplit(self) {
                return gsap.from(self.words, {
                duration: .8, 
                x: 100, 
                autoAlpha: 0, 
                stagger: 0.02
                });
            }
        });


        // Link timelines to scroll position
        function createScrollTrigger(triggerElement, timeline) {
            // Reset timeline when scrolls out of view (past bottom)
            ScrollTrigger.create({
            trigger: triggerElement,
            start: "top bottom",
            onLeaveBack: () => {
                timeline.progress(0);
                timeline.pause();
            }
            });

            // Play timeline when scrolled into view
            ScrollTrigger.create({
            trigger: triggerElement,
            start: "top 90%",
            onEnter: () => timeline.play()
            });
        }

        // Animate elements with [words-slide-up]
        document.querySelectorAll(".words-slide-up").forEach((el) => {
            let tl = gsap.timeline({ paused: true });
            tl.from(el.querySelectorAll(".word"), {
            opacity: 0,
            yPercent: 100,
            duration: 0.5,
            ease: "back.out(2)",
            stagger: { amount: 0.5 }
            });

            createScrollTrigger(el, tl);
        });
    });
});