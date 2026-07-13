gsap.registerPlugin(ScrollTrigger);

// Initial state
gsap.set(".icon_heads", {
    y: 100,
    opacity: 0
});

const tl = gsap.timeline({
    scrollTrigger:{
        trigger:"#icons",
        start:"top top",
        end:"+=2500",
        pin:true,
        scrub:true
    }
});

// Reveal one by one
tl.to("#icon_head1",{
    y:0,
    opacity:1,
    ease:"power2.out",
    duration:1
})

.to("#icon_head2",{
    y:0,
    opacity:1,
    ease:"power2.out",
    duration:1
})

.to("#icon_head3",{
    y:0,
    opacity:1,
    ease:"power2.out",
    duration:1
})

.to("#icon_head4",{
    y:0,
    opacity:1,
    ease:"power2.out",
    duration:1
});