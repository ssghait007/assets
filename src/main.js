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

        // Theme toggle functionality
        const themeToggle = document.querySelector('.theme-toggle');
        const themeIcon = themeToggle.querySelector('.theme-icon');

        // Check for saved theme preference or default to 'dark'
        const currentTheme = localStorage.getItem('theme') || 'dark';
        document.documentElement.setAttribute('data-theme', currentTheme);

        // Update icon based on current theme
        function updateThemeIcon(theme) {
            if (theme === 'light') {
                themeIcon.textContent = '🌙';
            } else {
                themeIcon.textContent = '☀';
            }
        }

        updateThemeIcon(currentTheme);

        themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateThemeIcon(newTheme);
        });
    `;
}

// Export data for build script access
export { personal, experience, education, skills, projects, achievements, languages, interests };
