// gsap.registerPlugin(MotionPathPlugin);
gsap.registerPlugin(ScrollTrigger);

gsap.from(".herman", {
  duration: 10,
  x: "-50vw",
  rotation: -360,
  ease: "linear",
  scrollTrigger: {
    trigger: ".herman",
    start: "top 75%", //when top of herman passes 75% viewport height
    end: "bottom 25%", //when bottom of herman passes 25% viewport height

    //events: onEnter onLeave onEnterBack onLeaveBack
    toggleActions: "restart complete reverse reset",
    //options: play, pause, resume, reset, restart, complete, reverse,none
  },
});
