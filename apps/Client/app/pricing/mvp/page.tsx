import PricingLayout, { PricingPlan } from "../../../@/components/ui/pricing-layout";

export default function Mvp() {

    const plans: PricingPlan[] = [
        {
          name: "Starter",
          price: "$499/month",
          yearlyPrice: "$4,491/year",
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
          name: "Professional",
          price: "$999/month",
          yearlyPrice: "$8,991/year",
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
          featured: true,
        },
        {
          name: "Enterprise",
          price: "$1,999/month",
          yearlyPrice: "$17,991/year",
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

    return <PricingLayout title="Minimum Viable Product" plans={plans} />
}