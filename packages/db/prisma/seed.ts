import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.plan.createMany({
    data: [
      {
        name: "Bug Fixing Basic",
        category: "bug-fixing",
        slug: "bug-fixing-basic",
        price: 49,
        feature: [
          "Up to 7 bug fixes per month",
          "Basic troubleshooting (response within 24 hours)",
          "Monthly report on issues resolved",
          "Basic performance check",
          "1 minor feature update"
        ]
      },
      {
        name: "Bug Fixing Standard",
        category: "bug-fixing",
        slug: "bug-fixing-standard",
        price: 69,
        feature: [
          "Up to 15 bug fixes per month",
          "Priority troubleshooting (response within 12 hours)",
          "Monthly report with insights on recurring issues",
          "Minor code optimizations (up to 2 hours)",
          "Website Health Check (quarterly)",
          "1 Major Feature Update (up to 3 hours)"
        ]
      },
      {
        name: "Bug Fixing Premium",
        category: "bug-fixing",
        slug: "bug-fixing-premium",
        price: 89,
        feature: [
          "Unlimited bug fixes per month",
          "24/7 troubleshooting support",
          "Minor code optimizations (up to 3 hours)",
          "Monthly strategy session",
          "Website Health Check (monthly)",
          "2 Major Feature Updates (up to 6 hours)",
          "Performance Optimization Report"
        ]
      },
      {
        name: "Web Maintenance Basic",
        category: "web-maintenance",
        slug: "web-maintenance-basic",
        price: 59,
        feature: [
          "Monthly Website Health Check",
          "Monthly Backups",
          "Content Updates",
          "Unlimited email/chat + 2 hrs call support",
          "Minor bug fixes",
          "Basic Security Monitoring",
          "Basic SEO Review"
        ]
      },
      {
        name: "Web Maintenance Standard",
        category: "web-maintenance",
        slug: "web-maintenance-standard",
        price: 79,
        feature: [
          "Bi-Weekly Health Check",
          "Bi-weekly Backups",
          "Content Updates",
          "Unlimited email/chat + 6 hrs call support",
          "Priority Bug Fixing",
          "Performance Optimization",
          "Enhanced Security Monitoring",
          "Uptime Monitoring",
          "Monthly Performance Report",
          "Basic SEO Optimization"
        ]
      },
      {
        name: "Web Maintenance Premium",
        category: "web-maintenance",
        slug: "web-maintenance-premium",
        price: 99,
        feature: [
          "Weekly Health Check",
          "Weekly Backups with failover",
          "Weekly Content Updates",
          "Unlimited email/chat + 10 hrs call support",
          "Advanced Bug Fixing",
          "Advanced Optimization",
          "SEO Improvements",
          "Security Protection",
          "Quarterly Strategy Call"
        ]
      },
      {
        name: "Content Update Basic",
        category: "content-update",
        slug: "content-update-basic",
        price: 39,
        feature: [
          "20 product updates/month",
          "Monthly backup",
          "2 minor design tweaks/month",
          "Monthly content engagement report",
          "Email support"
        ]
      },
      {
        name: "Content Update Standard",
        category: "content-update",
        slug: "content-update-standard",
        price: 59,
        feature: [
          "100 product updates/month",
          "SEO integrated updates",
          "Content calendar (quarterly)",
          "1 blog post (500 words)",
          "2 graphics/month",
          "Social sharing on 2 platforms",
          "Priority support"
        ]
      },
      {
        name: "Content Update Premium",
        category: "content-update",
        slug: "content-update-premium",
        price: 79,
        feature: [
          "Unlimited product updates",
          "2 blog posts/month",
          "SEO Optimization",
          "Visual updates (4 graphics/month)",
          "Dedicated content manager",
          "Strategic content calendar",
          "Priority support (12h response)"
        ]
      },
      {
        name: "Speed Optimization Basic",
        category: "speed-optimization",
        slug: "speed-optimization-basic",
        price: 29,
        feature: [
          "Image optimization",
          "CSS/JS minification",
          "Browser caching",
          "Basic speed audit",
          "SEO meta tags",
          "Performance Dashboard"
        ]
      },
      {
        name: "Speed Optimization Standard",
        category: "speed-optimization",
        slug: "speed-optimization-standard",
        price: 49,
        feature: [
          "Everything in Basic",
          "Advanced audit",
          "Database optimization",
          "Lazy loading",
          "GZIP compression",
          "Monthly tweaks",
          "Script deferring",
          "Advanced Dashboard"
        ]
      },
      {
        name: "Speed Optimization Premium",
        category: "speed-optimization",
        slug: "speed-optimization-premium",
        price: 79,
        feature: [
          "Everything in Standard",
          "CDN integration",
          "Unused CSS/JS cleanup",
          "Real-time performance alerts",
          "Advanced database indexing",
          "Custom performance reporting"
        ]
      },
      {
        name: "MVP Basic",
        category: "mvp",
        slug: "mvp-basic",
        price: 79,
        feature: [
          "Basic UI/UX with 1 revision",
          "Up to 4 features",
          "Basic backend with static data",
          "Single platform",
          "Manual testing",
          "Deployment to Netlify/Vercel"
        ]
      },
      {
        name: "MVP Standard",
        category: "mvp",
        slug: "mvp-standard",
        price: 129,
        feature: [
          "Custom UI/UX with 2 revisions",
          "Up to 8 features",
          "Full-stack with DB (Laravel/MySQL)",
          "Multi-platform support",
          "API integration",
          "Post-launch support (1 month)",
          "Google Analytics"
        ]
      },
      {
        name: "MVP Premium",
        category: "mvp",
        slug: "mvp-premium",
        price: 179,
        feature: [
          "Advanced UI/UX (3 revisions)",
          "Up to 12 features",
          "Advanced backend + DB",
          "Multi-platform responsive",
          "Advanced API integration",
          "Performance optimization",
          "3-month post launch support",
          "Full documentation"
        ]
      }
    ]
  })

  console.log("✅ Seed data inserted successfully!")
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(() => {
    prisma.$disconnect()
  })
