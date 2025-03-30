"use client";
import { useState } from "react";

const addonsList = [
  { name: "Custom Code Maintenance", price: 15 },
  { name: "SEO Optimization", price: 20 },
  { name: "Security Enhancement", price: 25 },
];

export default function Addons({ selectedAddons, setSelectedAddons }: { selectedAddons: any; setSelectedAddons: any }) {
  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold">Add-ons</h2>
      <ul>
        {addonsList.map((addon) => (
          <li key={addon.name} className="flex justify-between p-2 border-b">
            <label>
              <input
                type="checkbox"
                checked={selectedAddons.includes(addon.name)}
                onChange={() => {
                  setSelectedAddons((prev: any) =>
                    prev.includes(addon.name) ? prev.filter((a: any) => a !== addon.name) : [...prev, addon.name]
                  );
                }}
              />
              {addon.name}
            </label>
            <span>${addon.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
