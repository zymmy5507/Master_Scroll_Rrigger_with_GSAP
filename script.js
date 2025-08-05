// gsap.from("#page1 #box", {
//     scale:0,
//     delay:1,
//     duration:1,
//     rotate:360
// } )
// // gsap.from("#page2 #box", {
// //     scale:0,
// //     delay:1,
// //     duration:1,
// //     rotate:360,
// //     scrollTrigger:"#page2 #box"
// // } )
// gsap.from("#page2 #box", {
//     scale:0,
//     delay:1,
//     duration:1,
//     rotate:360,
//     scrollTrigger:{
//         trigger:"#page2 #box",
//         scroller:"body",
//         markers:true,
//         start:"top 60%"
//     }
// } )

// gsap.from("#page2 h1", {
//     opacity:0,
//     duration:2,
//     x:500,
//     scrollTrigger:{
//          trigger:"#page2 h1",
//         scroller:"body",
//         //  markers:true,
//         start:"top 80%",
//         end:"top 30%",
//         scrub:5
//      }
// })
// gsap.from("#page2 h2", {
//     opacity:0,
//     duration:2,
//     x:-500,
//     scrollTrigger:{
//          trigger:"#page2 h1",
//         scroller:"body",
//         //  markers:true,
//         start:"top 60%",
//         end:"top 30%",
//         scrub:5,
//         pin:true
//      }
// })

gsap.to("#page2 h1", {
    transform:"translateX(-70%)",
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        start:"top 50%",
        end:"end -100%",
        scrub:2,
        pin:true
    }
})


