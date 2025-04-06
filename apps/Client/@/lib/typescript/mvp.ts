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
        category: 'mvp',
        name: "Basic",
        plan : 'basic',
        monthlyPrice: "$499/month",
        yearlyPrice: "$4,491/year",
        slug : 'mvp-basic',
        features: [
            "Custom Landing Page",
            "Basic Branding",
            "Contact Form",
            "Mobile Responsive",
            "1 Week Delivery",
            "30 Days Support",
        ],
    },
    {
        category : 'mvp',
        name: "Professional",
        plan : 'mvp-standard',
        monthlyPrice: "$999/month",
        yearlyPrice: "$8,991/year",
        slug : 'mvp-standard',
        features: [
            "5 Page Website",
            "Professional Branding",
            "Contact Form & Newsletter",
            "Mobile Responsive",
            "SEO Optimization",
            "2 Weeks Delivery",
            "60 Days Support",
            "Analytics Integration",
        ],
    },
    {
        category : 'mvp',
        name: "Enterprise",
        plan : 'standard',
        monthlyPrice : "$1,999/month",
        yearlyPrice: "$17,991/year",
        slug : 'mvp-premium',
        features: [
            "10+ Page Website",
            "Premium Branding",
            "Advanced Forms & Integrations",
            "Mobile Responsive",
            "Advanced SEO Optimization",
            "E-commerce Functionality",
            "3 Weeks Delivery",
            "90 Days Support",
            "Analytics & Reporting",
            "Custom Features",
        ],
    },
]
