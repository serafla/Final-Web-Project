
import { animationTrigger } from "./scrollAnimation";

window.addEventListener('load', function(){
    animationTrigger("#about-header", "#section-2");

    animationTrigger("#history-image-2", "#section-3");

    animationTrigger("#history-image-1", "#section-3");
});




var $burger = $("#burger-icon");
var $nav = $('nav[data-nav]');
var $navA = $('nav[data-nav] a');
var isVisible = false;

function mouseClick(){

    //console.log("clicked!!!!!!!!!!!!!!!!!!");

    //console.log("click");


    if(isVisible === false){
        $nav.show();
        isVisible = true;
    }
    else{
        $nav.hide();
        isVisible = false;
    }
}

$burger.on( "click", mouseClick);

$navA.on( "click", mouseClick);