"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function CheckoutPage({ params }: { params: { plan: string; tier: string } }) {
  const { plan, tier } = params;
  const [addons, setAddons] = useState([
    { name: "Custom Code Maintenance", price: 15 },
    { name: "SEO Optimization", price: 20 },
    { name: "Security Enhancement", price: 25 },
  ]);
  
  return (
    <div>
      <h1 className="text-2xl font-bold">Checkout - {plan.replace('-', ' ')} ({tier})</h1>
      <p className="text-lg mt-4">Base Price: [Retrieve from plans]</p>
      
      <div className="mt-6">
        <h2 className="text-xl font-semibold">Add-ons</h2>
        <ul>
          {addons.map((addon, index) => (
            <li key={index} className="flex justify-between p-2 border-b">
              <span>{addon.name}</span>
              <span>${addon.price}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded">Proceed to Payment</button>
    </div>
  );
}