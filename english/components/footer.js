// custom-footer.js
class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                /* Core Styles */
                :host {
                    display: block;
                    width: 100%;
                }
                
                footer {
                    background: linear-gradient(135deg, #F8C8DC 0%, #F5B4CA 100%);
                    color: #333;
                    font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
                    box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.05);
                }
                
                /* Layout */
                .container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 20px;
                }
                
                .footer-content {
                    display: flex;
                    flex-direction: column;
                    gap: 40px;
                    padding: 60px 0 40px;
                }
                
                @media (min-width: 768px) {
                    .footer-content {
                        flex-direction: row;
                        justify-content: space-between;
                        align-items: flex-start;
                    }
                }
                
                /* Brand Section */
                .brand-section h3 {
                    font-size: 28px;
                    font-weight: 700;
                    margin: 0 0 20px 0;
                    color: #D63384;
                    letter-spacing: -0.5px;
                }
                
                .brand-section p {
                    max-width: 400px;
                    line-height: 1.6;
                    margin: 0;
                    color: #666;
                    font-size: 16px;
                }
                
                /* Social Icons */
                .social-section h4 {
                    font-size: 18px;
                    font-weight: 600;
                    margin: 0 0 20px 0;
                    color: #D63384;
                }
                
                .social-icons {
                    display: flex;
                    gap: 20px;
                }
                
                .social-icon {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 48px;
                    height: 48px;
                    border-radius: 12px;
                    background: rgba(255, 255, 255, 0.3);
                    backdrop-filter: blur(10px);
                    color: #D63384;
                    text-decoration: none;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    border: 1px solid rgba(255, 255, 255, 0.4);
                    position: relative;
                    overflow: hidden;
                }
                
                .social-icon::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0));
                    opacity: 0;
                    transition: opacity 0.3s;
                }
                
                .social-icon:hover {
                    transform: translateY(-5px) scale(1.1);
                    background: rgba(255, 255, 255, 0.5);
                    box-shadow: 0 10px 25px rgba(214, 51, 132, 0.2);
                }
                
                .social-icon:hover::before {
                    opacity: 1;
                }
                
                .social-icon svg {
                    width: 24px;
                    height: 24px;
                    stroke: currentColor;
                    stroke-width: 2;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                    fill: none;
                    z-index: 1;
                }
                
                /* Navigation Links */
                .links-section h4 {
                    font-size: 18px;
                    font-weight: 600;
                    margin: 0 0 20px 0;
                    color: #D63384;
                }
                
                .footer-links {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                }
    
                .footer-links a {
                    color: #666;
                    text-decoration: none;
                    transition: color 0.3s, transform 0.3s;
                    display: inline-block;
                    font-size: 15px;
                }
                
                .footer-links a:hover {
                    color: #D63384;
                    transform: translateX(5px);
                }
                
                /* Copyright */
                .copyright {
                    padding: 25px 0;
                    border-top: 1px solid rgba(255, 255, 255, 0.5);
                    text-align: center;
                    color: #666;
                    font-size: 14px;
                    margin-top: 20px;
                }
                
                .copyright p {
                    margin: 0;
                    line-height: 1.5;
                }
                
                /* Responsive */
                @media (max-width: 767px) {
                    .footer-content {
                        text-align: center;
                        gap: 30px;
                    }
                    
                    .brand-section p {
                        margin: 0 auto;
                    }
                    
                    .social-icons {
                        justify-content: center;
                    }
                    
                    .footer-links {
                        align-items: center;
                    }
                }
                
                /* Animation */
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                footer {
                    animation: fadeIn 0.8s ease-out;
                }
            </style>
            
            <footer>
                <div class="container">
                    <div class="footer-content">
                        <!-- Brand Section -->
                        <div class="brand-section">
                            <h3>Stretch & Glow</h3>
                            <p>Gentle stretching routines designed specifically for expecting mothers to promote comfort, wellness, and radiant health throughout pregnancy.</p>
                        </div>
                        
                        <!-- Quick Links -->
                        <div class="links-section">
                            <h4>Quick Links</h4>
                            <ul class="footer-links">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Programs</a></li>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Testimonials</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                        
                        <!-- Social Media -->
                        <div class="social-section">
                            <h4>Connect With Us</h4>
                            <div class="social-icons">
                                <a href="https://instagram.com/stretchandglow" 
                                   class="social-icon" 
                                   aria-label="Follow us on Instagram"
                                   target="_blank"
                                   rel="noopener noreferrer">
                                    <svg viewBox="0 0 24 24">
                                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                        <circle cx="12" cy="12" r="4"></circle>
                                        <circle cx="18" cy="6" r="1"></circle>
                                    </svg>
                                </a>
                                <a href="https://facebook.com/stretchandglow" 
                                   class="social-icon" 
                                   aria-label="Follow us on Facebook"
                                   target="_blank"
                                   rel="noopener noreferrer">
                                    <svg viewBox="0 0 24 24">
                                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                    </svg>
                                </a>
                                <a href="mailto:hello@stretchandglow.com" 
                                   class="social-icon" 
                                   aria-label="Send us an email">
                                    <svg viewBox="0 0 24 24">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                        <polyline points="22,6 12,13 2,6"></polyline>
                                    </svg>
                                </a>
                                <a href="https://youtube.com/stretchandglow" 
                                   class="social-icon" 
                                   aria-label="Watch on YouTube"
                                   target="_blank"
                                   rel="noopener noreferrer">
                                    <svg viewBox="0 0 24 24">
                                        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                                        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Copyright -->
                    <div class="copyright">
                        <p>© ${new Date().getFullYear()} Stretch & Glow. All rights reserved.</p>
                        <p>Designed with ❤️ for expecting mothers</p>
                    </div>
                </div>
            </footer>
        `;
        
        // Add event listeners for social icons
        this.addEventListeners();
    }
    
    addEventListeners() {
        // Add click tracking for analytics (example)
        const socialIcons = this.shadowRoot.querySelectorAll('.social-icon');
        socialIcons.forEach(icon => {
            icon.addEventListener('click', (e) => {
                const platform = icon.getAttribute('aria-label').match(/Instagram|Facebook|YouTube|email/)?.[0] || 'Unknown';
                console.log(`Social icon clicked: ${platform}`);
                // Here you could send to Google Analytics or other tracking
                // gtag('event', 'social_click', { platform: platform });
            });
        });
    }
}

// Register the custom element
if (!customElements.get('custom-footer')) {
    customElements.define('custom-footer', CustomFooter);
}