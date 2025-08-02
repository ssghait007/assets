// Template literal functions for each section

export const heroSection = (personal) => `
    <section class="hero" id="home">
        <div class="hero-content">
            <div class="hero-subtitle">${personal.title}</div>
            <h1>${personal.name.split(' ')[0]} <span>${personal.name.split(' ')[1]}</span></h1>
            <p>${personal.subtitle}. ${personal.description}</p>
            <div class="cta-buttons">
                <a href="#projects" class="btn btn-primary">View My Work</a>
                <a href="#contact" class="btn btn-secondary">Get In Touch</a>
            </div>
        </div>
    </section>
`;

export const navSection = (personal) => `
    <nav class="navbar">
        <a href="#home" class="logo">${personal.name.split(' ')[0]} <span>${personal.name.split(' ')[1]}</span></a>
        <div class="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#tools">Tech Stack</a>
            <a href="#contact">Contact</a>
        </div>
    </nav>
`;

export const aboutSection = (personal, skills) => `
    <section class="about" id="about">
        <h2 class="section-title">About Me</h2>
        <div class="about-content">
            <div class="about-text">
                <h3>${personal.title} & System Architect</h3>
                <p>I'm a full stack developer with a passion for building scalable, high-performance backend systems. ${personal.subtitle}, with expertise spanning from database optimization and API design to containerization and cloud infrastructure.</p>
                <p>My experience includes working with leading tech consultancies and developing solutions for gaming, finance, and media domains. I believe in writing clean, maintainable code and implementing automated testing to ensure reliability.</p>
                <p>When I'm not coding, I enjoy contributing to open-source projects, exploring new technologies, and mentoring junior developers in best practices for backend development and system design.</p>

                <div class="skills">
                    ${Object.values(skills).flat().map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                </div>
            </div>
            <div class="about-image">
                <img src="https://placehold.co/600x700/171717/6d28d9?text=Developer+Portrait" alt="${personal.name}">
            </div>
        </div>
    </section>
`;

export const projectsSection = (projects, skills) => `
    <section class="projects" id="projects">
        <h2 class="section-title">Featured Projects</h2>
        <div class="projects-grid">
            <div class="project-card">
                <img src="https://placehold.co/600x400/171717/6d28d9?text=Gaming+POC" class="project-img" alt="Gaming POC">
                <div class="project-content">
                    <h3>Game-enabled POC with Agones</h3>
                    <p>Developed a proof-of-concept gaming solution for a leading company using Agones framework on Kubernetes, enabling scalable multiplayer game server orchestration.</p>
                    <div class="project-tech">
                        <span class="tech-tag">Golang</span>
                        <span class="tech-tag">Kubernetes</span>
                        <span class="tech-tag">Agones</span>
                        <span class="tech-tag">GCP</span>
                    </div>
                    <div class="project-links">
                        <a href="#"><i class="fas fa-external-link-alt"></i> Case Study</a>
                        <a href="${projects.length > 0 ? '#' : '#'}"><i class="fab fa-github"></i> GitHub</a>
                    </div>
                </div>
            </div>

            <div class="project-card">
                <img src="https://placehold.co/600x400/171717/6d28d9?text=IoT+Fleet" class="project-img" alt="IoT Fleet Management">
                <div class="project-content">
                    <h3>Robot Fleet Management System</h3>
                    <p>Built a comprehensive IoT solution using AWS IoT Core for managing and monitoring robot fleets with real-time data processing and control capabilities.</p>
                    <div class="project-tech">
                        <span class="tech-tag">AWS IoT</span>
                        <span class="tech-tag">Python</span>
                        <span class="tech-tag">DynamoDB</span>
                        <span class="tech-tag">Lambda</span>
                    </div>
                    <div class="project-links">
                        <a href="#"><i class="fas fa-external-link-alt"></i> Demo</a>
                        <a href="#"><i class="fab fa-github"></i> Repository</a>
                    </div>
                </div>
            </div>

            <div class="project-card">
                <img src="https://placehold.co/600x400/171717/6d28d9?text=Finance+API" class="project-img" alt="Finance Dashboard">
                <div class="project-content">
                    <h3>Finance Dashboard APIs</h3>
                    <p>Developed high-performance APIs for finance dashboard serving an Indian media conglomerate, utilizing GCP BigQuery for real-time analytics and reporting.</p>
                    <div class="project-tech">
                        <span class="tech-tag">Golang</span>
                        <span class="tech-tag">GCP BigQuery</span>
                        <span class="tech-tag">Cloud Functions</span>
                        <span class="tech-tag">Postgres</span>
                    </div>
                    <div class="project-links">
                        <a href="#"><i class="fas fa-external-link-alt"></i> Architecture</a>
                        <a href="#"><i class="fab fa-github"></i> Codebase</a>
                    </div>
                </div>
            </div>

            ${projects.map(project => `
                <div class="project-card">
                    <img src="https://placehold.co/600x400/171717/6d28d9?text=${encodeURIComponent(project.title)}" class="project-img" alt="${project.title}">
                    <div class="project-content">
                        <h3>${project.title}</h3>
                        <p>${project.description}</p>
                        <div class="project-tech">
                            ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                        </div>
                        <div class="project-links">
                            <a href="#"><i class="fas fa-external-link-alt"></i> Demo</a>
                            <a href="#"><i class="fab fa-github"></i> Code</a>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
    </section>
`;

export const experienceSection = (experience) => `
    <section class="timeline" id="experience">
        <h2 class="section-title">Career Timeline</h2>
        <div class="timeline-container">
            ${experience.map((exp, index) => `
                <div class="timeline-item">
                    <div class="timeline-content">
                        <div class="timeline-date">${exp.duration}</div>
                        <h3>${exp.title}</h3>
                        <h4>${exp.company}</h4>
                        <p>${exp.description}</p>
                    </div>
                </div>
            `).join('')}
        </div>
    </section>
`;

export const skillsSection = (skills) => `
    <section class="tools" id="tools">
        <h2 class="section-title">Technology Stack</h2>
        <div class="tools-grid">
            ${skills.backend.map(skill => `
                <div class="tool-card">
                    <i class="fas fa-code tool-icon"></i>
                    <h3>${skill}</h3>
                    <p class="tool-category">Backend</p>
                </div>
            `).join('')}
            
            ${skills.cloud.map(skill => `
                <div class="tool-card">
                    <i class="fas fa-cloud tool-icon"></i>
                    <h3>${skill}</h3>
                    <p class="tool-category">Cloud</p>
                </div>
            `).join('')}
            
            ${skills.databases.map(skill => `
                <div class="tool-card">
                    <i class="fas fa-database tool-icon"></i>
                    <h3>${skill}</h3>
                    <p class="tool-category">Database</p>
                </div>
            `).join('')}
            
            ${skills.devops.map(skill => `
                <div class="tool-card">
                    <i class="fas fa-cogs tool-icon"></i>
                    <h3>${skill}</h3>
                    <p class="tool-category">DevOps</p>
                </div>
            `).join('')}
        </div>
    </section>
`;

export const contactSection = (personal) => `
    <section class="contact" id="contact">
        <h2 class="section-title">Get In Touch</h2>
        <div class="contact-content">
            <p>Interested in collaborating on a project or have a question? I'm always open to discussing new opportunities and ideas.</p>

            <div class="social-links">
                <a href="https://${personal.github}" class="social-link"><i class="fab fa-github"></i></a>
                <a href="https://${personal.linkedin}" class="social-link"><i class="fab fa-linkedin-in"></i></a>
                <a href="https://${personal.website}" class="social-link"><i class="fas fa-globe"></i></a>
                <a href="mailto:${personal.email}" class="social-link"><i class="fas fa-envelope"></i></a>
            </div>

            <a href="mailto:${personal.email}" class="btn btn-primary">Send Email</a>
        </div>
    </section>
`;

export const footerSection = (personal) => `
    <footer class="footer">
        <p>Designed & Built by ${personal.name} • Crafted with ❤️ for performance and accessibility</p>
    </footer>
`;