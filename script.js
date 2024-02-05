
var page1Content = document.querySelector("#page1content")
var cursor = document.querySelector("#cursor")






page1Content.addEventListener("mousemove",function(dets){
     gsap.to(cursor,{
        x:dets.x,
        y:dets.y


     })
})





var swiper = new Swiper(".mySwiper", {
  spaceBetween: 10,
  sliderpreview:1,
  centeredSlides: true,
  loop:true,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
});

var tl =gsap.timeline()

tl.from("#loader h1",{

x:400,
// delay:1,
opacity:1,
duration:2,
stagger:0.1,




})

tl.to("#loader",{
opacity:0,
x:-400,
// rotate:360,
stagger:0.1


})