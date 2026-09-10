t
// Hero Section Auto-Changing Photo Carousel
const slides = document.querySelectorAll('.carousel-slide');
let currentSlide = 0;

function nextSlide() {
slides[currentSlide].classList.remove('active');
currentSlide = (currentSlide + 1) % slides.length;
slides[currentSlide].classList.add('active');
}

setInterval(nextSlide, 4000);

// Smooth Scrolling for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function (e) {
e.preventDefault();
document.querySelector(this.getAttribute('href')).scrollIntoView({
behavior: 'smooth'
});
});
});

// Subtle Entrance Animations
const observerOptions = {
threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.style.opacity = "1";
entry.target.style.transform = "translateY(0)";
}
});
}, observerOptions);

document.querySelectorAll('.glass-card').forEach(card => {
card.style.opacity = "0";
card.style.transform = "translateY(20px)";
card.style.transition = "all 0.6s ease-out";
observer.observe(card);
});

### Table of Project Metadata

| Project Name | Scope | Core Objective |

| :--- | :--- | :--- |

| ASALPS | Systems | Logic and process analysis |

| TUKO | Commerce | Digital platform modernization |

| AI Monk | Intelligence | Mindful productivity management |

| Cake & Crumb | Retail | Artisanal bakery storefront |

| Portfolio | Design | Liquid glass visual showcase |

### Professional Summary

<span type="placeholder" placeholder-type="person"></span>

<span type="placeholder" placeholder-type="date"></span>

<span type="placeholder" placeholder-type="place"></span>

