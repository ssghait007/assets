// Main application file - renders templates with data
import { personal, experience, education, skills, projects, achievements, languages, interests } from './data/portfolio.js';
import { 
    navSection, 
    heroSection, 
    aboutSection, 
    projectsSection, 
    experienceSection, 
    skillsSection, 
    contactSection, 
    footerSection 
} from './templates/sections.js';

// Generate complete HTML content
export function generateHTML() {
    const bodyContent = `
        ${navSection(personal)}
        ${heroSection(personal)}
        ${aboutSection(personal, skills)}
        ${projectsSection(projects, skills)}
        ${experienceSection(experience)}
        ${skillsSection(skills)}
        ${contactSection(personal)}
        ${footerSection(personal)}
    `;
    
    return bodyContent;
}

// Generate JavaScript content
export function generateJS() {
    return `
        // Animate elements on scroll
        const observerOptions = {
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observe sections
        document.querySelectorAll('section').forEach(section => {
            observer.observe(section);
        });

        // Smooth scrolling for navigation
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Navigation active state
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-links a');

        window.addEventListener('scroll', () => {
            let current = '';

            sections.forEach(section => {
                const sectionTop = section.offsetTop - 100;
                const sectionHeight = section.clientHeight;

                if (pageYOffset >= sectionTop) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === \`#\${current}\`) {
                    link.classList.add('active');
                }
            });
        });
    `;
}

// Export data for build script access
export { personal, experience, education, skills, projects, achievements, languages, interests };