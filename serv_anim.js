// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Initial positions (boxes start away from their final positions)
gsap.set("#serv_box1", {
    x: -20,
    opacity: 0
});

gsap.set("#serv_box2", {
    x: -20,
    y: -20,
    opacity: 0
});

gsap.set("#serv_box3", {
    y: 20,
    opacity: 0
});

gsap.set("#serv_box4", {
    x: 20,
    opacity: 0
});

gsap.set("#serv_box5", {
    x: 20,
    y: 20,
    opacity: 0
});

// Timeline
const serviceTL = gsap.timeline({
    scrollTrigger: {
        trigger: "#service",
        start: "top 75%",
        end: "top 30%",
        scrub: 1.2,
        markers: false // Change to true if you want to debug
    }
});

// All boxes move together
serviceTL
.to("#serv_box1", {
    x: 200,
    opacity: 1,
    ease: "none"
}, 0)

.to("#serv_box2", {
    x: 330,
    y: -80,
    opacity: 1,
    ease: "none"
}, 0)

.to("#serv_box3", {
    y: -10,
    opacity: 1,
    ease: "none"
}, 0)

.to("#serv_box4", {
    x: -200,
    opacity: 1,
    ease: "none"
}, 0)

.to("#serv_box5", {
    x: -330,
    y: -80,
    opacity: 1,
    ease: "none"
}, 0);