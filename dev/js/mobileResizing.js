import { gsap } from "gsap";

export function displayWindowSize(){
    let menu = document.querySelector("#nav-container");
    let menuWidth = menu.offsetWidth;

   if(document.documentElement.clientWidth <= 1024){
    console.log("hide");
    gsap.set("#nav-container",{x:menuWidth});
    }else{
        console.log("un-hide");
        gsap.set("#nav-container",{y:0});
    }

}