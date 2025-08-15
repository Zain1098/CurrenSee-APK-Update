// CurrenSee Pro Landing Page Configuration
// Update these values to customize your landing page

window.CURRENSEE_CONFIG = {
    // GitHub Repository Settings
    github: {
        username: 'Zain1098', // Replace with your GitHub username
        repository: 'CurrenSee-APK-Update', // Replace with your repository name
        apiUrl: 'https://api.github.com/repos/Zain1098/CurrenSee-APK-Update/releases/latest'
    },

    // App Information
    app: {
        name: 'CurrenSee Pro',
        tagline: 'Premium Currency Converter',
        description: 'The ultimate currency converter app with real-time rates, offline support, and beautiful design.',
        version: '1.0.0'
    },

    // Contact Information
    contact: {
        email: 'support@currensee-pro.com',
        website: 'https://currensee-pro.com',
        github: 'https://github.com/Zain1098/CurrenSee-APK-Update',
        issues: 'https://github.com/Zain1098/CurrenSee-APK-Update/issues'
    },

    // Social Media
    social: {
        twitter: 'https://twitter.com/currensee_pro',
        facebook: 'https://facebook.com/currensee.pro',
        instagram: 'https://instagram.com/currensee_pro'
    },

    // Features Configuration
    features: [
        {
            icon: 'fas fa-bolt',
            title: 'Lightning Fast',
            description: 'Instant currency conversions with real-time exchange rates updated every minute.'
        },
        {
            icon: 'fas fa-wifi-slash',
            title: 'Offline Support',
            description: 'Convert currencies even without internet connection using cached rates.'
        },
        {
            icon: 'fas fa-palette',
            title: 'Beautiful Design',
            description: 'Modern Material Design with smooth animations and intuitive interface.'
        },
        {
            icon: 'fas fa-chart-line',
            title: 'Rate History',
            description: 'Track exchange rate trends with interactive charts and historical data.'
        },
        {
            icon: 'fas fa-globe',
            title: '150+ Currencies',
            description: 'Support for major and minor world currencies with accurate rates.'
        },
        {
            icon: 'fas fa-shield-alt',
            title: 'Privacy First',
            description: 'Your data stays on your device. No personal information is collected.'
        }
    ],

    // Statistics
    stats: [
        {
            number: '150+',
            label: 'Currencies'
        },
        {
            number: '24/7',
            label: 'Updates'
        },
        {
            number: '100%',
            label: 'Offline'
        }
    ],

    // Colors (CSS Variables)
    colors: {
        primary: '#6366f1',
        primaryDark: '#4f46e5',
        secondary: '#8b5cf6',
        accent: '#06b6d4',
        success: '#10b981',
        warning: '#f59e0b',
        error: '#ef4444'
    },

    // Analytics
    analytics: {
        googleAnalytics: 'GA_MEASUREMENT_ID', // Replace with your GA ID
        googleTagManager: 'GTM_XXXXXXX' // Replace with your GTM ID
    },

    // SEO
    seo: {
        title: 'CurrenSee Pro - Premium Currency Converter',
        description: 'The ultimate currency converter app with real-time rates, offline support, and beautiful design.',
        keywords: 'currency converter, exchange rates, Flutter app, CurrenSee Pro, mobile app',
        author: 'CurrenSee Pro',
        ogImage: './assets/og-image.png'
    },

    // PWA Settings
    pwa: {
        name: 'CurrenSee Pro - Premium Currency Converter',
        shortName: 'CurrenSee Pro',
        description: 'The ultimate currency converter app with real-time rates, offline support, and beautiful design.',
        themeColor: '#6366f1',
        backgroundColor: '#ffffff',
        display: 'standalone',
        orientation: 'portrait-primary'
    },

    // Content
    content: {
        hero: {
            title: 'Convert Currencies with',
            titleHighlight: 'Precision & Style',
            description: 'Experience the most beautiful and accurate currency converter app. Get real-time exchange rates, offline support, and a premium user experience.',
            badge: 'Premium Currency Converter'
        },
        features: {
            title: 'Why Choose CurrenSee Pro?',
            subtitle: 'Built with Flutter for exceptional performance and beautiful design'
        },
        download: {
            title: 'Ready to Get Started?',
            description: 'Download CurrenSee Pro now and experience the best currency converter app available.',
            buttonText: 'Download Latest APK',
            benefits: [
                'Free to download',
                'No ads or tracking',
                'Regular updates'
            ]
        },
        footer: {
            description: 'The ultimate currency converter app built with Flutter for exceptional performance and beautiful design.',
            copyright: '© 2024 CurrenSee Pro. Built with ❤️ using Flutter.'
        }
    },

    // Animation Settings
    animations: {
        enabled: true,
        duration: 600,
        easing: 'ease',
        staggerDelay: 100
    },

    // Performance Settings
    performance: {
        lazyLoading: true,
        preloadCritical: true,
        cacheStrategy: 'stale-while-revalidate'
    }
};

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = window.CURRENSEE_CONFIG;
}
