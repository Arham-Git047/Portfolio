// Application Data from Resume
const skillsData = [
    {
        name: "Python",
        category: "Programming Languages",
        proficiency: 90,
        experience: "2+ years",
        description: "Advanced programming for AI/ML, data science, and automation projects",
        icon: "fab fa-python"
    },
    {
        name: "Data Analytics",
        category: "Data Science",
        proficiency: 88,
        experience: "2+ years",
        description: "Data processing, statistical analysis, and insight generation for decision making",
        icon: "fas fa-chart-line"
    },
    {
        name: "Machine Learning",
        category: "AI/ML",
        proficiency: 85,
        experience: "2+ years",
        description: "ML algorithms, model training, evaluation, and deployment for real-world applications",
        icon: "fas fa-brain"
    },
    {
        name: "HTML/CSS",
        category: "Front-End Development",
        proficiency: 82,
        experience: "2+ years",
        description: "Modern web development with responsive design and CSS frameworks",
        icon: "fab fa-html5"
    },
    {
        name: "Front-End Development",
        category: "Front-End Development",
        proficiency: 80,
        experience: "1+ years",
        description: "Interactive user interfaces, responsive design, and modern web technologies",
        icon: "fas fa-code"
    },
    {
        name: "AR/VR",
        category: "Emerging Tech",
        proficiency: 75,
        experience: "1+ years",
        description: "Augmented and Virtual Reality applications for tourism and immersive experiences",
        icon: "fas fa-vr-cardboard"
    },
    {
        name: "C Programming",
        category: "Programming Languages",
        proficiency: 78,
        experience: "2+ years",
        description: "System programming, data structures, and algorithmic problem solving",
        icon: "fas fa-code"
    },
    {
        name: "R Programming",
        category: "Data Science",
        proficiency: 76,
        experience: "1+ years",
        description: "Statistical computing, data visualization, and advanced analytics",
        icon: "fab fa-r-project"
    },
    {
        name: "Git & GitHub",
        category: "Tools",
        proficiency: 85,
        experience: "2+ years",
        description: "Version control, collaborative development, and project management",
        icon: "fab fa-git-alt"
    },
    {
        name: "Power BI",
        category: "Tools",
        proficiency: 80,
        experience: "1+ years",
        description: "Business intelligence dashboards and interactive data visualizations",
        icon: "fas fa-chart-bar"
    },
    {
        name: "Tableau",
        category: "Tools",
        proficiency: 78,
        experience: "1+ years",
        description: "Advanced data visualization and storytelling through interactive dashboards",
        icon: "fas fa-chart-pie"
    },
    {
        name: "Research & Innovation",
        category: "Soft Skills",
        proficiency: 90,
        experience: "2+ years",
        description: "Research methodology, innovation thinking, and solution development",
        icon: "fas fa-lightbulb"
    }
];

const projectsData = [
    {
        id: 6,
        title: "Aegis AI: Intelligent Disaster Response System",
        shortDescription: "Multi-agent AI system for automated threat assessment and emergency dispatch",
        image: "/api/placeholder/400/250",
        technologies: ["Multi-Agent AI", "NLP", "Predictive Analytics", "Python"],
        detailedDescription: "Intelligent disaster response system featuring specialized Sentinel, Oracle, and Logistics agents for automated threat assessment, decision intelligence, and emergency resource optimization.",
        keyFeatures: [
            "Sentinel vision agent for automated threat assessment",
            "Oracle decision intelligence agent for situational analysis",
            "Logistics agent for emergency resource optimization",
            "Real-time NLP pipelines for situational awareness",
            "Predictive models trained on 10K+ historical disaster records",
            "Bottleneck detection that reduced response latency by 30%"
        ],
        liveUrl: "#",
        githubUrl: "https://github.com/Arham-Git047",
        status: "Completed"
    },
    {
        id: 1,
        title: "Disaster Prediction & Risk Mitigation",
        shortDescription: "Multi-model AI system for disaster prediction and risk assessment",
        image: "/api/placeholder/400/250",
        technologies: ["Python", "CNN", "Data Analytics", "Sentiment Analysis", "Machine Learning"],
        detailedDescription: "Comprehensive disaster prediction system using three distinct models: 1) CNN model for image-based disaster detection, 2) Data Analytics model for historical pattern analysis, 3) Sentiment Analysis for social media disaster indicators. The system provides early warning capabilities and risk mitigation strategies.",
        keyFeatures: [
            "CNN-based image classification for disaster detection",
            "Historical data analysis for pattern recognition",
            "Real-time sentiment analysis from social media",
            "Risk assessment and mitigation recommendations",
            "Early warning system integration",
            "Multi-modal data fusion for improved accuracy"
        ],
        liveUrl: "#",
        githubUrl: "https://github.com/Arham-Git047",
        status: "Completed"
    },
    {
        id: 2,
        title: "AI Integrated Job Recommendation System",
        shortDescription: "Intelligent job matching using Google Gemini and semantic transformers",
        image: "/api/placeholder/400/250",
        technologies: ["Google Gemini 1.5", "Semantic Transformers", "Python", "NLP", "AI/ML"],
        detailedDescription: "Advanced job recommendation system leveraging Google Gemini 1.5 API and semantic transformers for intelligent job-candidate matching. The system analyzes skills, experience, and preferences to provide personalized job recommendations with high accuracy.",
        keyFeatures: [
            "Google Gemini 1.5 integration for advanced AI capabilities",
            "Semantic transformer-based job matching",
            "Personalized recommendation algorithms",
            "Skills and experience analysis",
            "Real-time job market data processing",
            "User preference learning and adaptation"
        ],
        liveUrl: "#",
        githubUrl: "https://github.com/Arham-Git047",
        status: "Completed"
    },
    {
        id: 3,
        title: "AR/VR based Tourism Platform",
        shortDescription: "Immersive tourism experience with AR/VR integration",
        image: "/api/placeholder/400/250",
        technologies: ["AR/VR", "HTML/CSS", "JavaScript", "Front-End Development", "3D Graphics"],
        detailedDescription: "Innovative tourism platform combining augmented and virtual reality technologies to provide immersive travel experiences. Users can virtually explore destinations, access real-time information, and plan their trips with enhanced visualization.",
        keyFeatures: [
            "Virtual reality destination tours",
            "Augmented reality location information",
            "Interactive 3D environments",
            "Real-time travel information integration",
            "User-friendly front-end interface",
            "Cross-platform compatibility"
        ],
        liveUrl: "#",
        githubUrl: "https://github.com/Arham-Git047",
        status: "Completed"
    },
    {
        id: 4,
        title: "ERP Management System",
        shortDescription: "Enterprise resource planning system with modern front-end",
        image: "/api/placeholder/400/250",
        technologies: ["HTML/CSS", "JavaScript", "Front-End Development", "UI/UX Design"],
        detailedDescription: "Comprehensive ERP management system focused on delivering an intuitive and responsive front-end experience. The system streamlines business processes and provides real-time insights through a modern web interface.",
        keyFeatures: [
            "Responsive web design",
            "Modern user interface",
            "Real-time data visualization",
            "Cross-browser compatibility",
            "User experience optimization",
            "Scalable front-end architecture"
        ],
        liveUrl: "#",
        githubUrl: "https://github.com/Arham-Git047",
        status: "Completed"
    },
    {
        id: 5,
        title: "Voting App Project",
        shortDescription: "Digital voting application with secure front-end interface",
        image: "/api/placeholder/400/250",
        technologies: ["HTML/CSS", "JavaScript", "Front-End Development", "Security"],
        detailedDescription: "Secure digital voting application with focus on user interface design and experience. The application ensures accessibility, security, and ease of use for democratic processes.",
        keyFeatures: [
            "Secure voting interface",
            "Accessibility-compliant design",
            "Real-time voting status",
            "User authentication integration",
            "Mobile-responsive design",
            "Intuitive voting process flow"
        ],
        liveUrl: "#",
        githubUrl: "https://github.com/Arham-Git047",
        status: "Completed"
    }
];

// DOM Elements
const themeToggle = document.getElementById('themeToggle');
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');
const typingText = document.getElementById('typingText');
const skillsGrid = document.getElementById('skillsGrid');
const projectsGrid = document.getElementById('projectsGrid');


// Theme Management
class ThemeManager {
    constructor() {
        this.init();
    }

    init() {
        // Check for saved theme preference or default to 'dark'
        const savedTheme = localStorage.getItem('theme') || 'dark';
        this.setTheme(savedTheme);
        if (themeToggle) {
            themeToggle.addEventListener('click', () => this.toggleTheme());
        }
    }

    setTheme(theme) {
        document.documentElement.setAttribute('data-color-scheme', theme);
        if (themeToggle) {
            const icon = themeToggle.querySelector('i');
            if (icon) {
                if (theme === 'dark') {
                    icon.className = 'fas fa-sun';
                } else {
                    icon.className = 'fas fa-moon';
                }
            }
        }
        localStorage.setItem('theme', theme);
        
        // Add smooth transition for theme change
        document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
        setTimeout(() => {
            document.body.style.transition = '';
        }, 300);
    }

    toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-color-scheme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        this.setTheme(newTheme);
    }
}

// Navigation Management
class NavigationManager {
    constructor() {
        this.init();
    }

    init() {
        if (hamburger && navMenu) {
            // Mobile menu toggle
            hamburger.addEventListener('click', () => this.toggleMobileMenu());
        }
        
        // Smooth scrolling for navigation links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => this.handleNavClick(e));
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => this.closeMobileMenu());
        });

        // Active section highlighting
        window.addEventListener('scroll', () => this.updateActiveSection());
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (navMenu && hamburger && !navMenu.contains(e.target) && !hamburger.contains(e.target)) {
                this.closeMobileMenu();
            }
        });
    }

    toggleMobileMenu() {
        if (navMenu && hamburger) {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        }
    }

    closeMobileMenu() {
        if (navMenu && hamburger) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    handleNavClick(e) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    }

    updateActiveSection() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        
        let currentSection = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }
}

// Typing Animation
class TypingAnimation {
    constructor(element, texts, typeSpeed = 100, deleteSpeed = 50, pauseTime = 2000) {
        this.element = element;
        this.texts = texts;
        this.typeSpeed = typeSpeed;
        this.deleteSpeed = deleteSpeed;
        this.pauseTime = pauseTime;
        this.textIndex = 0;
        this.charIndex = 0;
        this.isDeleting = false;
        this.init();
    }

    init() {
        if (this.element) {
            this.type();
        }
    }

    type() {
        if (!this.element) return;
        
        const currentText = this.texts[this.textIndex];
        
        if (this.isDeleting) {
            this.element.textContent = currentText.substring(0, this.charIndex - 1);
            this.charIndex--;
        } else {
            this.element.textContent = currentText.substring(0, this.charIndex + 1);
            this.charIndex++;
        }

        let typeSpeedCurrent = this.isDeleting ? this.deleteSpeed : this.typeSpeed;

        if (!this.isDeleting && this.charIndex === currentText.length) {
            typeSpeedCurrent = this.pauseTime;
            this.isDeleting = true;
        } else if (this.isDeleting && this.charIndex === 0) {
            this.isDeleting = false;
            this.textIndex = (this.textIndex + 1) % this.texts.length;
        }

        setTimeout(() => this.type(), typeSpeedCurrent);
    }
}

// Skills Management
class SkillsManager {
    constructor() {
        this.currentFilter = 'all';
        this.init();
    }

    init() {
        if (skillsGrid) {
            this.renderSkills();
            this.initializeFilters();
        }
    }

    renderSkills() {
        const filteredSkills = this.currentFilter === 'all' 
            ? skillsData 
            : skillsData.filter(skill => skill.category === this.currentFilter);

        skillsGrid.innerHTML = filteredSkills.map(skill => `
            <div class="skill-card fade-in" data-category="${skill.category}" tabindex="0">
                <div class="skill-card-inner">
                    <div class="skill-card-front">
                        <i class="${skill.icon} skill-icon"></i>
                        <h3 class="skill-name">${skill.name}</h3>
                        <p class="skill-category">${skill.category}</p>
                    </div>
                    <div class="skill-card-back">
                        <i class="${skill.icon} skill-icon"></i>
                        <div class="skill-details">
                            <div class="skill-proficiency">Proficiency: ${skill.proficiency}%</div>
                            <div class="skill-experience">Experience: ${skill.experience}</div>
                            <div class="skill-description">${skill.description}</div>
                        </div>
                    </div>
                </div>
            </div>
        `).join('');

        // Add interaction events for skill cards
        document.querySelectorAll('.skill-card').forEach(card => {
            // Mouse events
            card.addEventListener('mouseenter', () => {
                card.classList.add('hovered');
            });
            
            card.addEventListener('mouseleave', () => {
                card.classList.remove('hovered');
            });
            
            // Click events
            card.addEventListener('click', () => {
                card.classList.toggle('flipped');
            });
            
            // Keyboard accessibility
            card.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    card.classList.toggle('flipped');
                }
            });
        });

        // Re-observe elements for scroll animations
        this.observeSkillCards();
    }

    observeSkillCards() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('visible');
                    }, index * 100);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        document.querySelectorAll('.skill-card.fade-in').forEach(el => {
            observer.observe(el);
        });
    }

    initializeFilters() {
        const filterButtons = document.querySelectorAll('.filter-btn');
        filterButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                // Update active button
                filterButtons.forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                
                // Update filter and re-render
                this.currentFilter = e.target.getAttribute('data-filter');
                this.renderSkills();
            });
        });
    }
}

// Projects Management
class ProjectsManager {
    constructor() {
        this.init();
    }

    init() {
        if (projectsGrid) {
            this.renderProjects();
        }
    }

    renderProjects() {
        projectsGrid.innerHTML = projectsData.map(project => `
            <div class="project-card fade-in" data-project-id="${project.id}" tabindex="0">
                <div class="project-image">
                    <i class="fas fa-laptop-code"></i>
                </div>
                <div class="project-content">
                    <div class="project-status ${project.status.toLowerCase().replace(' ', '-')}">${project.status}</div>
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-short-desc">${project.shortDescription}</p>
                    <div class="project-tech">
                        ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                </div>
            </div>
        `).join('');

        // Add click events for project expansion
        document.querySelectorAll('.project-card').forEach(card => {
            card.addEventListener('click', (e) => {
                const projectId = parseInt(card.getAttribute('data-project-id'));
                this.showProjectModal(projectId);
            });
            
            // Add keyboard accessibility
            card.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    const projectId = parseInt(card.getAttribute('data-project-id'));
                    this.showProjectModal(projectId);
                }
            });
        });
    }

    showProjectModal(projectId) {
        console.log('Opening modal for project ID:', projectId);
        const project = projectsData.find(p => p.id === projectId);
        
        if (!project) {
            console.error('Project not found with ID:', projectId);
            return;
        }

        console.log('Found project:', project);

        const modal = document.createElement('div');
        modal.className = 'project-expanded';
        modal.innerHTML = `
            <div class="project-modal">
                <div class="project-modal-header">
                    <h2>${project.title}</h2>
                    <button class="project-modal-close" aria-label="Close modal">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="project-modal-body">
                    <div class="project-image">
                        <i class="fas fa-laptop-code"></i>
                    </div>
                    <p><strong>Status:</strong> <span class="project-status ${project.status.toLowerCase().replace(' ', '-')}">${project.status}</span></p>
                    <p>${project.detailedDescription}</p>
                    
                    <div class="project-tech" style="margin: var(--space-20) 0;">
                        <h4>Technologies Used:</h4>
                        <div style="display: flex; flex-wrap: wrap; gap: var(--space-8); margin-top: var(--space-12);">
                            ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                        </div>
                    </div>
                    
                    <div class="project-features">
                        <h4>Key Features:</h4>
                        <ul>
                            ${project.keyFeatures.map(feature => `<li>${feature}</li>`).join('')}
                        </ul>
                    </div>
                    
                    <div class="project-links" style="display: flex; gap: var(--space-16); margin-top: var(--space-24);">
                        <a href="${project.githubUrl}" class="btn btn--primary" target="_blank">
                            <i class="fab fa-github"></i> View on GitHub
                        </a>
                        <a href="mailto:arhamkelkar15@gmail.com?subject=Inquiry about ${encodeURIComponent(project.title)}" class="btn btn--outline">
                            <i class="fas fa-envelope"></i> Inquire About Project
                        </a>
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(modal);
        document.body.style.overflow = 'hidden';
        
        // Show modal with animation
        requestAnimationFrame(() => {
            modal.classList.add('active');
        });

        // Close modal events
        const closeBtn = modal.querySelector('.project-modal-close');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => this.closeProjectModal(modal));
        }
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                this.closeProjectModal(modal);
            }
        });

        // Close on escape key
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                this.closeProjectModal(modal);
                document.removeEventListener('keydown', handleEscape);
            }
        };
        document.addEventListener('keydown', handleEscape);

        // Focus management for accessibility
        if (closeBtn) {
            closeBtn.focus();
        }
    }

    closeProjectModal(modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        setTimeout(() => {
            if (modal.parentNode) {
                modal.parentNode.removeChild(modal);
            }
        }, 300);
    }
}



// Scroll Animations
class ScrollAnimations {
    constructor() {
        this.init();
    }

    init() {
        this.observeElements();
    }

    observeElements() {
        const elements = document.querySelectorAll('.achievement-card, .timeline-item, .project-card, .personal-card, .about-content');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    // Reduced delay for better performance
                    setTimeout(() => {
                        entry.target.classList.add('fade-in', 'visible');
                    }, index * 50); // Reduced from 100ms to 50ms
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -30px 0px' // Reduced from -50px to -30px for earlier trigger
        });

        elements.forEach(el => {
            el.classList.add('fade-in');
            observer.observe(el);
        });
    }
}

// Performance and Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Smooth scroll behavior for all anchor links
function initializeSmoothScroll() {
    document.addEventListener('click', (e) => {
        if (e.target.matches('a[href^="#"]')) {
            e.preventDefault();
            const targetId = e.target.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 70;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        }
    });
}

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Content Loaded - Initializing application...');
    
    // Initialize all managers with error handling
    try {
        new ThemeManager();
        console.log('ThemeManager initialized');
        
        new NavigationManager();
        console.log('NavigationManager initialized');
        
        new SkillsManager();
        console.log('SkillsManager initialized');
        
        new ProjectsManager();
        console.log('ProjectsManager initialized');
        
        
        new ScrollAnimations();
        console.log('ScrollAnimations initialized');
    } catch (error) {
        console.error('Error initializing managers:', error);
    }

    // Initialize smooth scrolling
    initializeSmoothScroll();

    // Initialize typing animation with Arham's actual roles
    const roles = ["AI & Data Science Student", "Front-End Developer", "Hackathon Finalist", "Campus Ambassador"];
    if (typingText) {
        new TypingAnimation(typingText, roles, 100, 50, 2000);
        console.log('Typing animation initialized');
    }

    // Add loading class to body initially
    document.body.classList.add('loaded');
    
    // Add parallax effect to hero section (subtle)
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', debounce(() => {
            const scrolled = window.pageYOffset;
            const parallax = hero.querySelector('.hero-content');
            if (parallax && scrolled < hero.offsetHeight) {
                parallax.style.transform = `translateY(${scrolled * 0.1}px)`;
            }
        }, 10));
    }

    // Add hover effects for social links
    const socialLinks = document.querySelectorAll('.social-links a, .contact-social a');
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.transform = 'translateY(-3px) scale(1.1)';
        });
        
        link.addEventListener('mouseleave', () => {
            link.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    console.log('Application initialization complete');
});

// Handle window resize for responsive adjustments
window.addEventListener('resize', debounce(() => {
    // Close mobile menu on resize to desktop
    if (window.innerWidth > 768) {
        if (navMenu && hamburger) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
            document.body.style.overflow = '';
        }
    }
}, 250));

// Handle window load
window.addEventListener('load', () => {
    // Remove any loading states
    document.body.classList.add('loaded');
    
    // Add subtle entrance animation to hero elements
    const heroElements = document.querySelectorAll('.hero-name, .hero-roles, .hero-description, .hero-buttons, .social-links');
    heroElements.forEach((el, index) => {
        if (el) {
            setTimeout(() => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }, index * 200);
        }
    });
});

// Export for potential testing or external use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        skillsData,
        projectsData,
        ThemeManager,
        NavigationManager,
        TypingAnimation,
        SkillsManager,
        ProjectsManager,
        ScrollAnimations
    };
}