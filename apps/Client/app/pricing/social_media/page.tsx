import PricingLayout from "../../../@/components/ui/pricing-layout";

const plans = [
  {
    name: "Basic",
    price: "$19/One-time-payment",
    yearlyPrice: "$205.2/year",
    features: [
      "Linking 2 social media accounts (e.g., Facebook, Instagram) to the website",
      "Basic social media sharing buttons",
      "Monthly performance report (1 page)",
      "Small Service 1: Basic social media profile optimization tips",
      "Small Service 2: 1 social media post suggestion per week (text only)",
    ],
  },
  {
    name: "Standard Plan",
    price: "$39/one-time-payment",
    yearlyPrice: "$421.2/year",
    features: [
      "Linking up to 4 social media accounts (e.g., Facebook, Instagram, Twitter, LinkedIn)",
      "Customised social media sharing buttons",
      "Basic social media feed integration on the website",
      "Bi-weekly performance report (2 pages)",
      "Social Media Calendar: A monthly content calendar with post ideas tailored for the client’s brand",
      "Engagement Tracking: Monitoring engagement metrics (likes, shares, comments) for the linked accounts",
    ],
    featured: true,
  },
  {
    name: "Premium",
    price: "$59/one-time-payment",
    yearlyPrice: "$632.7/year",
    features: [
      "Linking up to 6 social media accounts",
      "Advanced social media sharing buttons (including custom designs)",
      "Live social media feed integration on the website",
      "Monthly performance report with analytics and insights (3 pages)",
      "One consultation call per month for strategy improvement",
      "Social Media Advertising Setup: Assistance with setting up targeted ad campaigns on one social media platform",
      "Content Creation: Up to 4 custom graphics/posts per month for social media promotion",
      "Social Media Trend Analysis: Monthly report on the latest trends and how they can be applied to the client’s strategy",
      "Competitor Benchmarking: Analysis of 1-2 competitor social media strategies to identify areas of improvement.",
      "Crisis Management Support: Guidance on handling negative feedback or comments on social media.",
    ],
  },
];

export default function Home() {
  return <PricingLayout title="Pricing" plans={plans} />;
}
