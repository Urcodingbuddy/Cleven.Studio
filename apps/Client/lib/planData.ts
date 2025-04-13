
export interface Plan {
  category: string;
  plan: string;
  features: string[];
  price: number;
  slug : string
}

export const plans: Plan[] = [
  {
    category: 'bug-fixing',
    plan: 'basic',
    price: 59,
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
    price:79,
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
    price: 99,
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
