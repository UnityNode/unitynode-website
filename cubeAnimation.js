 document.addEventListener("mousemove", e => {
  const prism = document.getElementById("prism")

  let x = (window.innerWidth / 2 - e.
    clientX) / 40;

  let y = (window.innerHeight / 2 - e
    .clientY) / 40;

  prism.style.transform = `rotateX(${20 - y}deg) rotateY(${20 - x}deg)`
});



const elements = document.querySelectorAll(".slide-up");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  }, { threshold: 0.2 });

  elements.forEach(el => observer.observe(el));