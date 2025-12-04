// navbar.js
class CustomNavbar extends HTMLElement {
    constructor() {
        super();
        this.menuOpen = false;
    }

    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                /* Reset and Base Styles */
                :host {
                    display: block;
                    width: 100%;
                    position: sticky;
                    top: 0;
                    z-index: 1000;
                }
                
                nav {
                    background-color: white;
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
                    backdrop-filter: blur(10px);
                    position: relative;
                }
                
                .container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 20px;
                }
                
                /* Navigation Bar Layout */
                .navbar-content {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 18px 0;
                }
                
                /* Logo/Brand */
                .brand {
                    display: flex;
                    align-items: center;
                    text-decoration: none;
                    transition: transform 0.3s ease;
                }
                
                .brand:hover {
                    transform: scale(1.02);
                }
                
                .logo-icon {
                    width: 32px;
                    height: 32px;
                    margin-right: 12px;
                    color: #F8C8DC;
                }
                
                .brand-text {
                    font-size: 24px;
                    font-weight: 700;
                    background: linear-gradient(135deg, #F8C8DC 0%, #D63384 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    letter-spacing: -0.5px;
                }
                
                /* Desktop Navigation */
                .nav-links {
                    display: none;
                    gap: 32px;
                    align-items: center;
                }
                
                .nav-link {
                    color: #4A5568;
                    text-decoration: none;
                    font-weight: 500;
                    font-size: 16px;
                    padding: 8px 4px;
                    position: relative;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    border-bottom: 2px solid transparent;
                }
                
                .nav-link:hover {
                    color: #D63384;
                    transform: translateY(-1px);
                }
                
                .nav-link.active {
                    color: #F8C8DC;
                    border-bottom-color: #F8C8DC;
                }
                
                .nav-link::after {
                    content: '';
                    position: absolute;
                    bottom: -2px;
                    left: 0;
                    width: 0;
                    height: 2px;
                    background: linear-gradient(90deg, #F8C8DC, #D63384);
                    transition: width 0.3s ease;
                }
                
                .nav-link:hover::after {
                    width: 100%;
                }
                
                /* Download Button */
                .download-btn {
                    background: linear-gradient(135deg, #F8C8DC 0%, #D63384 100%);
                    color: white;
                    padding: 12px 28px;
                    border-radius: 50px;
                    text-decoration: none;
                    font-weight: 600;
                    font-size: 15px;
                    border: none;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 15px rgba(214, 51, 132, 0.2);
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }
                
                .download-btn:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 8px 25px rgba(214, 51, 132, 0.3);
                }
                
                .download-btn:active {
                    transform: translateY(0);
                }
                
                .download-icon {
                    width: 18px;
                    height: 18px;
                }
                
                /* Mobile Menu Button */
                .mobile-menu-btn {
                    display: none;
                    background: none;
                    border: none;
                    cursor: pointer;
                    padding: 8px;
                    border-radius: 8px;
                    transition: background-color 0.3s;
                }
                
                .mobile-menu-btn:hover {
                    background-color: rgba(248, 200, 220, 0.1);
                }
                
                .menu-icon {
                    width: 28px;
                    height: 28px;
                    color: #4A5568;
                    transition: transform 0.3s ease;
                }
                
                .menu-icon.open {
                    transform: rotate(90deg);
                }
                
                /* Mobile Navigation */
                .mobile-nav {
                    display: none;
                    position: absolute;
                    top: 100%;
                    left: 0;
                    right: 0;
                    background: white;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
                    border-top: 1px solid rgba(0, 0, 0, 0.05);
                    opacity: 0;
                    transform: translateY(-10px);
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                    overflow: hidden;
                }
                
                .mobile-nav.open {
                    display: block;
                    opacity: 1;
                    transform: translateY(0);
                }
                
                .mobile-links {
                    display: flex;
                    flex-direction: column;
                    padding: 20px;
                }
                
                .mobile-link {
                    color: #4A5568;
                    text-decoration: none;
                    padding: 16px 0;
                    font-size: 17px;
                    font-weight: 500;
                    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
                    transition: all 0.3s ease;
                    display: flex;
                    align-items: center;
                    gap: 12px;
                }
                
                .mobile-link:last-child {
                    border-bottom: none;
                }
                
                .mobile-link:hover {
                    color: #D63384;
                    padding-left: 10px;
                }
                
                .mobile-link-icon {
                    width: 20px;
                    height: 20px;
                    color: #F8C8DC;
                }
                
                .mobile-download-btn {
                    margin: 20px 0 10px;
                    width: 100%;
                    justify-content: center;
                }
                
                /* Responsive Design */
                @media (min-width: 768px) {
                    .nav-links {
                        display: flex;
                    }
                    
                    .mobile-menu-btn {
                        display: none;
                    }
                }
                
                @media (max-width: 767px) {
                    .mobile-menu-btn {
                        display: block;
                    }
                    
                    .nav-links {
                        display: none;
                    }
                }
                
                /* Animation */
                @keyframes slideIn {
                    from {
                        opacity: 0;
                        transform: translateY(-20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                nav {
                    animation: slideIn 0.6s ease-out;
                }
            </style>
            
            <nav>
                <div class="container">
                    <div class="navbar-content">
                        <!-- Brand Logo -->
                        <a href="/" class="brand">
                            <svg class="logo-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                            </svg>
                            <span class="brand-text">Stretch & Glow</span>
                        </a>
                        
                        <!-- Desktop Navigation -->
                        <div class="nav-links">
                            <a href="#home" class="nav-link active">Home</a>
                            <a href="#back-stretches" class="nav-link">Back Stretches</a>
                            <a href="#hip-stretches" class="nav-link">Hip Stretches</a>
                            <a href="#routines" class="nav-link">Daily Routines</a>
                            <a href="#tips" class="nav-link">Tips & Advice</a>
                            <button class="download-btn">
                                <svg class="download-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                    <polyline points="7 10 12 15 17 10"></polyline>
                                    <line x1="12" y1="15" x2="12" y2="3"></line>
                                </svg>
                                Download Guide
                            </button>
                        </div>
                        
                        <!-- Mobile Menu Button -->
                        <button class="mobile-menu-btn" aria-label="Toggle menu">
                            <svg class="menu-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <line x1="3" y1="12" x2="21" y2="12"></line>
                                <line x1="3" y1="6" x2="21" y2="6"></line>
                                <line x1="3" y1="18" x2="21" y2="18"></line>
                            </svg>
                        </button>
                    </div>
                    
                    <!-- Mobile Navigation (Hidden by default) -->
                    <div class="mobile-nav">
                        <div class="mobile-links">
                            <a href="#home" class="mobile-link">
                                <svg class="mobile-link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                                </svg>
                                Home
                            </a>
                            <a href="#back-stretches" class="mobile-link">
                                <svg class="mobile-link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M17 10l-5-5-5 5"></path>
                                    <path d="M12 5v14"></path>
                                </svg>
                                Back Stretches
                            </a>
                            <a href="#hip-stretches" class="mobile-link">
                                <svg class="mobile-link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <path d="M12 6v6l4 2"></path>
                                </svg>
                                Hip Stretches
                            </a>
                            <a href="#routines" class="mobile-link">
                                <svg class="mobile-link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                    <line x1="16" y1="2" x2="16" y2="6"></line>
                                    <line x1="8" y1="2" x2="8" y2="6"></line>
                                    <line x1="3" y1="10" x2="21" y2="10"></line>
                                </svg>
                                Daily Routines
                            </a>
                            <a href="#tips" class="mobile-link">
                                <svg class="mobile-link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                </svg>
                                Tips & Advice
                            </a>
                            <button class="download-btn mobile-download-btn">
                                <svg class="download-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                    <polyline points="7 10 12 15 17 10"></polyline>
                                    <line x1="12" y1="15" x2="12" y2="3"></line>
                                </svg>
                                Download Free Guide
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        `;

        this.setupEventListeners();
        this.setupIntersectionObserver();
    }

    setupEventListeners() {
        const menuBtn = this.shadowRoot.querySelector('.mobile-menu-btn');
        const mobileNav = this.shadowRoot.querySelector('.mobile-nav');
        const menuIcon = this.shadowRoot.querySelector('.menu-icon');
        const mobileLinks = this.shadowRoot.querySelectorAll('.mobile-link');
        const navLinks = this.shadowRoot.querySelectorAll('.nav-link');
        const downloadBtn = this.shadowRoot.querySelectorAll('.download-btn');

        // Toggle mobile menu
        menuBtn.addEventListener('click', () => {
            this.menuOpen = !this.menuOpen;
            mobileNav.classList.toggle('open', this.menuOpen);
            menuIcon.classList.toggle('open', this.menuOpen);
            
            // Update aria-label for accessibility
            menuBtn.setAttribute('aria-label', 
                this.menuOpen ? 'Close menu' : 'Open menu'
            );
            
            // Prevent body scrolling when menu is open
            document.body.style.overflow = this.menuOpen ? 'hidden' : '';
        });

        // Close mobile menu when clicking a link
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                this.menuOpen = false;
                mobileNav.classList.remove('open');
                menuIcon.classList.remove('open');
                document.body.style.overflow = '';
            });
        });

        // Handle download button click
        downloadBtn.forEach(btn => {
            btn.addEventListener('click', () => {
                this.downloadGuide();
            });
        });

        // Update active nav link on click
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
                
                // Scroll to section if it's a hash link
                const href = link.getAttribute('href');
                if (href.startsWith('#')) {
                    const target = document.querySelector(href);
                    if (target) {
                        target.scrollIntoView({ behavior: 'smooth' });
                    }
                }
            });
        });

        // Close menu when clicking outside (for mobile)
        document.addEventListener('click', (e) => {
            if (this.menuOpen && !this.contains(e.target)) {
                this.menuOpen = false;
                mobileNav.classList.remove('open');
                menuIcon.classList.remove('open');
                document.body.style.overflow = '';
            }
        });
    }

    setupIntersectionObserver() {
        // Update active nav link based on scroll position
        const sections = document.querySelectorAll('section[id], div[id]');
        const navLinks = this.shadowRoot.querySelectorAll('.nav-link, .mobile-link');
        
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const id = entry.target.getAttribute('id');
                        navLinks.forEach(link => {
                            const href = link.getAttribute('href');
                            if (href === `#${id}`) {
                                link.classList.add('active');
                            } else if (href.startsWith('#')) {
                                link.classList.remove('active');
                            }
                        });
                    }
                });
            },
            { rootMargin: '-50% 0px -50% 0px', threshold: 0 }
        );

        sections.forEach(section => observer.observe(section));
    }

    downloadGuide() {
        // Create download event
        const event = new CustomEvent('download-guide', {
            bubbles: true,
            composed: true,
            detail: { timestamp: new Date().toISOString() }
        });
        this.dispatchEvent(event);
        
        // Show confirmation (in real app, this would download a PDF)
        alert('Your free pregnancy stretching guide will start downloading shortly!');
        
        // Log for analytics
        console.log('Download guide clicked');
    }

    disconnectedCallback() {
        // Cleanup
        document.body.style.overflow = '';
    }
}

// Register the custom element
if (!customElements.get('custom-navbar')) {
    customElements.define('custom-navbar', CustomNavbar);
}