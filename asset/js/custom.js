var typed = new Typed(".multiple-text", {
  strings: ["Frontend Developer", "webDesiner", "Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,

});



function toggleMenu() {
    document.querySelector('.navbar').classList.toggle('active');
    document.querySelector('.menu-toggle').classList.toggle('active');
  }