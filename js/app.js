// Configuration - Update these values for your repository
const GITHUB_CONFIG = {
    username: 'Zain1098', // Replace with your GitHub username
    repository: 'CurrenSee-APK-Update', // Replace with your repository name
    apiUrl: 'https://api.github.com/repos/Zain1098/CurrenSee-APK-Update/releases/latest'
};

// App state
let currentTheme = localStorage.getItem('theme') || 'light';
let latestRelease = null;

// DOM elements
const themeToggle = document.getElementById('themeToggle');
const navToggle = document.getElementById('navToggle');
const navMenu = document.querySelector('.nav-menu');
const downloadBtns = [document.getElementById('downloadBtn'), document.getElementById('downloadBtn2')];
const btnLoadings = [document.getElementById('btnLoading'), document.getElementById('btnLoading2')];
const latestVersionSpan = document.getElementById('latestVersion');

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    initializeTheme();
    initializeNavigation();
    initializeDownloadButtons();
    fetchLatestRelease();
    initializeAnimations();
});

// Theme management
function initializeTheme() {
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeIcon();
}

function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);
    updateThemeIcon();
}

function updateThemeIcon() {
    const moonIcon = themeToggle.querySelector('.fa-moon');
    const sunIcon = themeToggle.querySelector('.fa-sun');
    
    if (currentTheme === 'dark') {
        moonIcon.style.display = 'none';
        sunIcon.style.display = 'block';
    } else {
        moonIcon.style.display = 'block';
        sunIcon.style.display = 'none';
    }
}

// Navigation
function initializeNavigation() {
    // Theme toggle
    themeToggle.addEventListener('click', toggleTheme);
    
    // Mobile navigation
    navToggle.addEventListener('click', toggleMobileMenu);
    
    // Close mobile menu when clicking on links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                navMenu.classList.remove('active');
            }
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
            navMenu.classList.remove('active');
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

function toggleMobileMenu() {
    navMenu.classList.toggle('active');
}

// GitHub API integration
async function fetchLatestRelease() {
    try {
        showLoadingState(true);
        
        const response = await fetch(GITHUB_CONFIG.apiUrl);
        
        if (!response.ok) {
            throw new Error(`GitHub API error: ${response.status}`);
        }
        
        const release = await response.json();
        latestRelease = release;
        
        updateDownloadButtons(release);
        updateVersionInfo(release);
        
    } catch (error) {
        console.error('Error fetching latest release:', error);
        handleFetchError();
    } finally {
        showLoadingState(false);
    }
}

function updateDownloadButtons(release) {
    const apkAsset = release.assets.find(asset => 
        asset.name.toLowerCase().endsWith('.apk')
    );
    
    if (apkAsset) {
        downloadBtns.forEach(btn => {
            btn.onclick = () => downloadAPK(apkAsset.browser_download_url);
            btn.disabled = false;
        });
    } else {
        // Fallback to release page if no APK found
        downloadBtns.forEach(btn => {
            btn.onclick = () => window.open(release.html_url, '_blank');
            btn.disabled = false;
        });
    }
}

function updateVersionInfo(release) {
    if (latestVersionSpan) {
        latestVersionSpan.textContent = release.tag_name;
        latestVersionSpan.style.opacity = '1';
    }
}

function downloadAPK(url) {
    // Show loading state
    downloadBtns.forEach(btn => {
        btn.classList.add('loading');
    });
    
    // Create a temporary link to trigger download
    const link = document.createElement('a');
    link.href = url;
    link.download = '';
    link.style.display = 'none';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Remove loading state after a short delay
    setTimeout(() => {
        downloadBtns.forEach(btn => {
            btn.classList.remove('loading');
        });
    }, 2000);
}

function showLoadingState(loading) {
    if (loading) {
        latestVersionSpan.textContent = 'Loading...';
        latestVersionSpan.style.opacity = '0.7';
    }
}

function handleFetchError() {
    // Fallback to a default download link or show error message
    downloadBtns.forEach(btn => {
        btn.onclick = () => {
            alert('Unable to fetch latest release. Please visit the GitHub repository to download the latest version.');
            window.open(`https://github.com/${GITHUB_CONFIG.username}/${GITHUB_CONFIG.repository}/releases`, '_blank');
        };
    });
    
    if (latestVersionSpan) {
        latestVersionSpan.textContent = 'Check GitHub';
        latestVersionSpan.style.opacity = '0.7';
    }
}

// Initialize download buttons
function initializeDownloadButtons() {
    downloadBtns.forEach(btn => {
        btn.disabled = true;
        btn.onclick = () => {
            if (!latestRelease) {
                alert('Please wait while we fetch the latest release information...');
                return;
            }
        };
    });
}

// Animations and interactions
function initializeAnimations() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.feature-card, .hero-content, .hero-visual').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Parallax effect for hero background
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.gradient-orb');
        
        parallaxElements.forEach((element, index) => {
            const speed = 0.5 + (index * 0.1);
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
    
    // Animate stats on scroll
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateStats();
            }
        });
    }, { threshold: 0.5 });
    
    const statsSection = document.querySelector('.hero-stats');
    if (statsSection) {
        statsObserver.observe(statsSection);
    }
}

function animateStats() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach(stat => {
        const target = stat.textContent;
        const isPercentage = target.includes('%');
        const isNumber = target.includes('+');
        
        let finalValue = target;
        if (isPercentage) {
            finalValue = target.replace('%', '');
        } else if (isNumber) {
            finalValue = target.replace('+', '');
        }
        
        if (!isNaN(finalValue)) {
            animateNumber(stat, 0, parseInt(finalValue), 2000, isPercentage, isNumber);
        }
    });
}

function animateNumber(element, start, end, duration, isPercentage, isNumber) {
    const startTime = performance.now();
    
    function updateNumber(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const current = Math.floor(start + (end - start) * progress);
        let displayValue = current.toString();
        
        if (isPercentage) {
            displayValue += '%';
        } else if (isNumber) {
            displayValue += '+';
        }
        
        element.textContent = displayValue;
        
        if (progress < 1) {
            requestAnimationFrame(updateNumber);
        }
    }
    
    requestAnimationFrame(updateNumber);
}

// Utility functions
function showChangelog() {
    if (latestRelease) {
        const changelog = latestRelease.body || 'No changelog available for this release.';
        alert(`Changelog for ${latestRelease.tag_name}:\n\n${changelog}`);
    } else {
        alert('Please wait while we fetch the latest release information...');
    }
}

function showPrivacy() {
    alert('Privacy Policy:\n\nCurrenSee Pro respects your privacy. We do not collect, store, or transmit any personal information. All currency conversions are performed locally on your device. Exchange rates are fetched from reliable sources but are used for informational purposes only.');
}

// Error handling
window.addEventListener('error', (e) => {
    console.error('Global error:', e.error);
});

// Service Worker registration (for PWA features)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// Performance monitoring
window.addEventListener('load', () => {
    // Log performance metrics
    if ('performance' in window) {
        const perfData = performance.getEntriesByType('navigation')[0];
        console.log('Page load time:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
    }
});

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + K to focus search (if implemented)
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        // Focus search functionality could be added here
    }
    
    // Escape to close mobile menu
    if (e.key === 'Escape') {
        navMenu.classList.remove('active');
    }
});

// Export functions for global access
window.CurrenSeePro = {
    toggleTheme,
    fetchLatestRelease,
    showChangelog,
    showPrivacy
};
