//FOR USING LOCOMOTIVE ONLY--search locomotive js cdn --SELECT locomotive scroll js select then copy link path and paste in script src below html and CODE -->     <script src="https://cdn.jsdelivr.net/npm/locomotive-scroll@3.5.4/dist/locomotive-scroll.js"></script>
// and then --SELECT locomotive scroll css select then copy link path and paste in link src above html and CODE-->    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/locomotive-scroll@3.5.4/dist/locomotive-scroll.css">
//but  if you are using scroll trigger code in js file then using only above code will not work locomotive bec. of presence of scroll trigger code in js js file so we have  to add somethig 
//SEARCH--locomotive scrolltriger codepen then copy then copy whole js code  and paste in js file and replace all .smoothscroll with #main and this is the CODE --> 
//   gsap.registerPlugin(ScrollTrigger);


// // --- SETUP START ---
// // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
// const locoScroll = new LocomotiveScroll({
//   el: document.querySelector("#main"),
//   smooth: true
// });
// // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
// locoScroll.on("scroll", ScrollTrigger.update);

// // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
// ScrollTrigger.scrollerProxy("#main", {
//   scrollTop(value) {
//     return arguments.length ? locoScroll.scrollTo(value, {duration: 0, disableLerp: true}) : locoScroll.scroll.instance.scroll.y;
//   }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//   getBoundingClientRect() {
//     return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
//   },
//   // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
//   pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
// });

// // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
// ScrollTrigger.defaults({ scroller: "#main" });
// // --- SETUP END ---
// // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
// ScrollTrigger.refresh();







function locomotiveAnimation(){
    gsap.registerPlugin(ScrollTrigger);


// --- SETUP START ---
// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, {duration: 0, disableLerp: true}) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.defaults({ scroller: "#main" });
// --- SETUP END ---








// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}
function loadingAnimation(){
    var tl = gsap.timeline()
tl.from(".line h1",{
    y: 150,
    stagger: 0.25,
    duration: 0.5,
   delay: 0.5
})
tl.from("#line1-part1, .line h2",{
    opacity: 0,
    onStart: function(){
var h5Timer = document.querySelector("#line1-part1 h5")
var grow = 0
setInterval(function(){
    if(grow<100){
        h5Timer.innerHTML = grow++
    }
    else{
        h5Timer.innerHTML = grow
    }
}, 43)
    }
})
tl.to(".line h2", {
    animationName: "anime",
    opacity: 1,
})
tl.to("#loader",{
    opacity: 0,
    duration: 2.5,// change it when workis done
    delay: 3.5
})
tl.from("#page1", {
    y:1600,
    opacity:0,
    ease: Power4,
    duration: 0.5,
})
tl.to("#loader",{
    display: "none",
})
tl.from("#nav",{
    y: -150,
    stagger: 0.5,
   opacity:0,
})
tl.from(["#hero1 h1, #hero2 h1, #hero4 h1 "],{
    y: 140,
    stagger: 0.2
})
tl.from(["#hero1", "#page2"],{
    opacity:0
}, "-=1.2");






}




function cursorAnimation(){
   document.addEventListener("mousemove",function(dets){
     gsap.to("#crsr",{
        left: dets.x,
        top: dets.y,
     })
})

var videoContainer = document.querySelector("#video-container");
var video = document.querySelector("#video-container video");
videoContainer.addEventListener("mouseenter", function(){
 videoContainer.addEventListener("mousemove", function(dets){
    gsap.to("#crsr", {
        opacity: 0,
    });
    gsap.to("#video-crsr", {
        left: dets.x - 600,
        top: dets.y- 340,
    });
 });
});
videoContainer.addEventListener("mouseleave", function(){
   gsap.to("#crsr", {
         opacity: 1,
     });
      gsap.to("#video-crsr", {
        left: "70%",
        top: "-15",
    });
});

var flag = 0
videoContainer.addEventListener("click", function(){
 if(flag == 0){
       video.play()
    video.style.opacity = 1
     document.querySelector("#video-crsr").innerHTML = `<i class="ri-pause-large-fill"></i>`
    gsap.to("#video-crsr",{
        scale: 0.5
    })
    flag = 1
 }
 else{
       video.pause()
    video.style.opacity = 0
     document.querySelector("#video-crsr").innerHTML = `<i class="ri-play-large-fill"></i>`
    gsap.to("#video-crsr",{
        scale: 1
    })
    flag = 0
 }
})

 Shery.makeMagnet("#nav-part3 h3");
}
function sheryAnimation(){
    Shery.imageEffect(".image-div",{
        style: 5,
        config: {"a":{"value":2,"range":[0,30]},"b":{"value":0.75,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7272614591338407},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.34,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.61,"range":[0,10]},"metaball":{"value":0.46,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.46,"range":[0,2]},"noise_scale":{"value":7.63,"range":[0,100]}},
        gooey: true
    })
}


document.addEventListener("mousemove", function(dets){  //for page1 web/graphic hover effect
    gsap.to("#flag",{
        x: dets.x,
        y: dets.y
    })
})
document.querySelector("#hero3").addEventListener("mouseenter", function(){
    gsap.to("#flag",{
        opacity: 1
    })
})
document.querySelector("#hero3").addEventListener("mouseleave", function(){
    gsap.to("#flag",{
        opacity: 0
    })
})
loadingAnimation();
cursorAnimation();
locomotiveAnimation();


sheryAnimation();








