export type Plan = {
    category: string;
    plan: string;
    name: string;
    monthlyPrice: string;
    yearlyPrice : string;
    features: string[];
    slug: string;
  };
  
  export const plans: Plan[] = [
    {
      category: 'bug-fixing',
      plan: 'basic',
      name: 'Basic',
      monthlyPrice: '$59/month',
      yearlyPrice : '$632/year',
      slug: 'bug-fixing-basic',
      features: [
        'Site Wellness Check',
        'Secure Backups',
        'Content Updates',
        'Support',
        'Bug Fixing',
        'Basic Security Monitoring',
        'Basic SEO Review',
      ],
    },
    {
      category: 'bug-fixing',
      plan: 'standard',
      name: 'Standard',
      monthlyPrice: '$79/month',
      yearlyPrice : '$853/year',
      slug: 'bug-fixing-standard',
      features: [
        'Bi-Weekly Website Health Check',
        'Backup Services',
        'Content Updates',
        'Support',
        'Priority Bug Fixing & Debugging',
        'Performance Optimization',
        'Enhanced Security Monitoring',
        'Monthly Performance Report',
        'Basic SEO Optimization',
        'Uptime Monitoring',
      ],
    },
    {
      category: 'bug-fixing',
      plan: 'premium',
      name: 'Premium',
      monthlyPrice: '$99/month',
      yearlyPrice : '$1069/year',
      slug: 'bug-fixing-premium',
      features: [
        'Bi-Weekly Website Health Check',
        'Backup Services',
        'Content Updates',
        'Support',
        'Advanced Bug Fixing & Debugging',
        'Advanced Performance Optimization',
        'Security Monitoring & Protection',
        'SEO Improvements',
        'Uptime Monitoring',
        'Quarterly Strategy Consultation',
      ],
    },
    // More plans (MVP, Web Maintenance, etc.) can be added
  ];