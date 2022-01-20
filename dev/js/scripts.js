
import { SlideinTop } from "./scrollAnimation";

import { SlideinRight } from "./scrollAnimation";

import { SlideinLeft } from "./scrollAnimation";

import { ScaleRight } from "./scrollAnimation";

window.addEventListener('load', function(){
    SlideinTop("#about-header", "#section-2");

    SlideinRight("#about-container", "#section-2");

    SlideinTop("#history-header", "#section-3");

    SlideinRight("#history-image-1", "#section-3");

    SlideinRight("#p2", "#section-3");

    SlideinLeft("#history-image-2", "#section-3");

    SlideinLeft("#p1", "#section-3");

    SlideinTop("#location-header", "#section-4");

    SlideinTop("#events-header", "#section-5");

    SlideinTop("#tickets-header", "#section-6");

    SlideinRight("#location-container", "#section-4");

    ScaleRight("hr", "#address");
});




// var $burger = $("#burger-icon");
// var $nav = $('nav[data-nav]');
// var $navA = $('nav[data-nav] a');
// var isVisible = false;

// function mouseClick(){

//     //console.log("clicked!!!!!!!!!!!!!!!!!!");

//     //console.log("click");


//     if(isVisible === false){
//         $nav.show();
//         isVisible = true;
//     }
//     else{
//         $nav.hide();
//         isVisible = false;
//     }
// }

// $burger.on( "click", mouseClick);

// $navA.on( "click", mouseClick);