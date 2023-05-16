function abc(){

    gsap.registerPlugin(ScrollTrigger);
    
    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
    
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
    
    // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
    
    
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
}

abc();



gsap.from('.textraper h1',{
    opacity: 0,
    duration:3,
    ease:Expo.easeInOut
})


gsap.from('.textraper h5',{

    opacity: 0,
    duration:3,
    ease:Expo.easeInOut
})


gsap.from('.right',{
    scrollTrigger:{
        scroller:'#main',
        trigger:'.right',
        // markers:true,
        start:"top 95%",
        scrub:true
    },
    stagger:.3,
    x: -100,
    opacity:0,
    duration:.9,
    ease:Expo.easeInOut
})

gsap.from('.left',{
    scrollTrigger:{
        scroller:'#main',
        trigger:'.left',
        // markers:true,
        start:"top 95%",
        scrub:true
    },
    stagger:.3,
    x: 100,
    opacity:0,
    duration:.9,
    ease:Expo.easeInOut
})



// gsap.from('.phoneimg',{
//     scrollTrigger:{
//         scroller:'#main',
//         trigger:'.phoneimg',
//         markers:true,
//         start:"top 95%",
//         scrub:true
//     },
//     y: 100,
//     opacity:0,
//     duration:.01,
//     ease:Expo.easeInOut
// })




var getapp = document.getElementById('getapp')
var dcross  = document.getElementById('dcross')
getapp.addEventListener('click',()=>{
    gsap.to('.dot',{
        scale: 30,
        duration:.8,
        ease:Expo.easeInOut
    })

})

dcross.addEventListener('click',()=>{
    gsap.to('.dot',{
        scale: 1,
        duration:.8,
        ease:Expo.easeInOut
    })

})


