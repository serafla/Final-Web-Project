import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.set("hr",{transformOrigin:"left"})

export function SlideinTop(animationElement, triggerElement){
    const tl = new gsap.timeline();
    
    tl.from (animationElement,{ 
        // duration: 2,
        y: -100,
        alpha: 0,
        scrollTrigger: {
            trigger: triggerElement,
            start: "top 80%",
            end: "bottom 90%",
            toggleActions: "restart none resume none",
            scrub: true
            // markers: true
        }
    });

}

export function SlideinRight(animationElement, triggerElement){
    const tl = new gsap.timeline();
    
    tl.from (animationElement,{ 
        // duration: 2,
        x: -300,
        alpha: 0,
        scrollTrigger: {
            trigger: triggerElement,
            start: "top 80%",
            end: "bottom 100%",
            toggleActions: "restart none resume none",
            scrub: true
            // markers: true
        }
    });

}

export function SlideinLeft(animationElement, triggerElement){
    const tl = new gsap.timeline();
    
    tl.from (animationElement,{ 
        // duration: 2,
        x: 300,
        alpha: 0,
        scrollTrigger: {
            trigger: triggerElement,
            start: "top 80%",
            end: "bottom 100%",
            toggleActions: "restart none resume none",
            scrub: true
            // markers: true
        }
    });

}

export function ScaleRight(animationElement, triggerElement){
    const tl = new gsap.timeline();
    
    tl.from (animationElement,{ 
        // duration: 2,
        scaleX: 0,
        alpha: 0,
        scrollTrigger: {
            trigger: triggerElement,
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "restart none resume none",
            scrub: true
            // markers: true
        }
    });

}


