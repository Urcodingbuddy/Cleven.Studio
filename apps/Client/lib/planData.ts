export type PlanDuration = 'monthly' | 'yearly';

export type Plan = {
  category: string;
  plan: string;
  name: string;
  price: {
    monthly: string;
    yearly: string;
  };
  features: string[];
  slug: string;
};

export const plans: Plan[] = [
  {
    category: 'bug-fixing',
    plan: 'basic',
    name: 'Basic',
    price: {
      monthly: '$59',
      yearly: '$632.70',
    },
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
    price: {
      monthly: '$79',
      yearly: '$846.30',
    },
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
    price: {
      monthly: '$99',
      yearly: '$1,059.30',
    },
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
];
