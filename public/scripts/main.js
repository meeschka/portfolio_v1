// Apply sticky class to navbar when it reaches the top of the page
window.onscroll = function() {stickyFunction()};
var navbar = document.getElementById("top-nav");
var sticky = navbar.offsetTop;
function stickyFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}