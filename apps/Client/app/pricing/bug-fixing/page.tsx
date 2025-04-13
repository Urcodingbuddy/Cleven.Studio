import PricingLayout, { PricingPlan } from '../../../@/components/ui/pricing-layout';

export default function WebMaintenance() {

  const plans: PricingPlan[] = [
    {
      name: "Basic",
      price: "$59/month",
      features: [
        "Site Wellness Check",
        "Secure Backups", 
        "Content Updates",
        "Support",
        "Bug Fixing",
        "Basic Security Monitoring",
        "Basic SEO Review",
      ],
      buttonVariant: "outline" as const
    },
    {
      name: "Standard", 
      price: "$79/month",
      features: [
        "Bi-Weekly Website Health Check",
        "Backup Services",
        "Content Updates", 
        "Support",
        "Priority Bug Fixing & Debugging",
        "Performance Optimization",
        "Enhanced Security Monitoring",
        "Monthly Performance Report",
        "Basic SEO Optimization",
        "Uptime Monitoring",
      ],
      buttonVariant: "default" as const,
      featured: true
    },
    {
      name: "Premium",
      price: "$99/month",  
      features: [
        "Bi-Weekly Website Health Check",
        "Backup Services",
        "Content Updates",
        "Support", 
        "Advanced Bug Fixing & Debugging",
        "Advanced Performance Optimization",
        "Security Monitoring & Protection",
        "SEO Improvements",
        "Uptime Monitoring",
        "Quarterly Strategy Consultation",
      ],
      buttonVariant: "outline" as const
    },
  ];

  return <PricingLayout title="Bug Fixing" plans={plans} />
}