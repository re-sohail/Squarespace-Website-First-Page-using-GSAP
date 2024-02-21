let tl = gsap.timeline();

tl.from(".nav img, .center ul li, .right ul li",{
    y: -20,
    delay: 0.5,
    duration: 1,
    opacity:0,
    stagger: 0.2,
})

tl.from(".main-body h1",{
    y: 100,
    delay: 0.5,
    duration: 0.5,
    opacity:0,
    stagger: 0.2
})
tl.from(".main-body>img",{
    scale: 0,
    duration: 0.5,
    opacity:0,
    stagger: 0.3
})
tl.from(".play-btn i",{
    x: -40,
    delay: 0.5,
    duration: 1,
    opacity: 0,
})
tl.from(".play-btn h5", {
    y:40,
    opacity: 0,
})
tl.from(".social-media-icons i",{
    y:50,
    duration: 0.5,
    delay: 0.5,
    opacity: 0,
    stagger: 0.3
})
tl.from(".social-media-icons h4", {
    y:50,
    duration: 0.4,
    opacity: 0,
})
