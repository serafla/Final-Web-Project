import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function animationTrigger(animationElement, triggerElement){
    const tl = new gsap.timeline();
    
    tl.from (animationElement,{ 
        // duration: 2,
        x: -100,
        alpha: 0,
        scrollTrigger: {
            trigger: triggerElement,
            start: "middle 60%",
            end: "bottom 80%",
            toggleActions: "restart none resume none",
            scrub: true,
            markers: true
        }
    });

}

