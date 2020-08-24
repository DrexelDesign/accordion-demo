/* ---------------
    accordion js
--------------- */

import { gsap } from 'gsap'

// collapse all of the bottoms
gsap.set(".bottom",{height:0});

gsap.set(".fas",{transformOrigin: "center"});

var contentHeight;

$(".option").on("click", function(){

    //find the hight of the content class on the option that was just clicked
    contentHeight = $(this).children(".bottom").find('.content').outerHeight();

    //console.log(contentHeight);

    // Step 1: Check to see if the data toggle is set to true, and if so collapse all of the .bottom classes
    const option = document.querySelector('.option')
    // this if statement will check to see if the data attribute data-accordion-toggle is set to true or false
    if(option.dataset.accordionToggle === "true"){
        //this will animate all of the bottom sections back to a height of 0
        gsap.to(".bottom",{duration:0.25,height:0})

        // any arrow that is facing up will be animated back to facing down
        gsap.to(".fas",{duration: 0.1, rotation:0});
    }

    //console.log($(this).children(".bottom").find('.content').outerHeight());
    //check to see if the content is visible
    if($(this).children(".bottom").height() > 0){
        gsap.to($(this).children(".bottom"), {duration:0.25, height: 0});
        // animate the arrow to face up
        gsap.to($(this).children(".top").children(".fas"),{duration: 0.25, rotation:0});
    }else{
        gsap.to($(this).children(".bottom"), {duration:0.25, height: contentHeight});
        // animate the arrow to face down
        gsap.to($(this).children(".top").children(".fas"),{duration: 0.25, rotation:180});
        
    }

    console.log($(this).children(".arrow"));

});