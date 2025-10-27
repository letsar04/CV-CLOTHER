// Effet de frappe pour le titre
const typingText = "Bonjour, je suis Clother — Développeur Web Junior.";
let i = 0;
function typingEffect() {
    if (i < typingText.length) {
        document.getElementById("typing").textContent += typingText.charAt(i);
        i++;
        setTimeout(typingEffect, 60);
    }
}
window.onload = typingEffect;

// Animation fade-in des sections
const sections = document.querySelectorAll('.section');
function showSectionsOnScroll() {
    sections.forEach(sec => {
        const rect = sec.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            sec.classList.add('visible');
        }
    });
}
window.addEventListener('scroll', showSectionsOnScroll);
showSectionsOnScroll();

// Défilement horizontal automatique des projets
const projectsContainer = document.querySelector('.projects-container');
let scrollAmount = 0;
function autoScrollProjects() {
    scrollAmount += 1;
    if (scrollAmount >= projectsContainer.scrollWidth - projectsContainer.clientWidth) {
        scrollAmount = 0;
    }
    projectsContainer.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
    });
}
setInterval(autoScrollProjects, 50);
