//Sticky Header
// window.addEventListener("scroll", function () {
//   const header = document.querySelector(".header");
//   header.classList.toggle("sticky", window.scrollY > 0);
// });

//Mobile Navigation
const navigation = document.querySelector(".navigation");
document.querySelector(".toggle").onclick = function () {
  this.classList.toggle("active");
  navigation.classList.toggle("active");
};

document.querySelector(".mobile-submenu-item").onclick = function () {
  this.classList.toggle("mSactive");
};

//Back to Top
const backToTopButton = document.querySelector(".back-to-top");
backToTopButton.onclick = () =>
  document.documentElement.scroll({
    top: 0,
    behavior: "smooth",
});

window.onscroll = () => {
  if (document.documentElement.scrollTop > 200) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
};