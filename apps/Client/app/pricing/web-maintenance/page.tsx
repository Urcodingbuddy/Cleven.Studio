

import PricingLayout from "../../../@/components/ui/pricing-layout";


const plans = [
  {
    name: "Basic",
    price: "$59/month",
    features: [
      "Website Health Check",
      "Backup Services",
      "Content Updates",
      "Support: Unlimited email and chat support, plus 2 hours of call support",
      "Bug Fixing Minor fixes",
      "Basic Security Monitoring",
      "Basic SEO Review: Monthly review of SEO status with simple suggestions",
    ],
  },
  {
    name: "Standard Plan",
    price: "$79/month",
    features: [
      "Bi-Weekly Website Health Check",
      "Backup Services: Bi-weekly backups with automated recovery",
      "Content Updates",
      "Support: Unlimited email/chat support, plus 6 hours of call support",
      "Priority Bug Fixing & Debugging",
      "Performance Optimization: Speed improvements (caching, image compression)",
      "Enhanced Security Monitoring: Regular malware checks and patching",
      "Monthly Performance Report",
      "Basic SEO Optimization",
      "Uptime Monitoring: 24/7 website uptime monitoring",
    ],
    featured: true,
  },
  {
    name: "Premium",
    price: "$99/month",
    features: [
      "Weekly Website Health Check",
      "Backup Services: Weekly backups with automatic failover",
      "Content Updates",
      "Support: Unlimited email/chat support and 10 hours of call support",
      "Advanced Bug Fixing & Debugging",
      "Advanced Performance Optimization: Database cleaning, advanced caching, CDN integration",
      "Security Monitoring & Protection: Firewall setup, regular malware scans, and advanced protection",
      "SEO Improvements: On-page SEO updates, meta tags, keyword optimization",
      "Uptime Monitoring",
      "Quarterly Strategy Consultation: 1-hour consultation to review website performance and plan future improvements",
    ],
  },
];

export default function Home() {
  return  <PricingLayout title="Web Maintenance" plans={plans} />
}

