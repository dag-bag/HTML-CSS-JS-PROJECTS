// $(document).ready(function () {
//   $(window).scroll(function () {
//     if (this.scrollY > 20) {
//       $(".navbar").addClass("sticky");
//     } else {
//       $(".navbar").removeClass("sticky");
//     }
//   });
// });
const menuBtn = document.querySelector(".menuBtn");

menuBtn.addEventListener("click", function Btn() {
  document.querySelector(".menu").classList.toggle("active");

  document.querySelector(".fas").classList.toggle("fa-times");

  document.querySelector(".fa-times").style.fontSize = "3rem";

  // document.querySelector;

  // document.querySelector(".menu").style.left = "0";
});

window.addEventListener("scroll", function () {
  document
    .querySelector(".navbar")
    .classList.toggle("sticky", this.window.scrollY > 20);
  // if (this.window.scrollY > 20) {
  //   document.querySelector(".btn").style.background = "yellow";
  // } else if (this.window.scrollY < 20) {
  //   document.querySelector(".btn").style.background = "green";
  // document.querySelector(".text3").classLsist.add("anime");
  // }S
});
