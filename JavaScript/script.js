const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))


var slides = document.querySelectorAll('.slide');
var btns = document.querySelectorAll('.btn');
let currentSlide = 1;

// Javascript for image slider manual navigation
var manualNav = function(manual){
  slides.forEach((slide) => {
    slide.classList.remove('active');

    btns.forEach((btn) => {
      btn.classList.remove('active');
    });
  });

  slides[manual].classList.add('active');
  btns[manual].classList.add('active');
}

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    manualNav(i);
    currentSlide = i;
  });
});

// Javascript for image slider autoplay navigation
var repeat = function(activeClass){
  let active = document.getElementsByClassName('active');
  let i = 1;

  var repeater = () => {
    setTimeout(function(){
      [...active].forEach((activeSlide) => {
        activeSlide.classList.remove('active');
      });

    slides[i].classList.add('active');
    btns[i].classList.add('active');
    i++;

    if(slides.length == i){
      i = 0;
    }
    if(i >= slides.length){
      return;
    }
    repeater();
  }, 6000);
  }
  repeater();
}
repeat();

// function donate() {
//     var params = {
//         from_name : document.getElementById("fname").value,
//         email_id : document.getElementById("email").value,
//         phone : document.getElementById("phonenum").value,
//         zip : document.getElementById("zip").value,
//         card_number : document.getElementById("cardnum").value,
//         expiry : document.getElementById("exp").value,
//         cvv : document.getElementById("cvvnum").value
//     }
//     emailjs.send("service_tbeowy5", "template_kikinq4", params).then(function (res) {
//         alert("success!" + res.status);
//         // window.open("./success.html")
//     })
// }
function SendMail() {
  var details = {
      from_name : document.getElementById("name").value,
      email : document.getElementById("email").value,
      telephone : document.getElementById("telephone").value,
      message : document.getElementById("message").value
  }
  emailjs.send("service_dt62nz7", "template_m6k3ujl",details).then(function (err) {
      if(name.value == "" || email.value == ""  || message.value == "" || telephone.value == ""){
          alert("ERROR, A Field is empty!")
          return
      }
      else{
          alert("Success")
      }
  })
}