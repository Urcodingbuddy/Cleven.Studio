"use client";
import React, { useState } from "react";
import PricingLayout, { PricingPlan } from "../../../@/components/ui/pricing-layout";

export default function WebMaintenance() {
  

  const plans: PricingPlan[] = [
    {
      name: "Basic",
      price: "$39/month",
      features: [
        "Product Management (Add or update up to 20 products monthly)",
        "Backup of website content after updates (once a month)", 
        "2 minor design tweaks (like changing button colours or font sizes) per month",
        "Monthly performance report on content engagement",
        "Product Management (Add or update up to 20 products monthly)",
        "Email support for content-related queries",
      ],
      buttonVariant: "outline" as const,
    },
    {
      name: "Standard",
      price: "$59/month",
      features: [
        "Product Management (Add or update up to 100 products monthly)",
        "Monthly performance report with actionable recommendations",
        "Integration of SEO best practices for updates",
        "Social media sharing of updated content on 2 platforms",
        "Content calendar for planned updates (quarterly)",
        "1 blog post writing (up to 500 words) per month",
        "Graphic design support for visual content updates (up to 2 graphics/month)",
        "Priority email support with a response within 24 hours",
      ],
      buttonVariant: "default" as const,
      featured: true,
    },
    {
      name: "Premium", 
      price: "$79/month",
      features: [
        "Product Management (Unlimited product updates and inventory management.)",
        "Content Updates (Weekly updates on banners, promotions, and new product lines).",
        "Monthly performance report with in-depth analytics and actionable insights",
        "SEO optimization for all updates",
        "Social media promotion of updated content (up to 3 platforms)",
        "Dedicated content manager for personalised support",
        "2 blog posts writing (up to 500 words each) per month",
        "Graphic design support for visual content updates (up to 4 graphics/month)",
        "Content calendar with strategic recommendations",
        "Priority email support with a response within 12 hours",
      ],
      buttonVariant: "outline" as const,
    },
  ];

  return <PricingLayout title="Content Update" plans={plans} />
}
