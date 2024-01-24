window.onscroll = function () {
  addStyle()
  counter()
}



function addStyle() {
  document.querySelector('.navbar').classList.add("active")
  if (document.documentElement.scrollTop < 10) {
    document.querySelector('.navbar').classList.remove("active")
  }
}
var flag=0;
function counter (){
  if (document.documentElement.scrollTop >1335 && flag ==0 ) {
    let valueDisplays = document.querySelectorAll(".num");
    let interval = 2000;
    valueDisplays.forEach((valueDisplay) => {
      let startValue = 50;
      let endValue = parseInt(valueDisplay.getAttribute("data-val"));
      let duration = Math.floor(interval / startValue);
      let counter = setInterval(function () {
        startValue -= 1;
        valueDisplay.textContent = startValue;
        if (endValue == startValue) {
          flag =1
          clearInterval(counter);
        }
      }, duration);
    });
  }

}


var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var menuBtn = document.querySelector(".menu-btn");
var menu = document.getElementById("menu");

menuBtn.addEventListener("click", ()=>{
  console.log('sus')
  menu.classList.toggle("show");
})

