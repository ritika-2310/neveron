gsap.registerPlugin(ScrollTrigger);

// -----------------------------
// Spread Animation
// -----------------------------

const spread = gsap.timeline({
    scrollTrigger: {
        trigger: "#icons",
        start: "top 70%",
        toggleActions: "play none none none"
    },

    onComplete: startFloating
});

spread
.to("#icon1_box", {
    x: -260-340,
    y: -230,
    duration: 1.2,
    ease: "power3.out"
}, 0)

.to("#icon2_box", {
    x: 260+340,
    y: -230,
    duration: 1.2,
    ease: "power3.out"
}, 0)

.to("#icon3_box", {
    x: -260-340,
    y: 0,
    duration: 1.2,
    ease: "power3.out"
}, 0)

.to("#icon4_box", {
    x: 260+340,
    y: 0,
    duration: 1.2,
    ease: "power3.out"
}, 0)

.to("#icon5_box", {
    x: -260-340,
    y: 230,
    duration: 1.2,
    ease: "power3.out"
}, 0)

.to("#icon6_box", {
    x: 260+340,
    y: 230,
    duration: 1.2,
    ease: "power3.out"
}, 0)

.to("#icon7_box", {
    x: 0,
    y: 230,
    duration: 1.2,
    ease: "power3.out"
}, 0);

// ------------------------------------
// Floating Icons
// ------------------------------------

function floatIcon(selector){

    function animate(){

        gsap.to(selector,{

            x: gsap.utils.random(-75,75),
            y: gsap.utils.random(-75,75),

            duration: gsap.utils.random(1.5,3),

            ease:"sine.inOut",

            onComplete: animate
        });

    }

    animate();

}

function startFloating(){

    floatIcon("#icon1");
    floatIcon("#icon2");
    floatIcon("#icon3");
    floatIcon("#icon4");
    floatIcon("#icon5");
    floatIcon("#icon6");
    floatIcon("#icon7");

}