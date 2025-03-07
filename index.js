let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    if (slides.length === 0 || dots.length === 0) return; 

 
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }


    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }

    slideIndex = (slideIndex + 1 > slides.length) ? 1 : slideIndex + 1;
    slides[slideIndex - 1].style.display = "block";  
    dots[slideIndex - 1].classList.add("active");

    setTimeout(showSlides, 2000); 
}

document.addEventListener("DOMContentLoaded", showSlides);
          
let btnOM = document.querySelector("button.btn-open-menu");
let btnCM = document.querySelector("button.btn-close-menu");
let boxM = document.querySelector("div.box-menu");

btnOM.addEventListener("click", () => {
  boxM.classList.toggle("active");
});

btnCM.addEventListener("click", () => {
  boxM.classList.remove("active");
});

document.addEventListener("click", event => {
  if (!btnOM.contains(event.target) && event.target !== btnOM) {
    boxM.classList.remove("active");
  };
});
          
      
