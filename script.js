// Global variables
let resumeData = null;

// Load resume data and initialize the page
document.addEventListener('DOMContentLoaded', async function() {
    try {
        // Load resume data from JSON file
        const response = await fetch('./data/resume-data.json');
        resumeData = await response.json();
        
        // Initialize all sections
        initializeHero();
        initializeAbout();
        initializeSkills();
        initializeProjects();
        initializePublications();
        initializeAchievements();
        initializeExperience();
        initializeContact();
        initializeFooter();
        initializeNavigation();
        
        // Initialize interactive features
        initializeScrollEffects();
        initializeSkillsVisualization(); // Skills visualization only
        initializeScrollProgress();
        initializeThemeToggle();
        initializePDFDownload();
        initializeScrollIndicator();
        initializeParallaxEffect();
        
        // Initialize enhanced animations
        setTimeout(() => {
            createEnhancedParticles();
            initializeMouseOrb(); // Use the proper function name
            initializeScrollIndicator();
            initializeParallaxEffect();
        }, 1000);
        
    } catch (error) {
        console.error('Error loading resume data:', error);
        showError('Failed to load resume data. Please try again later.');
    }
});

// Enhanced animation utility functions
function addGlitchEffect(element) {
    element.classList.add('glitch-effect');
    
    // Create glitch layers
    const glitchBefore = document.createElement('span');
    const glitchAfter = document.createElement('span');
    
    glitchBefore.className = 'glitch-before';
    glitchAfter.className = 'glitch-after';
    
    glitchBefore.textContent = element.textContent;
    glitchAfter.textContent = element.textContent;
    
    element.style.position = 'relative';
    element.appendChild(glitchBefore);
    element.appendChild(glitchAfter);
    
    // Trigger glitch animation periodically
    setInterval(() => {
        if (Math.random() > 0.95) {
            element.classList.add('glitch-active');
            setTimeout(() => {
                element.classList.remove('glitch-active');
            }, 200);
        }
    }, 3000);
}

function addTextShimmer(element) {
    element.classList.add('shimmer-effect');
    
    // Create shimmer overlay
    const shimmer = document.createElement('div');
    shimmer.className = 'shimmer-overlay';
    element.style.position = 'relative';
    element.appendChild(shimmer);
    
    // Trigger shimmer effect
    setTimeout(() => {
        shimmer.classList.add('shimmer-active');
    }, 1000);
}

function addAdvancedTypewriterEffect(element, text, speed = 30) {
    element.innerHTML = '';
    let i = 0;
    let isTag = false;
    let currentHtml = '';
    
    function typing() {
        if (i < text.length) {
            let char = text.charAt(i);
            
            // Handle HTML tags
            if (char === '<') isTag = true;
            if (char === '>') isTag = false;
            
            currentHtml += char;
            
            if (!isTag) {
                element.innerHTML = currentHtml + '<span class="typing-cursor">|</span>';
                
                // Add typing sound effect (visual representation)
                if (Math.random() > 0.7) {
                    element.style.textShadow = '0 0 5px rgba(102, 126, 234, 0.5)';
                    setTimeout(() => {
                        element.style.textShadow = 'none';
                    }, 50);
                }
            } else {
                element.innerHTML = currentHtml + '<span class="typing-cursor">|</span>';
            }
            
            i++;
            
            // Variable speed for more natural typing
            const nextSpeed = isTag ? 0 : speed + (Math.random() * 20 - 10);
            setTimeout(typing, Math.max(nextSpeed, 10));
        } else {
            element.innerHTML = currentHtml;
        }
    }
    
    setTimeout(typing, 1500);
}

// Initialize hero section
function initializeHero() {
    const { basics } = resumeData;
    
    document.getElementById('page-title').textContent = `${basics.name} - ${basics.title}`;
    document.getElementById('nav-logo-name').textContent = basics.name;
    
    // Set name with enhanced typing animation
    const nameElement = document.getElementById('hero-name');
    if (nameElement) {
        nameElement.style.opacity = '0';
        setTimeout(() => {
            nameElement.textContent = basics.name;
            nameElement.style.opacity = '1';
            nameElement.classList.add('typing-animation');
            addGlitchEffect(nameElement);
        }, 500);
    }
    
    // Set title with staggered fade-in animation  
    const titleElement = document.getElementById('hero-title');
    if (titleElement) {
        titleElement.style.opacity = '0';
        titleElement.style.transform = 'translateY(30px)';
        setTimeout(() => {
            titleElement.textContent = basics.title;
            titleElement.style.transition = 'all 1s ease-out';
            titleElement.style.opacity = '1';
            titleElement.style.transform = 'translateY(0)';
            addTextShimmer(titleElement);
        }, 1500);
    }
    
    // Set description with enhanced typewriter effect
    const descElement = document.getElementById('hero-description');
    if (descElement) {
        descElement.style.opacity = '0';
        setTimeout(() => {
            descElement.style.opacity = '1';
            addAdvancedTypewriterEffect(descElement, basics.summary[0], 30);
        }, 2500);
    }
    
    // Add dynamic expertise tags with staggered animations
    const expertiseContainer = document.getElementById('hero-expertise');
    if (expertiseContainer) {
        const expertiseTags = [
            'OAuth2/OIDC Expert',
            'Forgerock Specialist', 
            'Identity Architecture',
            'API Security',
            'Banking Solutions'
        ];
        
        expertiseContainer.innerHTML = '';
        expertiseContainer.style.opacity = '0';
        
        setTimeout(() => {
            expertiseContainer.style.opacity = '1';
            expertiseTags.forEach((tag, index) => {
                setTimeout(() => {
                    const tagElement = document.createElement('span');
                    tagElement.className = 'expertise-tag';
                    tagElement.textContent = tag;
                    tagElement.style.opacity = '0';
                    tagElement.style.transform = 'translateY(20px) scale(0.8)';
                    expertiseContainer.appendChild(tagElement);
                    
                    // Animate tag appearance
                    setTimeout(() => {
                        tagElement.style.transition = 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
                        tagElement.style.opacity = '1';
                        tagElement.style.transform = 'translateY(0) scale(1)';
                    }, 50);
                }, index * 200);
            });
        }, 3500);
    }
    
    // Animate buttons with bounce effect
    const buttonsContainer = document.querySelector('.hero-buttons');
    if (buttonsContainer) {
        buttonsContainer.style.opacity = '0';
        buttonsContainer.style.transform = 'translateY(30px)';
        setTimeout(() => {
            buttonsContainer.style.transition = 'all 1s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            buttonsContainer.style.opacity = '1';
            buttonsContainer.style.transform = 'translateY(0)';
        }, 4500);
    }
    
    // Social links and profile images removed for simplicity
    // Contact information is handled in the dedicated contact section
}

// Initialize about section
function initializeAbout() {
    const { basics, stats } = resumeData;
    
    // Populate summary
    const summaryContainer = document.getElementById('about-summary');
    summaryContainer.innerHTML = '';
    basics.summary.forEach(paragraph => {
        const p = document.createElement('p');
        p.textContent = paragraph;
        summaryContainer.appendChild(p);
    });
    
    // Populate stats
    const statsContainer = document.getElementById('about-stats');
    statsContainer.innerHTML = '';
    stats.forEach(stat => {
        const statItem = document.createElement('div');
        statItem.className = 'stat-item';
        statItem.innerHTML = `
            <span class="stat-number">${stat.number}</span>
            <span class="stat-label">${stat.label}</span>
        `;
        statsContainer.appendChild(statItem);
    });
    
    // Profile images removed for simplicity
}

// Initialize skills section
// Initialize skills section
function initializeSkills() {
    const { skills } = resumeData;
    
    // Populate skills grid
    const skillsGrid = document.getElementById('skills-grid');
    if (!skillsGrid) return;
    
    skillsGrid.innerHTML = '';
    
    skills.categories.forEach(category => {
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'skill-category fade-in-up';
        
        const skillItems = category.items.map(item => 
            `<span class="skill-item">${item}</span>`
        ).join('');
        
        categoryDiv.innerHTML = `
            <h3>${category.name}</h3>
            <div class="skill-items">
                ${skillItems}
            </div>
        `;
        
        skillsGrid.appendChild(categoryDiv);
    });
}

// Initialize proficiency chart
function initializeProficiency() {
    const { skills } = resumeData;
    
    const proficiencyChart = document.getElementById('proficiency-chart');
    if (!proficiencyChart) return; // Skip if element doesn't exist
    
    proficiencyChart.innerHTML = '';
    
    skills.proficiency.forEach((skill, index) => {
        const proficiencyItem = document.createElement('div');
        proficiencyItem.className = 'proficiency-item';
        proficiencyItem.innerHTML = `
            <div class="proficiency-label">${skill.skill}</div>
            <div class="proficiency-bar">
                <div class="proficiency-fill" data-level="${skill.level}" style="width: 0%"></div>
            </div>
            <div class="proficiency-value">${skill.level}%</div>
        `;
        proficiencyChart.appendChild(proficiencyItem);
        
        // Animate the bar after a delay
        setTimeout(() => {
            const fill = proficiencyItem.querySelector('.proficiency-fill');
            fill.style.width = `${skill.level}%`;
        }, index * 100 + 500);
    });
}

// Initialize projects section
function initializeProjects() {
    const { projects } = resumeData;
    
    // Populate projects grid
    const projectsGrid = document.getElementById('projects-grid');
    if (!projectsGrid) return;
    
    projectsGrid.innerHTML = '';
    
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card fade-in-up';
        projectCard.setAttribute('data-category', project.category);
        
        const statsKeys = Object.keys(project.stats);
        const statsHTML = statsKeys.map(key => 
            `<span class="project-stat">${project.stats[key]}</span>`
        ).join('');
        
        const techHTML = project.technologies.map(tech => 
            `<span class="tech-tag">${tech}</span>`
        ).join('');
        
        projectCard.innerHTML = `
            <div class="project-content">
                <div class="project-category">${project.category.toUpperCase()}</div>
                <h3>${project.name}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-stats">
                    ${statsHTML}
                </div>
                <div class="project-technologies">
                    ${techHTML}
                </div>
            </div>
        `;
        
        projectsGrid.appendChild(projectCard);
    });
}

// Initialize publications section
function initializePublications() {
    const { publications } = resumeData;
    if (!publications || publications.length === 0) return;
    
    const publicationsGrid = document.getElementById('publications-grid');
    if (!publicationsGrid) return;
    
    publicationsGrid.innerHTML = '';
    
    publications.forEach((publication, index) => {
        const publicationCard = document.createElement('div');
        publicationCard.className = 'publication-card';
        publicationCard.style.animationDelay = `${index * 0.1}s`;
        
        const authorsText = publication.authors.join(', ');
        
        publicationCard.innerHTML = `
            <div class="publication-content">
                <div class="publication-category">${publication.category}</div>
                <h3>${publication.name}</h3>
                <p class="publication-publisher">${publication.publisher}</p>
                <p class="publication-authors">${authorsText}</p>
                <span class="publication-year">${publication.year}</span>
            </div>
        `;
        
        publicationsGrid.appendChild(publicationCard);
    });
}

// Initialize achievements section
function initializeAchievements() {
    const { achievements } = resumeData;
    
    const achievementsGrid = document.getElementById('achievements-grid');
    if (!achievementsGrid) return;
    
    achievementsGrid.innerHTML = '';
    
    achievements.forEach(achievement => {
        const achievementCard = document.createElement('div');
        achievementCard.className = 'achievement-card fade-in-up';
        achievementCard.innerHTML = `
            <div class="achievement-icon">
                <i class="${achievement.icon}"></i>
            </div>
            <h3>${achievement.title}</h3>
            <p class="achievement-description">${achievement.description}</p>
            <div class="achievement-date">${achievement.date}</div>
        `;
        achievementsGrid.appendChild(achievementCard);
    });
}

// Initialize experience section
function initializeExperience() {
    const { work } = resumeData;
    
    const experienceTimeline = document.getElementById('experience-timeline');
    experienceTimeline.innerHTML = '';
    
    work.forEach((job, index) => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        timelineItem.style.animationDelay = `${index * 0.2}s`;
        
        const startDate = new Date(job.startDate);
        const endDate = job.endDate === 'Present' ? new Date() : new Date(job.endDate);
        const startYear = startDate.getFullYear();
        const startMonth = startDate.toLocaleString('default', { month: 'short' });
        const endYear = job.endDate === 'Present' ? 'Present' : endDate.getFullYear();
        const endMonth = job.endDate === 'Present' ? '' : endDate.toLocaleString('default', { month: 'short' });
        
        const dateRange = job.endDate === 'Present' 
            ? `${startMonth} ${startYear} - Present`
            : `${startMonth} ${startYear} - ${endMonth} ${endYear}`;
        
        const highlightsHTML = job.highlights.map(highlight => 
            `<li>${highlight}</li>`
        ).join('');
        
        const locationHTML = job.location ? `<span class="job-location"><i class="fas fa-map-marker-alt"></i> ${job.location}</span>` : '';
        const environmentHTML = job.description ? `<div class="job-environment"><strong>Environment:</strong> ${job.description}</div>` : '';
        
        timelineItem.innerHTML = `
            <div class="timeline-marker"></div>
            <div class="timeline-content">
                <div class="job-title">${job.position}</div>
                <div class="job-company">${job.company}</div>
                <div class="job-meta">
                    <span>${dateRange}</span>
                    ${locationHTML}
                </div>
                <p class="job-description">${job.summary}</p>
                ${environmentHTML}
                <ul class="job-highlights">
                    ${highlightsHTML}
                </ul>
            </div>
        `;
        
        experienceTimeline.appendChild(timelineItem);
    });
}

// Initialize contact section
function initializeContact() {
    const { contact } = resumeData;
    
    const contactItems = document.getElementById('contact-items');
    contactItems.innerHTML = '';
    
    // Email contact item
    const emailItem = document.createElement('a');
    emailItem.className = 'contact-item';
    emailItem.href = `mailto:${contact.email}`;
    emailItem.innerHTML = `
        <div class="contact-icon">
            <i class="fas fa-envelope"></i>
        </div>
        <div class="contact-item-content">
            <div class="contact-label">Email</div>
            <div class="contact-value">${contact.email}</div>
        </div>
    `;
    contactItems.appendChild(emailItem);
    
    // Phone contact item
    const phoneItem = document.createElement('a');
    phoneItem.className = 'contact-item';
    phoneItem.href = `tel:${contact.phone}`;
    phoneItem.innerHTML = `
        <div class="contact-icon">
            <i class="fas fa-phone"></i>
        </div>
        <div class="contact-item-content">
            <div class="contact-label">Phone</div>
            <div class="contact-value">${contact.phone}</div>
        </div>
    `;
    contactItems.appendChild(phoneItem);
    
    // Location item
    const locationItem = document.createElement('div');
    locationItem.className = 'contact-item';
    locationItem.innerHTML = `
        <div class="contact-icon">
            <i class="fas fa-map-marker-alt"></i>
        </div>
        <div class="contact-item-content">
            <div class="contact-label">Location</div>
            <div class="contact-value">Sydney, Australia</div>
        </div>
    `;
    contactItems.appendChild(locationItem);
    
    // Initialize contact form
    initializeContactForm();
}

// Initialize footer
function initializeFooter() {
    const { basics } = resumeData;
    
    document.getElementById('footer-copyright').textContent = 
        `© ${new Date().getFullYear()} ${basics.name}. All rights reserved.`;
    
    // Social links removed for simplicity - contact info is in the dedicated contact section
}

// Initialize navigation functionality
function initializeNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navMenu) navMenu.classList.remove('active');
            if (navToggle) navToggle.classList.remove('active');
        });
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Initialize scroll effects
function initializeScrollEffects() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
}

// Initialize mouse follower effect
function initializeMouseFollower() {
    const mouseFollower = document.getElementById('mouse-follower');
    const hero = document.querySelector('.hero');
    
    if (!mouseFollower || !hero) return;
    
    let mouseX = 0, mouseY = 0;
    let followerX = 0, followerY = 0;
    
    // Update mouse position
    hero.addEventListener('mousemove', (e) => {
        const rect = hero.getBoundingClientRect();
        mouseX = e.clientX - rect.left;
        mouseY = e.clientY - rect.top;
    });
    
    // Smooth follow animation
    function animate() {
        followerX += (mouseX - followerX) * 0.1;
        followerY += (mouseY - followerY) * 0.1;
        
        mouseFollower.style.left = followerX + 'px';
        mouseFollower.style.top = followerY + 'px';
        
        requestAnimationFrame(animate);
    }
    
    animate();
    
    // Hide follower when mouse leaves hero section
    hero.addEventListener('mouseleave', () => {
        mouseFollower.style.opacity = '0';
    });
    
    hero.addEventListener('mouseenter', () => {
        mouseFollower.style.opacity = '1';
    });
}

// Initialize scroll indicator
function initializeScrollIndicator() {
    const scrollIndicator = document.getElementById('scroll-indicator');
    if (!scrollIndicator) return;
    
    // Smooth scroll to about section
    scrollIndicator.addEventListener('click', () => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
    
    // Hide indicator when scrolled past hero
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const heroHeight = document.querySelector('.hero').offsetHeight;
        
        if (scrollTop > heroHeight * 0.5) {
            scrollIndicator.style.opacity = '0';
            scrollIndicator.style.transform = 'translateX(-50%) translateY(20px)';
        } else {
            scrollIndicator.style.opacity = '1';
            scrollIndicator.style.transform = 'translateX(-50%) translateY(0)';
        }
    });
}

// Initialize parallax effect for hero elements
function initializeParallaxEffect() {
    const heroElements = document.querySelectorAll('.hero-content > *');
    
    if (!heroElements.length) return;
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollPercent = scrollTop / window.innerHeight;
        
        heroElements.forEach((element, index) => {
            const speed = (index + 1) * 0.1;
            const yPos = scrollTop * speed;
            element.style.transform = `translateY(${yPos}px)`;
        });
    });
}

// Initialize skills toggle functionality
function initializeSkillsToggle() {
    const toggleBtns = document.querySelectorAll('.toggle-btn');
    const skillsViews = document.querySelectorAll('.skills-view');

    toggleBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const view = this.getAttribute('data-view');
            
            toggleBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            skillsViews.forEach(v => v.style.display = 'none');
            const targetView = document.getElementById(view + '-view');
            if (targetView) {
                targetView.style.display = 'block';
            }

            if (view === 'chart') {
                setTimeout(() => animateSkillBars(), 100);
            }
        });
    });
}

// Initialize technology map
function initializeTechMap() {
    if (!resumeData?.skills?.techMap) return;
    
    generateAdvancedTechMap();
    setupTechMapInteraction();
    setupTechMapControls();
}

// Generate advanced interactive tech map
function generateAdvancedTechMap() {
    const svg = document.getElementById('tech-map-svg');
    if (!svg) return;
    
    const { techMap } = resumeData.skills;
    const center = techMap.centerPosition;
    
    // Clear existing content
    svg.innerHTML = '';
    
    // Create gradients and definitions
    const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
    defs.innerHTML = `
        <linearGradient id="centralGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#667eea"/>
            <stop offset="100%" stop-color="#764ba2"/>
        </linearGradient>
        <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
            </feMerge>
        </filter>
        <filter id="shadow">
            <feDropShadow dx="2" dy="2" stdDeviation="3" flood-opacity="0.3"/>
        </filter>
    `;
    svg.appendChild(defs);
    
    // Color schemes for different categories
    const colorSchemes = {
        'iam': {
            primary: '#10b981',
            secondary: '#065f46',
            gradient: 'linear-gradient(135deg, #10b981, #059669)'
        },
        'protocol': {
            primary: '#f59e0b',
            secondary: '#92400e',
            gradient: 'linear-gradient(135deg, #f59e0b, #d97706)'
        },
        'development': {
            primary: '#8b5cf6',
            secondary: '#5b21b6',
            gradient: 'linear-gradient(135deg, #8b5cf6, #7c3aed)'
        },
        'devops': {
            primary: '#ef4444',
            secondary: '#991b1b',
            gradient: 'linear-gradient(135deg, #ef4444, #dc2626)'
        },
        'database': {
            primary: '#06b6d4',
            secondary: '#164e63',
            gradient: 'linear-gradient(135deg, #06b6d4, #0891b2)'
        }
    };
    
    // Create connection lines first (so they appear behind nodes)
    const connectionsGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    connectionsGroup.setAttribute('class', 'connections-layer');
    svg.appendChild(connectionsGroup);
    
    // Draw cluster connections to center
    techMap.clusters.forEach(cluster => {
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', center.x);
        line.setAttribute('y1', center.y);
        line.setAttribute('x2', cluster.position.x);
        line.setAttribute('y2', cluster.position.y);
        line.setAttribute('stroke', colorSchemes[cluster.color]?.primary || '#6b7280');
        line.setAttribute('stroke-width', '3');
        line.setAttribute('stroke-opacity', '0.4');
        line.setAttribute('class', 'cluster-connection');
        connectionsGroup.appendChild(line);
    });
    
    // Draw technology connections
    if (techMap.connections) {
        techMap.connections.forEach(connection => {
            const fromTech = findTechByName(connection.from);
            const toTech = findTechByName(connection.to);
            
            if (fromTech && toTech) {
                const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
                line.setAttribute('x1', fromTech.position.x);
                line.setAttribute('y1', fromTech.position.y);
                line.setAttribute('x2', toTech.position.x);
                line.setAttribute('y2', toTech.position.y);
                line.setAttribute('stroke', '#e5e7eb');
                line.setAttribute('stroke-width', connection.strength === 'strong' ? '2' : '1');
                line.setAttribute('stroke-opacity', '0.5');
                line.setAttribute('stroke-dasharray', connection.type === 'integrates' ? '5,5' : '');
                line.setAttribute('class', `tech-connection ${connection.type}`);
                connectionsGroup.appendChild(line);
            }
        });
    }
    
    // Create central hub with enhanced styling
    const centralGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    centralGroup.setAttribute('class', 'central-hub-group');
    
    const centralCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    centralCircle.setAttribute('cx', center.x);
    centralCircle.setAttribute('cy', center.y);
    centralCircle.setAttribute('r', '50');
    centralCircle.setAttribute('fill', 'url(#centralGradient)');
    centralCircle.setAttribute('stroke', '#4f46e5');
    centralCircle.setAttribute('stroke-width', '3');
    centralCircle.setAttribute('filter', 'url(#glow)');
    centralCircle.setAttribute('class', 'central-hub');
    
    const centralText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    centralText.setAttribute('x', center.x);
    centralText.setAttribute('y', center.y);
    centralText.setAttribute('text-anchor', 'middle');
    centralText.setAttribute('dy', '0.3em');
    centralText.setAttribute('fill', 'white');
    centralText.setAttribute('font-size', '16');
    centralText.setAttribute('font-weight', 'bold');
    centralText.setAttribute('class', 'central-text');
    centralText.textContent = techMap.centralHub;
    
    centralGroup.appendChild(centralCircle);
    centralGroup.appendChild(centralText);
    svg.appendChild(centralGroup);
    
    // Create clusters and technologies
    techMap.clusters.forEach((cluster, clusterIndex) => {
        const clusterGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        clusterGroup.setAttribute('class', `cluster-group cluster-${cluster.color}`);
        clusterGroup.setAttribute('data-cluster', clusterIndex);
        
        const colors = colorSchemes[cluster.color];
        
        // Create cluster background circle
        const clusterBg = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        clusterBg.setAttribute('cx', cluster.position.x);
        clusterBg.setAttribute('cy', cluster.position.y);
        clusterBg.setAttribute('r', '80');
        clusterBg.setAttribute('fill', colors.primary);
        clusterBg.setAttribute('fill-opacity', '0.1');
        clusterBg.setAttribute('stroke', colors.primary);
        clusterBg.setAttribute('stroke-width', '2');
        clusterBg.setAttribute('stroke-dasharray', '5,5');
        clusterBg.setAttribute('class', 'cluster-background');
        clusterGroup.appendChild(clusterBg);
        
        // Create cluster node
        const clusterNode = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        clusterNode.setAttribute('cx', cluster.position.x);
        clusterNode.setAttribute('cy', cluster.position.y);
        clusterNode.setAttribute('r', '35');
        clusterNode.setAttribute('fill', colors.primary);
        clusterNode.setAttribute('stroke', colors.secondary);
        clusterNode.setAttribute('stroke-width', '3');
        clusterNode.setAttribute('filter', 'url(#shadow)');
        clusterNode.setAttribute('class', `cluster-node cluster-${cluster.color}`);
        clusterGroup.appendChild(clusterNode);
        
        // Add cluster icon
        if (cluster.icon) {
            const clusterIcon = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            clusterIcon.setAttribute('x', cluster.position.x);
            clusterIcon.setAttribute('y', cluster.position.y - 5);
            clusterIcon.setAttribute('text-anchor', 'middle');
            clusterIcon.setAttribute('dy', '0.3em');
            clusterIcon.setAttribute('font-size', '20');
            clusterIcon.setAttribute('class', 'cluster-icon');
            clusterIcon.textContent = cluster.icon;
            clusterGroup.appendChild(clusterIcon);
        }
        
        // Create cluster label
        const clusterLabel = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        clusterLabel.setAttribute('x', cluster.position.x);
        clusterLabel.setAttribute('y', cluster.position.y + 15);
        clusterLabel.setAttribute('text-anchor', 'middle');
        clusterLabel.setAttribute('dy', '0.3em');
        clusterLabel.setAttribute('fill', 'white');
        clusterLabel.setAttribute('font-size', '12');
        clusterLabel.setAttribute('font-weight', 'bold');
        clusterLabel.setAttribute('class', 'cluster-label');
        clusterLabel.textContent = cluster.name;
        clusterGroup.appendChild(clusterLabel);
        
        // Create technology nodes for this cluster
        cluster.technologies.forEach((tech, techIndex) => {
            const techGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
            techGroup.setAttribute('class', `tech-node-group level-${tech.level}`);
            techGroup.setAttribute('data-tech', JSON.stringify(tech));
            techGroup.setAttribute('data-cluster', clusterIndex);
            techGroup.setAttribute('data-tech-index', techIndex);
            
            // Technology connection to cluster
            const techConnection = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            techConnection.setAttribute('x1', cluster.position.x);
            techConnection.setAttribute('y1', cluster.position.y);
            techConnection.setAttribute('x2', tech.position.x);
            techConnection.setAttribute('y2', tech.position.y);
            techConnection.setAttribute('stroke', colors.primary);
            techConnection.setAttribute('stroke-width', '2');
            techConnection.setAttribute('stroke-opacity', '0.6');
            techConnection.setAttribute('class', 'tech-connection-line');
            techGroup.appendChild(techConnection);
            
            // Technology node with level-based styling
            const levelStyles = {
                'expert': { fill: colors.primary, stroke: colors.secondary, strokeWidth: '3' },
                'advanced': { fill: colors.primary, stroke: colors.primary, strokeWidth: '2' },
                'intermediate': { fill: colors.primary, stroke: colors.primary, strokeWidth: '1' }
            };
            
            const style = levelStyles[tech.level] || levelStyles.intermediate;
            
            const techNode = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            techNode.setAttribute('cx', tech.position.x);
            techNode.setAttribute('cy', tech.position.y);
            techNode.setAttribute('r', tech.size);
            techNode.setAttribute('fill', style.fill);
            techNode.setAttribute('stroke', style.stroke);
            techNode.setAttribute('stroke-width', style.strokeWidth);
            techNode.setAttribute('filter', 'url(#shadow)');
            techNode.setAttribute('class', `tech-node tech-${cluster.color} level-${tech.level}`);
            techGroup.appendChild(techNode);
            
            // Technology label
            const techLabel = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            techLabel.setAttribute('x', tech.position.x);
            techLabel.setAttribute('y', tech.position.y + tech.size + 15);
            techLabel.setAttribute('text-anchor', 'middle');
            techLabel.setAttribute('fill', '#374151');
            techLabel.setAttribute('font-size', '11');
            techLabel.setAttribute('font-weight', '600');
            techLabel.setAttribute('class', 'tech-label');
            techLabel.textContent = tech.name;
            techGroup.appendChild(techLabel);
            
            clusterGroup.appendChild(techGroup);
        });
        
        svg.appendChild(clusterGroup);
    });
}

// Helper function to find technology by name
function findTechByName(name) {
    for (const cluster of resumeData.skills.techMap.clusters) {
        for (const tech of cluster.technologies) {
            if (tech.name === name) {
                return tech;
            }
        }
    }
    return null;
}

// Enhanced tech map interaction
function setupTechMapInteraction() {
    const techNodes = document.querySelectorAll('.tech-node-group');
    const clusterNodes = document.querySelectorAll('.cluster-group');
    const detailsPanel = document.getElementById('tech-details');
    
    // Technology node interactions - improved to prevent conflicts
    techNodes.forEach(techGroup => {
        let hoverTimeout;
        
        techGroup.addEventListener('mouseenter', (e) => {
            clearTimeout(hoverTimeout);
            const techData = JSON.parse(e.currentTarget.dataset.tech);
            showTechDetails(techData);
            highlightTechNode(e.currentTarget);
        });
        
        techGroup.addEventListener('mouseleave', (e) => {
            hoverTimeout = setTimeout(() => {
                resetTechDetails();
                unhighlightTechNode(e.currentTarget);
            }, 50); // Small delay to prevent flicker
        });
        
        techGroup.addEventListener('click', (e) => {
            e.stopPropagation();
            const techData = JSON.parse(e.currentTarget.dataset.tech);
            showDetailedTechInfo(techData);
        });
    });
    
    // Cluster interactions - improved
    clusterNodes.forEach(clusterGroup => {
        let clusterTimeout;
        
        clusterGroup.addEventListener('mouseenter', (e) => {
            clearTimeout(clusterTimeout);
            highlightCluster(e.currentTarget);
        });
        
        clusterGroup.addEventListener('mouseleave', (e) => {
            clusterTimeout = setTimeout(() => {
                unhighlightCluster(e.currentTarget);
            }, 50);
        });
    });
}

// Show technology details in the panel
function showTechDetails(tech) {
    document.getElementById('tech-name').textContent = tech.name;
    const levelEl = document.getElementById('tech-level');
    if (levelEl) {
        levelEl.textContent = tech.level.toUpperCase();
        levelEl.className = `tech-level level-${tech.level}`;
    }
    document.getElementById('tech-description').textContent = tech.description;
    document.getElementById('tech-experience').textContent = tech.experience;
    document.getElementById('tech-projects').textContent = tech.projects;
    
    // Show related technologies
    const connections = resumeData.skills.techMap.connections?.filter(
        conn => conn.from === tech.name || conn.to === tech.name
    ) || [];
    
    const connectionsDiv = document.getElementById('tech-connections');
    if (connectionsDiv && connections.length > 0) {
        connectionsDiv.innerHTML = `
            <h4>Related Technologies:</h4>
            ${connections.map(conn => {
                const relatedTech = conn.from === tech.name ? conn.to : conn.from;
                return `<span class="related-tech ${conn.type}">${relatedTech}</span>`;
            }).join('')}
        `;
        connectionsDiv.style.display = 'block';
    } else if (connectionsDiv) {
        connectionsDiv.style.display = 'none';
    }
}

// Reset details panel
function resetTechDetails() {
    document.getElementById('tech-name').textContent = 'Hover over a technology';
    const levelEl = document.getElementById('tech-level');
    if (levelEl) {
        levelEl.textContent = '';
    }
    document.getElementById('tech-description').textContent = 'Explore the interactive technology map above';
    document.getElementById('tech-experience').textContent = '-';
    document.getElementById('tech-projects').textContent = '-';
    const connectionsDiv = document.getElementById('tech-connections');
    if (connectionsDiv) {
        connectionsDiv.style.display = 'none';
    }
}

// Show detailed tech info (for click events)
function showDetailedTechInfo(tech) {
    // Could expand this to show a modal or more detailed view
    console.log('Detailed info for:', tech.name);
}

// Highlight effects - improved to reduce glitches
function highlightTechNode(techGroup) {
    // Prevent multiple highlights and use requestAnimationFrame for smooth animation
    if (techGroup.classList.contains('highlighted')) return;
    
    requestAnimationFrame(() => {
        techGroup.classList.add('highlighted');
        techGroup.style.cssText += `
            transform: scale(1.05);
            filter: brightness(1.1);
            z-index: 10;
            transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        `;
    });
}

function unhighlightTechNode(techGroup) {
    if (!techGroup.classList.contains('highlighted')) return;
    
    requestAnimationFrame(() => {
        techGroup.classList.remove('highlighted');
        techGroup.style.cssText += `
            transform: scale(1);
            filter: none;
            z-index: 1;
            transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        `;
    });
}

function highlightCluster(clusterGroup) {
    if (clusterGroup.classList.contains('cluster-highlighted')) return;
    
    requestAnimationFrame(() => {
        clusterGroup.classList.add('cluster-highlighted');
        const techGroups = clusterGroup.querySelectorAll('.tech-node-group');
        techGroups.forEach(group => {
            if (!group.classList.contains('highlighted')) {
                group.style.cssText += `
                    opacity: 1;
                    transform: scale(1.02);
                    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                `;
            }
        });
    });
}

function unhighlightCluster(clusterGroup) {
    if (!clusterGroup.classList.contains('cluster-highlighted')) return;
    
    requestAnimationFrame(() => {
        clusterGroup.classList.remove('cluster-highlighted');
        const techGroups = clusterGroup.querySelectorAll('.tech-node-group');
        techGroups.forEach(group => {
            group.style.cssText += `
                opacity: 1;
                transform: scale(1);
                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
            `;
        });
    });
}

// Setup map controls (zoom, pan, reset)
function setupTechMapControls() {
    const svg = document.getElementById('tech-map-svg');
    const zoomInBtn = document.getElementById('zoom-in');
    const zoomOutBtn = document.getElementById('zoom-out');
    const resetBtn = document.getElementById('reset-view');
    
    if (!svg) return;
    
    let currentScale = 1;
    let currentTranslateX = 0;
    let currentTranslateY = 0;
    
    function updateTransform() {
        svg.style.transform = `scale(${currentScale}) translate(${currentTranslateX}px, ${currentTranslateY}px)`;
    }
    
    if (zoomInBtn) {
        zoomInBtn.addEventListener('click', () => {
            currentScale = Math.min(currentScale * 1.2, 3);
            updateTransform();
        });
    }
    
    if (zoomOutBtn) {
        zoomOutBtn.addEventListener('click', () => {
            currentScale = Math.max(currentScale / 1.2, 0.5);
            updateTransform();
        });
    }
    
    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            currentScale = 1;
            currentTranslateX = 0;
            currentTranslateY = 0;
            updateTransform();
        });
    }
}

// Initialize project filter - improved with smooth animations
function initializeProjectFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active button state
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Animate cards
            projectCards.forEach((card, index) => {
                const category = card.getAttribute('data-category');
                const shouldShow = filter === 'all' || category === filter;
                
                if (shouldShow) {
                    // Show card with staggered animation
                    card.classList.remove('filtering-out');
                    card.style.display = 'block';
                    card.style.animation = `fadeInUp 0.4s ease ${index * 0.05}s forwards`;
                } else {
                    // Hide card with fade out animation
                    card.classList.add('filtering-out');
                    setTimeout(() => {
                        card.style.display = 'none';
                        card.classList.remove('filtering-out');
                    }, 300);
                }
            });
        });
    });
}

// Animate skill bars
function animateSkillBars() {
    const skillFills = document.querySelectorAll('.skill-fill');
    
    skillFills.forEach((fill, index) => {
        const level = fill.getAttribute('data-level');
        fill.style.width = '0%';
        
        setTimeout(() => {
            fill.style.transition = 'width 1s ease-in-out';
            fill.style.width = level + '%';
        }, index * 100);
    });
}

// Error handling
function showError(message) {
    const errorDiv = document.createElement('div');
    errorDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #ef4444;
        color: white;
        padding: 16px;
        border-radius: 8px;
        z-index: 10000;
        max-width: 300px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    `;
    errorDiv.textContent = message;
    
    document.body.appendChild(errorDiv);
    
    setTimeout(() => {
        errorDiv.remove();
    }, 5000);
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .animate-in {
        animation: fadeInUp 0.6s ease forwards;
    }
    
    .project-card {
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    
    .project-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    }
    
    .achievement-card {
        transition: transform 0.3s ease;
    }
    
    .achievement-card:hover {
        transform: scale(1.05);
    }
    
    .tech-node {
        transition: all 0.3s ease;
    }
    
    .skill-fill {
        transition: width 1s ease-in-out;
    }
    
    .glitch-effect {
        position: relative;
        display: inline-block;
        color: #fff;
        font-weight: bold;
    }
    
    .glitch-before, .glitch-after {
        content: attr(data-text);
        position: absolute;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    
    .glitch-before {
        top: 2px;
        left: 0;
        color: rgba(255, 255, 255, 0.8);
        z-index: -1;
        animation: glitch-anim 3s infinite linear alternate-reverse;
    }
    
    .glitch-after {
        top: -2px;
        left: 0;
        color: rgba(255, 255, 255, 0.8);
        z-index: -2;
        animation: glitch-anim 2.5s infinite linear alternate-reverse;
    }
    
    @keyframes glitch-anim {
        0% { clip-path: inset(0 0 0 0); }
        20% { clip-path: inset(10% 0 80% 0); }
        40% { clip-path: inset(20% 0 60% 0); }
        60% { clip-path: inset(30% 0 50% 0); }
        80% { clip-path: inset(40% 0 40% 0); }
        100% { clip-path: inset(0 0 0 0); }
    }
    
    .shimmer-effect {
        position: relative;
        overflow: hidden;
        display: inline-block;
    }
    
    .shimmer-overlay {
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.3), transparent);
        animation: shimmer-anim 2s infinite;
    }
    
    @keyframes shimmer-anim {
        0% { background-position: -200% 0; }
        100% { background-position: 200% 0; }
    }
    
    .floating-particle {
        position: absolute;
        border-radius: 50%;
        opacity: 0.7;
        pointer-events: none;
    }
    
    .particle-dot {
        width: 6px;
        height: 6px;
        background: radial-gradient(circle, #fff 0%, transparent 70%);
    }
    
    .particle-triangle {
        width: 0;
        height: 0;
        border-left: 6px solid transparent;
        border-right: 6px solid transparent;
        border-bottom: 10px solid #fff;
    }
    
    .particle-square {
        width: 8px;
        height: 8px;
        background: #fff;
    }
    
    .particle-star {
        width: 0;
        height: 0;
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
        border-bottom: 8px solid #fff;
        position: relative;
    }
    
    .particle-star:before {
        content: '';
        position: absolute;
        top: -3px;
        left: -4px;
        width: 0;
        height: 0;
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
        border-bottom: 8px solid #fff;
        transform: rotate(35deg);
    }
    
    .particle-star:after {
        content: '';
        position: absolute;
        top: -3px;
        left: -4px;
        width: 0;
        height: 0;
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
        border-bottom: 8px solid #fff;
        transform: rotate(-35deg);
    }
`;
document.head.appendChild(style);

// Animation utility functions
function typeWriter(element, text, speed = 50) {
    element.innerHTML = '';
    let i = 0;
    function typing() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        }
    }
    setTimeout(typing, 1500); // Start after 1.5s delay
}

function createFloatingParticles() {
    const particlesContainer = document.getElementById('particles-container');
    if (!particlesContainer) return;
    
    // Clear existing particles
    particlesContainer.innerHTML = '';
    
    // Create different types of particles
    const particleTypes = [
        { className: 'particle-dot', count: 30 },
        { className: 'particle-triangle', count: 15 },
        { className: 'particle-square', count: 10 },
        { className: 'particle-star', count: 8 }
    ];
    
    particleTypes.forEach(type => {
        for (let i = 0; i < type.count; i++) {
            const particle = document.createElement('div');
            particle.className = `floating-particle ${type.className}`;
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 20 + 's';
            particle.style.animationDuration = (Math.random() * 15 + 10) + 's';
            
            // Add random movement patterns
            const randomOffset = Math.random() * 100 - 50;
            particle.style.setProperty('--random-x', randomOffset + 'px');
            
            particlesContainer.appendChild(particle);
        }
    });
    
    // Add interactive particles that respond to mouse movement
    let mouseX = 0, mouseY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // Update magnetic particles
        const magneticParticles = document.querySelectorAll('.particle-magnetic');
        magneticParticles.forEach(particle => {
            const rect = particle.getBoundingClientRect();
            const particleX = rect.left + rect.width / 2;
            const particleY = rect.top + rect.height / 2;
            
            const distance = Math.sqrt(
                Math.pow(mouseX - particleX, 2) + Math.pow(mouseY - particleY, 2)
            );
            
            if (distance < 100) {
                const angle = Math.atan2(mouseY - particleY, mouseX - particleX);
                const force = (100 - distance) / 100;
                const moveX = Math.cos(angle) * force * 20;
                const moveY = Math.sin(angle) * force * 20;
                
                particle.style.transform = `translate(${moveX}px, ${moveY}px)`;
            } else {
                particle.style.transform = 'translate(0, 0)';
            }
        });
    });
    
    // Add some magnetic particles
    for (let i = 0; i < 5; i++) {
        const particle = document.createElement('div');
        particle.className = 'floating-particle particle-magnetic';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.position = 'absolute';
        particlesContainer.appendChild(particle);
    }
}

// Initialize PDF download with actual PDF generation
function initializePDFDownload() {
    const downloadBtn = document.getElementById('download-pdf');
    if (!downloadBtn) return;
    
    downloadBtn.addEventListener('click', async () => {
        // Show loading state
        const originalText = downloadBtn.innerHTML;
        
        try {
            downloadBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Generating PDF...';
            downloadBtn.disabled = true;
            
            // Generate PDF
            await generatePDF();
            
            // Reset button
            downloadBtn.innerHTML = originalText;
            downloadBtn.disabled = false;
        } catch (error) {
            console.error('PDF generation failed:', error);
            // Reset button
            downloadBtn.innerHTML = originalText;
            downloadBtn.disabled = false;
            alert('PDF generation failed. Please try using browser print (Ctrl+P/Cmd+P) and save as PDF.');
        }
    });
}

// Enhanced PDF download with better formatting and error handling
async function generatePDF() {
    const { basics } = resumeData;
    
    try {
        // For modern browsers, use print API
        if (window.print) {
            // Create a temporary print-friendly version
            const originalDisplay = document.body.style.display;
            const printContent = generatePrintableHTML();
            
            // Create a new window for printing
            const printWindow = window.open('', '_blank', 'width=800,height=600');
            if (!printWindow) {
                throw new Error('Popup blocked. Please allow popups for this site.');
            }
            
            printWindow.document.write(printContent);
            printWindow.document.close();
            
            // Wait for content to load and then print
            return new Promise((resolve, reject) => {
                printWindow.onload = () => {
                    setTimeout(() => {
                        try {
                            printWindow.focus();
                            printWindow.print();
                            
                            // Close window after print dialog
                            const checkClosed = setInterval(() => {
                                if (printWindow.closed) {
                                    clearInterval(checkClosed);
                                    resolve();
                                }
                            }, 1000);
                            
                            // Auto-close after 30 seconds if user doesn't act
                            setTimeout(() => {
                                if (!printWindow.closed) {
                                    printWindow.close();
                                    clearInterval(checkClosed);
                                    resolve();
                                }
                            }, 30000);
                        } catch (error) {
                            printWindow.close();
                            reject(error);
                        }
                    }, 500);
                };
                
                printWindow.onerror = () => {
                    printWindow.close();
                    reject(new Error('Failed to load print content'));
                };
            });
        } else {
            throw new Error('Print functionality not supported');
        }
    } catch (error) {
        console.error('PDF generation error:', error);
        throw error;
    }
}

// Generate print-optimized HTML content
function generatePrintableHTML() {
    const { basics, work, projects, achievements, skills, publications } = resumeData;
    
    return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>${basics.name} - Resume</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Arial', 'Helvetica', sans-serif;
            line-height: 1.5;
            color: #2c3e50;
            max-width: 8.5in;
            margin: 0 auto;
            padding: 0.5in;
            background: white;
            font-size: 11pt;
        }
        
        .header {
            text-align: center;
            margin-bottom: 25px;
            border-bottom: 3px solid #3498db;
            padding-bottom: 15px;
        }
        
        .header h1 {
            font-size: 22pt;
            color: #2c3e50;
            margin-bottom: 5px;
            font-weight: bold;
        }
        
        .header .title {
            font-size: 14pt;
            color: #3498db;
            margin-bottom: 10px;
            font-weight: 600;
        }
        
        .contact-info {
            font-size: 10pt;
            color: #7f8c8d;
            display: flex;
            justify-content: center;
            gap: 20px;
            flex-wrap: wrap;
        }
        
        .contact-item {
            display: flex;
            align-items: center;
            gap: 5px;
        }
        
        .section {
            margin-bottom: 20px;
            page-break-inside: avoid;
        }
        
        .section-title {
            font-size: 14pt;
            font-weight: bold;
            color: #2c3e50;
            margin-bottom: 12px;
            border-bottom: 2px solid #3498db;
            padding-bottom: 3px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        
        .summary {
            font-size: 11pt;
            line-height: 1.6;
            margin-bottom: 15px;
            text-align: justify;
        }
        
        .skills-section {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 15px;
            margin-bottom: 15px;
        }
        
        .skill-category {
            margin-bottom: 10px;
        }
        
        .skill-category h4 {
            font-size: 11pt;
            font-weight: bold;
            color: #3498db;
            margin-bottom: 5px;
        }
        
        .skill-items {
            font-size: 10pt;
            color: #555;
            line-height: 1.4;
        }
        
        .work-item, .project-item, .achievement-item {
            margin-bottom: 15px;
            page-break-inside: avoid;
        }
            page-break-inside: avoid;
        }
        
        .work-title, .project-title {
            font-weight: bold;
            font-size: 13px;
            color: #333;
        }
        
        .work-meta, .project-meta {
            font-size: 11px;
            color: #666;
            margin-bottom: 5px;
        }
        
        .description {
            font-size: 11px;
            margin-bottom: 8px;
        }
        
        .skills-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 15px;
        }
        
        .skill-category {
            font-size: 12px;
        }
        
        .skill-category h4 {
            font-weight: bold;
            color: #3498db;
            margin-bottom: 5px;
        }
        
        .skill-tags {
            font-size: 10px;
            line-height: 1.4;
        }
        
        .achievement-item {
            font-size: 11px;
            margin-bottom: 8px;
        }
        
        .achievement-item strong {
            color: #3498db;
        }
        
        .publication-item {
            font-size: 11px;
            margin-bottom: 10px;
        }
        
        .publication-title {
            font-weight: bold;
            color: #333;
        }
        
        .publication-meta {
            color: #666;
            font-size: 10px;
        }
        
        .proficiency-section {
            margin-top: 15px;
            page-break-inside: avoid;
        }
        
        .proficiency-section h3 {
            font-size: 12pt;
            font-weight: bold;
            color: #3498db;
            margin-bottom: 10px;
            border-bottom: 1px solid #eee;
            padding-bottom: 3px;
        }
        
        .proficiency-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 5px;
            font-size: 10pt;
        }
        
        .skill-name {
            font-weight: 500;
            color: #2c3e50;
        }
        
        .skill-level {
            font-weight: bold;
            color: #3498db;
        }
        
        @media print {
            body {
                margin: 0;
                padding: 0.5in;
            }
            
            .section {
                page-break-inside: avoid;
            }
            
            .work-item, .project-item {
                page-break-inside: avoid;
            }
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>${basics.name}</h1>
        <div class="title">${basics.title}</div>
        <div class="contact-info">
            ${basics.phone} | ${basics.email} | ${basics.location}
        </div>
    </div>
    
    <div class="section">
        <h2 class="section-title">Professional Summary</h2>
        <div class="summary">
            ${basics.summary.join(' ')}
        </div>
    </div>
    
    <div class="section">
        <h2 class="section-title">Professional Experience</h2>
        ${work.map(job => `
            <div class="work-item">
                <div class="work-title">${job.position}</div>
                <div class="work-meta">${job.company} | ${job.location} | ${job.startDate} - ${job.endDate}</div>
                <div class="description">${job.summary}</div>
                ${job.highlights ? `<ul style="margin-left: 15px; font-size: 11px;">
                    ${job.highlights.map(highlight => `<li>${highlight}</li>`).join('')}
                </ul>` : ''}
            </div>
        `).join('')}
    </div>
    
    <div class="section">
        <h2 class="section-title">Key Projects</h2>
        ${projects.map(project => `
            <div class="project-item">
                <div class="project-title">${project.name}</div>
                <div class="project-meta">${project.technologies.join(', ')}</div>
                <div class="description">${project.description}</div>
            </div>
        `).join('')}
    </div>
    
    <div class="section">
        <h2 class="section-title">Technical Skills</h2>
        <div class="skills-grid">
            ${skills.categories.map(category => `
                <div class="skill-category">
                    <h4>${category.name}</h4>
                    <div class="skill-tags">${category.items.join(', ')}</div>
                </div>
            `).join('')}
        </div>
        
        ${skills.proficiency ? `
        <div class="proficiency-section">
            <h3>Proficiency Levels</h3>
            ${skills.proficiency.map(skill => `
                <div class="proficiency-item">
                    <span class="skill-name">${skill.skill}</span>
                    <span class="skill-level">${skill.level}%</span>
                </div>
            `).join('')}
        </div>
        ` : ''}
    </div>
    
    <div class="section">
        <h2 class="section-title">Key Achievements</h2>
        ${achievements.map(achievement => `
            <div class="achievement-item">
                <strong>${achievement.title}:</strong> ${achievement.description}
            </div>
        `).join('')}
    </div>
    
    ${publications && publications.length > 0 ? `
    <div class="section">
        <h2 class="section-title">Publications</h2>
        ${publications.map(pub => `
            <div class="publication-item">
                <div class="publication-title">${pub.name}</div>
                <div class="publication-meta">
                    ${pub.publisher} | ${pub.year} | ${pub.authors.join(', ')}
                </div>
            </div>
        `).join('')}
    </div>
    ` : ''}
</body>
</html>
    `;
}

// Enhanced particle creation and utility functions
function createEnhancedParticles() {
    const particlesContainer = document.getElementById('particles-container');
    if (!particlesContainer) return;

    // Clear existing particles
    particlesContainer.innerHTML = '';
    
    // Create different types of animated particles
    const particleCount = window.innerWidth > 768 ? 50 : 30;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'floating-particle';
        
        // Random properties
        const size = Math.random() * 4 + 2;
        const x = Math.random() * 100;
        const delay = Math.random() * 15;
        const duration = Math.random() * 10 + 15;
        const opacity = Math.random() * 0.3 + 0.1;
        
        // Particle types with different colors
        const particleTypes = [
            'rgba(37, 99, 235, 0.4)',   // Blue
            'rgba(16, 185, 129, 0.3)',  // Green
            'rgba(139, 92, 246, 0.3)',  // Purple
            'rgba(59, 130, 246, 0.4)',  // Light blue
            'rgba(168, 85, 247, 0.3)'   // Violet
        ];
        
        const color = particleTypes[Math.floor(Math.random() * particleTypes.length)];
        
        particle.style.cssText = `
            width: ${size}px;
            height: ${size}px;
            left: ${x}%;
            background: ${color};
            animation-delay: ${delay}s;
            animation-duration: ${duration}s;
            opacity: ${opacity};
            box-shadow: 0 0 ${size * 2}px ${color};
        `;
        
        particlesContainer.appendChild(particle);
    }
    
    // Add some larger, slower moving accent particles
    for (let i = 0; i < 8; i++) {
        const accentParticle = document.createElement('div');
        accentParticle.className = 'accent-particle';
        
        const size = Math.random() * 6 + 4;
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const delay = Math.random() * 10;
        
        accentParticle.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}%;
            top: ${y}%;
            background: linear-gradient(45deg, rgba(37, 99, 235, 0.3), rgba(16, 185, 129, 0.2));
            border-radius: 50%;
            animation: accentFloat 20s ease-in-out infinite;
            animation-delay: ${delay}s;
            pointer-events: none;
        `;
        
        particlesContainer.appendChild(accentParticle);
    }
}

// Initialize mouse orb effect
function initializeMouseOrb() {
    const mouseOrb = document.getElementById('hero-mouse-orb');
    const hero = document.querySelector('.hero');
    
    if (!mouseOrb || !hero) return;
    
    let mouseX = 0, mouseY = 0;
    let orbX = 0, orbY = 0;
    
    // Track mouse movement
    hero.addEventListener('mousemove', (e) => {
        const rect = hero.getBoundingClientRect();
        mouseX = e.clientX - rect.left;
        mouseY = e.clientY - rect.top;
    });
    
    // Smooth orb movement
    function animateOrb() {
        orbX += (mouseX - orbX) * 0.1;
        orbY += (mouseY - orbY) * 0.1;
        
        mouseOrb.style.left = orbX + 'px';
        mouseOrb.style.top = orbY + 'px';
        
        requestAnimationFrame(animateOrb);
    }
    
    animateOrb();
    
    // Show/hide orb
    hero.addEventListener('mouseenter', () => {
        mouseOrb.style.opacity = '1';
    });
    
    hero.addEventListener('mouseleave', () => {
        mouseOrb.style.opacity = '0';
    });
}

// Initialize scroll progress and theme toggle functions
function initializeScrollProgress() {
    const progressBar = document.getElementById('scroll-progress');
    if (!progressBar) return;
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (scrollTop / scrollHeight) * 100;
        progressBar.style.width = progress + '%';
    });
}

function initializeThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const icon = themeToggle?.querySelector('i');
    
    if (!themeToggle || !icon) return;
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-theme');
        icon.className = 'fas fa-sun';
    }
    
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        const isDark = body.classList.contains('dark-theme');
        icon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
}

// Initialize skills visualization
function initializeSkillsVisualization() {
    const { skills } = resumeData;
    if (!skills) return;
    
    // Create skill progress bars
    createSkillProgressBars();
    
    // Create radar chart if proficiency data exists
    if (skills.proficiency) {
        createRadarChart();
    }
    
    // Create interactive skills using categories
    if (skills.categories) {
        createInteractiveSkills();
    }
}

function createSkillProgressBars() {
    const { skills } = resumeData;
    const skillsChart = document.getElementById('skills-chart');
    if (!skillsChart || !skills.proficiency) return;
    
    skillsChart.innerHTML = '';
    
    skills.proficiency.forEach((skill, index) => {
        const skillItem = document.createElement('div');
        skillItem.className = 'skill-chart-item';
        
        skillItem.innerHTML = `
            <div class="skill-name">
                <span>${skill.skill}</span>
                <span class="skill-percentage">${skill.level}%</span>
            </div>
            <div class="skill-bar">
                <div class="skill-progress" data-level="${skill.level}"></div>
            </div>
        `;
        
        skillsChart.appendChild(skillItem);
        
        // Animate progress bar after a delay
        setTimeout(() => {
            const progressBar = skillItem.querySelector('.skill-progress');
            progressBar.style.width = skill.level + '%';
        }, index * 200 + 500);
    });
}

function createRadarChart() {
    const { skills } = resumeData;
    const radarChart = document.getElementById('radar-chart');
    if (!radarChart || !skills.proficiency) return;
    
    const data = skills.proficiency.slice(0, 6); // Use first 6 skills for radar
    const centerX = 150;
    const centerY = 150;
    const radius = 120;
    const maxLevel = 100;
    
    let svgContent = `
        <svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
            <!-- Grid lines -->
            <g class="radar-grid">
                ${[20, 40, 60, 80, 100].map(level => {
                    const r = (radius * level) / maxLevel;
                    return `<circle cx="${centerX}" cy="${centerY}" r="${r}" />`;
                }).join('')}
                ${data.map((_, index) => {
                    const angle = (index * 2 * Math.PI) / data.length - Math.PI / 2;
                    const x = centerX + radius * Math.cos(angle);
                    const y = centerY + radius * Math.sin(angle);
                    return `<line x1="${centerX}" y1="${centerY}" x2="${x}" y2="${y}" />`;
                }).join('')}
            </g>
            
            <!-- Data area -->
            <polygon class="radar-area" points="${data.map((skill, index) => {
                const angle = (index * 2 * Math.PI) / data.length - Math.PI / 2;
                const r = (radius * skill.level) / maxLevel;
                const x = centerX + r * Math.cos(angle);
                const y = centerY + r * Math.sin(angle);
                return `${x},${y}`;
            }).join(' ')}" />
            
            <!-- Data points -->
            ${data.map((skill, index) => {
                const angle = (index * 2 * Math.PI) / data.length - Math.PI / 2;
                const r = (radius * skill.level) / maxLevel;
                const x = centerX + r * Math.cos(angle);
                const y = centerY + r * Math.sin(angle);
                return `<circle class="radar-point" cx="${x}" cy="${y}" />`;
            }).join('')}
            
            <!-- Labels -->
            ${data.map((skill, index) => {
                const angle = (index * 2 * Math.PI) / data.length - Math.PI / 2;
                const labelRadius = radius + 20;
                const x = centerX + labelRadius * Math.cos(angle);
                const y = centerY + labelRadius * Math.sin(angle);
                return `<text class="radar-label" x="${x}" y="${y}" dy="0.35em">${skill.skill}</text>`;
            }).join('')}
        </svg>
    `;
    
    radarChart.innerHTML = svgContent;
}

function createInteractiveSkills() {
    const { skills } = resumeData;
    const interactiveSkills = document.getElementById('interactive-skills');
    if (!interactiveSkills || !skills.categories) return;
    
    interactiveSkills.innerHTML = '';
    
    skills.categories.forEach(category => {
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'skill-category-interactive';
        
        const skillTags = category.items.map(skill => 
            `<span class="interactive-skill-tag" data-skill="${skill}">${skill}</span>`
        ).join('');
        
        categoryDiv.innerHTML = `
            <h4>${category.name}</h4>
            <div class="interactive-skill-tags">
                ${skillTags}
            </div>
        `;
        
        interactiveSkills.appendChild(categoryDiv);
    });
    
    // Add click handlers for skill tags
    const skillTags = interactiveSkills.querySelectorAll('.interactive-skill-tag');
    skillTags.forEach(tag => {
        tag.addEventListener('click', () => {
            // Remove active class from all tags
            skillTags.forEach(t => t.classList.remove('active'));
            // Add active class to clicked tag
            tag.classList.add('active');
            
            // Show skill details (could expand this functionality)
            const skillName = tag.dataset.skill;
            
            // Create a simple tooltip or popup effect
            tag.setAttribute('title', `Click to learn more about ${skillName}`);
            
            // Add a pulse effect
            tag.style.animation = 'skillPulse 0.6s ease-in-out';
            setTimeout(() => {
                tag.style.animation = '';
            }, 600);
            
            console.log(`Selected skill: ${skillName}`);
        });
    });
}

// Initialize contact form
function initializeContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');
        
        // Create mailto link with form data
        const mailtoLink = `mailto:vamsi.patchava@gmail.com?subject=${encodeURIComponent(`Website Contact: ${subject}`)}&body=${encodeURIComponent(
            `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
        )}`;
        
        // Open email client
        window.location.href = mailtoLink;
        
        // Show success message
        showFormSuccess();
    });
}

function showFormSuccess() {
    const form = document.getElementById('contact-form');
    const originalContent = form.innerHTML;
    
    form.innerHTML = `
        <div class="form-success">
            <div class="success-icon">
                <i class="fas fa-check-circle"></i>
            </div>
            <h4>Message Sent!</h4>
            <p>Your email client should open with the message pre-filled. Thank you for reaching out!</p>
            <button type="button" class="btn btn-outline" onclick="resetContactForm()">
                Send Another Message
            </button>
        </div>
    `;
    
    // Store original content for reset
    form.dataset.originalContent = originalContent;
}

function resetContactForm() {
    const form = document.getElementById('contact-form');
    const originalContent = form.dataset.originalContent;
    
    if (originalContent) {
        form.innerHTML = originalContent;
        // Re-initialize form listener
        initializeContactForm();
    }
}

// Make resetContactForm globally accessible
window.resetContactForm = resetContactForm;