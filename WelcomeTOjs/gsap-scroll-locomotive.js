// gsap.to("#box",{
//    x: 1000,
//    rotate: 360,
//    backgroundColor: "blue",
//    duration: 2,
//    delay: 1
// })



//GSAP
// var tl = gsap.timeline() ;
// tl.from("#nav h3",{
//    y: -50,
//    opacity: 0,
//    delay:0.4,
//    duration: 0.5,
//    stagger: 0.3,

// })
// tl.from("#main h1", {
//    x: -500,
//    opacity: 0,
//    duration: 0.3,
//    stagger: 0.4,
//    delay:0.2,
// })
// tl.from("img",{
//    x: 100,
//    rotate:45,
//    opacity: 0,
//    duration: 0.5,
//    stagger:0.5
// })



//SCROLL-TRIGGER-->now the problem is when we make animation in many pages and as soon as we land on 1st pg all below and pg1 animation is performed and when we scroll and reach page3 or 4 the animation is over
// gsap.from("#page1 #circle",{
//    scale: 0,
//    delay: 1,
//    duration: 2,
//    rotate: 360,
  
// })
// gsap.from("#page2 #circle",{
//    scale: 0,
//    delay: 1,
//    duration: 2,
//    rotate: 360,
  //   scrollTrigger:{
  //       trigger: "#page2 #circle",
  //       scroller: "body",
  //       markers: true,
  //       start: "top 60%",
  //       end: "top 30%",
  //       scrub: true,//range from 1 to 5 for smoothness of animation performation
  //  }
// })
// gsap.from("#page3 #circle",{
//    scale: 0,
//    delay: 1,
//    duration: 2,
//    rotate: 360,
// })






//SCROLL--TRIGGER-EXAMPLE-1
// gsap.to("#page2 img", {
//    width: "100%",
//    scrollTrigger: {
//       trigger: "#page2",
//       scroller: "body",
//       markers: true,
//       start: "top 0",
//       end: "top -100%",
//       scrub: 2,
//       pin: true,
      
//    }
// })


//SCROLL--TRIGGER-EXAMPLE-2
// gsap.to("#page2 h1", {
//    transform: "translate(-125%)",
//    scrollTrigger: {
//       trigger: "#page2",
//       scroller: "body",
//       markers: true,
//       start: "top 0",
//       end: "top -100%",
//       scrub: 3,
//       pin: true,
      
//    }
// })





//LOCOMOTIVE--SMOOTH_SCROLLING.....comment  last two line of script linking gsap and scroll trigger then locomotive will work 
// const scroll = new LocomotiveScroll({
//     el: document.querySelector("#main"),
//     smooth: true
// });




//LOCOMOTIVE AND SCROLL-TRIGGER DOES'NT WORK SIMULTANEOUSLY BEC. BOTH GOAL IS WHILE SCROLLING THEIR FUNCTION ACTIVATE SO WE WILL PASTE SOME CODE SO THAT IT WORKS SIMULT.

// gsap.registerPlugin(ScrollTrigger);

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
//     return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//   }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//   getBoundingClientRect() {
//     return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
//   },
//   pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
// });

// // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
// ScrollTrigger.refresh();

// gsap.from("#page1 #box", {
//   scale: 0,
//   duration: 2,
//   delay: 1,
//   opacity: 0,
//   rotate: 360
// })

// gsap.from("#page2 #box", {
//   scale: 0,
//   duration: 2,
//   delay: 1,
//   opacity: 0,
//   rotate: 360,
//   scrollTrigger: {
//     trigger: "#page2 #box",
//     scroller: "#main",
//     start: "top 50%",
//     markers: true  // 🔧 fixed here: changed "true" (a string) → true (boolean)
//   }
// })



//hotel odisej website animation making

//FOR ONLY FIRST H1 MEANS FIRST LINE KE LIYE EFFECT
// var h1text = document.querySelector("#firsth1").textContent;
// var splittedText = h1text.split("");  //this split helps us to split on the basis of what written in bracket, since here in this  bracket "" it split word by word in array form so you can use array properties

// var clutter = ""
// splittedText.forEach(function(elem) {
//    clutter += `<span>${elem}</span>`;
// })
// document.querySelector("#firsth1").innerHTML = clutter;



//FOR ALL H1 AS SHOWN IN WEBSITE
function locoScroll(){
  gsap.registerPlugin(ScrollTrigger);

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
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}
function textSplitting(){
  var allH1 = document.querySelectorAll("#page2 h1");
allH1.forEach(function(elem){
  var clutter =""
  var h1text = elem.textContent
  var splittedText = h1text.split("")
  splittedText.forEach(function(e){
     clutter += `<span>${e}</span>`
  })
  elem.innerHTML = clutter
  
})
}


function gsapAnimation(){
  gsap.to("#page2 h1 span", {
  color: "#E3E3C4",
  stagger: 0.6,
  scrollTrigger: {
    trigger: "#page2 h1",
    scroller: "#main",
    markers: true,
    start: "top 70%",
    end: "top -10%",
    scrub: 2,
  }
})
}

locoScroll()
textSplitting()
gsapAnimation()