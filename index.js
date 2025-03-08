
let slideIndex = 0;
let slideshowInterval;

function showSlides() {
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");
    
  
    if (slides.length === 0 || dots.length === 0) {
        console.error("No slides or dots found");
        return;
    }
    
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].classList.remove("active");
    }
    
    
    slideIndex = (slideIndex + 1) % slides.length;
    if (slideIndex === 0) slideIndex = slides.length; 
    
    
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");
}


function initSlideshow() {
  
    if (slideshowInterval) clearInterval(slideshowInterval);
    
 
    slideshowInterval = setInterval(() => {
        showSlides();
    }, 3000); 
    

    document.querySelectorAll('.dot').forEach((dot, index) => {
        dot.addEventListener('click', () => {
            slideIndex = index;
            showSlides();
        });
    });
}


const mobileMenu = (() => {
    const btnOM = document.querySelector(".btn-open-menu");
    const btnCM = document.querySelector(".btn-close-menu");
    const boxM = document.querySelector(".box-menu");
    
    if (!btnOM || !btnCM || !boxM) {
        console.error("Mobile menu elements missing");
        return;
    }
    
    const toggleMenu = (show) => {
        boxM.classList.toggle("active", show);
    };
    
    btnOM.addEventListener("click", (e) => {
        e.stopPropagation();
        toggleMenu(true);
    });
    
    btnCM.addEventListener("click", () => toggleMenu(false));
    
    document.addEventListener("click", (e) => {
        if (!boxM.contains(e.target) && e.target !== btnOM) {
            toggleMenu(false);
        }
    });
    
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") toggleMenu(false);
    });
})();
const darkModeToggle = (() => {
    const toggle = document.querySelector('.toggle');
    const toggleBall = document.querySelector('.toggle-ball');
    
    if (!toggle || !toggleBall) {
        console.error("Dark mode elements missing");
        return;
    }
    
    const setTheme = (isDark) => {
        document.body.classList.toggle('dark-mode', isDark);
        toggle.classList.toggle('active', isDark);
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    };
    
    toggle.addEventListener('click', () => {
        const isDark = !document.body.classList.contains('dark-mode');
        setTheme(isDark);
    });

    const savedTheme = localStorage.getItem('theme');
    setTheme(savedTheme === 'dark');
})();

document.addEventListener("DOMContentLoaded", () => {
    initSlideshow();
});