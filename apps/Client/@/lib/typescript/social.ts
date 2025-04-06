export type Plan = {
    category: string;
    plan: string;
    name: string;
    monthlyPrice: string;
    yearlyPrice: string;
    features: string[];
    slug: string;
};

const plans: Plan[] = [
    {
        category: 'social-media-integration',
        name: "Basic",
        plan : 'basic',
        monthlyPrice: "$29/month",
        slug : 'social-media-integration-basic',
        yearlyPrice: "$313.2/year",
        features: [
            "Image optimization (compression and resizing)",
            "Minification of CSS and JavaScript files",
            "Browser caching setup",
            "Basic speed audit with recommendations",
            "New: Setup of basic SEO optimizations (like meta tags and alt attributes for images)",
            "Basic - Performance Dashboard",
            "New: Removal of unnecessary plugins or scripts (if applicable) to enhance loading speed",
        ],
    },
    {
        category : 'socail-media-integration',
        name: "Standard Plan",
        plan : 'social-media-integration',
        monthlyPrice: "$49/month",
        yearlyPrice: "$529.2/year",
        slug : 'social-media-integration-basic',
        features: [
            "All features of the Basic Plan",
            "Advanced speed audit with detailed analysis",
            "Database optimization",
            "Lazy loading of images",
            "Backup service - monthly",
            "GZIP compression setup ",
            "External script deferring (reduces render-blocking)",
            "Monthly performance check and tweaks for 1 month",
            "Removal of redundant third-party scripts",
            "Advance Performance Dashboard ",
            "Integration of caching plugins or server-side caching setup",
            "CSS and JS code splitting for better load times",
        ],
    },
    {
        category : 'socail-media-integration',
        name: "Premium",
        plan : 'premium',
        monthlyPrice: "$79/month",
        yearlyPrice: "$853.2/year",
        slug : 'social-media-integration-basic',
        features: [
            "All features of the Standard + Basic Plan",
            "CDN integration",
            "Server-side optimization (tuning of web server settings)",
            "Removal of unused CSS/JavaScript",
            "Backups Services - monthly",
            "Optimization of third-party integrations (ads, social media plugins)",
            "priority support for 2 months with performance monitoring",
            "dvanced database indexing and query optimization",
            "Advance Performance Dashboard",
            "Server log monitoring for performance bottlenecks",
            "Real-time performance alerts",
            "WebP image conversion",
            "Custom performance reporting",
            "Quarterly Strategy Consultation: 1-hour consultation to review website performance and plan future improvements",
        ],
    },
];