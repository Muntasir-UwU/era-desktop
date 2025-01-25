
const wrapper = document.querySelector(".wrapper"),
  carousel = document.querySelector(".carousel"),
  images = document.querySelectorAll("img"),
  buttons = document.querySelectorAll(".button");

let imageIndex = 1,
  intervalId;

const autoSlide = () => {
  intervalId = setInterval(() => slideImage(++imageIndex), 2000);
};
autoSlide();

const slideImage = () => {

  imageIndex = imageIndex === images.length ? 0 : imageIndex < 0 ? images.length - 1 : imageIndex;
  carousel.style.transform = `translate(-${imageIndex * 100}%)`;
};


// Set the date we're counting down to
var countDownDate = new Date("Jan 27, 2025 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("timer").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "EXPIRED";
  }
}, 1000);



const scrollers = document.querySelectorAll(".scroller2");
  addAnimation();

function addAnimation() {
  scrollers.forEach((scroller) => {
    scroller.setAttribute("data-animated", true);

    const scrollerInner = scroller.querySelector(".scroller2__inner");
    const scrollerContent = Array.from(scrollerInner.children);
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}



gsap.registerPlugin(ScrollTrigger);
const locoScroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
  lerp:0.07,
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("[data-scroll-container]", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("[data-scroll-container]").style.transform ? "transform" : "fixed"
});
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();








const myText2 = new SplitType("#h1");

let text = gsap.timeline({  
  scrollTrigger:{
    trigger:"#buung",
    start:"0% center",
    end:"10% center",
    scroller:"#main-shit",
    markers:true,
    scrub:1,
  }
});
text.to(".char" ,{  
  y: 0,
  stagger: 0.05,

});




let ter = gsap.timeline({
  scrollTrigger:{
    trigger:".hover",
    start:"top 50%",
    end:"bottom center",
    scroller:"#main-shit",
    markers:true,
    scrub:1,
  }
});
ter.to(".text-hover ",{
  width:"50%",
});



let box = gsap.timeline({
  scrollTrigger:{
    trigger:".g-shit",
    scroller:"#main-shit",
    markers:true,
    start:"top 90%",
    end:"100% 90%",
    scrub:1,
  }
});

box.to("#time" ,{
  width:"100%",
  borderRadius:"0px",
});







let box1 = gsap.timeline({
  scrollTrigger:{
    trigger:".g-shit",
    scroller:"#main-shit",
    markers:true,
    start:"170% 5%",
    end:"250% 5%",
    scrub:1,
  }
});

box1.to("#time" ,{
  width:"92%",
  borderRadius:"20px",
});


gsap.timeline({
  scrollTrigger: {
    trigger: ".g-shit",
    scrub: 0.5,
    scroller:"#main-shit",
    pin: ".g-shit",
    start: "top 0%",
    markers:true,
    end:"162% center",
  }});

 
const split = new SplitType("#gtext", {types: "words"});

const tlo = gsap.timeline({
    scrollTrigger: {
      trigger: "#gtext",
      start: "top 10%",
      end: "bottom 10%",
      scrub: 0.5,
      scroller:"#main-shit",
      markers:true,
    },
  })
  .set(
    split.words,
    {
      duration: 0.3,
      color: "#EEF0F2",
      stagger: 0.1,
    },
    0.1
  );

  tlo.to(allMasks, {
    width: "0%",
    duration: 1,
    stagger: 0.5,
  });


