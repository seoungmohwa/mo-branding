// 

let scroll_tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.factsContainer',
        start: "top center",
        // pin: true,
        scrub: true,
        end: "+=300",
        // markers: true,
    }
}),
    facts = [...document.querySelectorAll('.fact')]
scroll_tl.to('.factsContainer h2', {
    scale: 1.5,
    duration: 1,
    ease: "slow"
})
scroll_tl.to(facts, {
    xPercent: -85 * (facts.length - 1),
    scrollTrigger: {
        trigger: ".factsContainer_sm",
        start: "center center",
        pin: true,
        // horizontal: true,
        // pinSpacing:false,
        // markers: true,
        scrub: 1,
        snap: 1 / (facts.length - 1),
        // base vertical scrolling on how wide the container is so it feels more natural.
        // end: () => `+=${smallFactsContainer.offsetWidth}`
        end: () => `+=4320`
    }
});


// 


const cursorsTag = document.querySelector("div.cursors")
const balls = cursorsTag.querySelectorAll("div")
// text hover
const ballMessage = cursorsTag .querySelector("div span")

// 마우스 따라다니기 
//document.addEventListener("mousemove", function (event){
//  ball.style.left = event.pageX + "px"
//  ball.style.top = event.pageY + "px"
// })


let aimX = 0
let aimY = 0

balls.forEach((ball, index) => {
let currentX = 0
let currentY = 0

let speed = 0.3 - index * 0.015

const animate = function () {
currentX += (aimX - currentX) * speed
currentY += (aimY - currentY) * speed

ball.style.left = currentX + "px"
ball.style.top = currentY + "px"

requestAnimationFrame(animate)
}

animate()


})



document.addEventListener("mousemove", function (event) {
aimX =event.pageX
aimY =event.pageY

})



// 메인 애니메이션
TweenMax.to(".first", 1, {
delay: 0.3,
left: "-100%",
ease: Expo.easeInOut
});

TweenMax.from(".header", 2, {
delay: 0.8,
opacity: 0,
y: -100,
ease: Expo.easeInOut
});


TweenMax.from(".circle", 1.6, {
delay: 1.8,
opacity: 0,
y: -800,
ease: Expo.easeInOut
});






function SwiperBox1__init() {
const swiper = new Swiper(".swiper-box-1 > .swiper", {
speed: 600,
direction: 'horizontal',
loop: true,
parallax: true,
pagination: {
  el: ".swiper-box-1 .swiper-pagination",
  clickable: true,
},
navigation: {
  nextEl: ".swiper-box-1 .swiper-button-next",
  prevEl: ".swiper-box-1 .swiper-button-prev",
},
mousewheel: true,
});
}

SwiperBox1__init();




// ANIMATIONS

const tl = gsap.timeline({ defaults: { duration: 1.2 } });
const tl3 = gsap.timeline({
scrollTrigger: {
trigger: ".card",
start: "center bottom"
}
});
const tl4 = gsap.timeline({
scrollTrigger: {
trigger: ".features-header",
start: "center bottom"
}
});
const tl5 = gsap.timeline({
scrollTrigger: {
trigger: ".testimonials-header",
start: "center bottom"
}
});
const tl6 = gsap.timeline({
scrollTrigger: {
trigger: ".skill-desc",
start: "center right"
}
});


tl3.from(".card", { opacity: 0, y: 40, duration: 1.2, stagger: 0.2 });

tl4.from(".features-header", { opacity: 0, y: 40, duration: 1 });

tl5.from(".testimonials-header", {
opacity: 0,
y: 40,
duration: 2,
stagger: 0.2
});

tl6.from(".skill-circle ", { opacity: 0, x: -40, duration: 1.2, stagger: 0.5 });










function start(){
    tween = TweenMax.fromTo(svgCircleProgressPath1, 2, {
  drawSVG:"0"
}, {
  drawSVG:'0 100%', 
  onUpdate:setPercentage,
  onComplete: repeat
});
}


// 파이차트

$(".chart-1")
.circleProgress({
size:128,
value: 1,
startAngle: -Math.PI / 2,
reverse: true,
lineCap: "round",
thickness: 10,
fill: { gradient: ["#245723"] }
})
.on("circle-animation-progress", function (event, progress, stepValue) {
$(this)
  .find(".strong")
  .text(parseInt(stepValue * 100) + "%");
});


$(".chart-2")
.circleProgress({
size:128,
value: 0.9,
startAngle: -Math.PI / 2,
reverse: true,
lineCap: "round",
thickness: 10,
fill: { gradient: ["#245723"] }
})
.on("circle-animation-progress", function (event, progress, stepValue) {
$(this)
  .find(".strong-2")
  .text(parseInt(stepValue * 100) + "%");
});





