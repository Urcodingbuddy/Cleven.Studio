"use client";

import { useState } from "react";

export default function BillingPage() {
  const [billingInfo, setBillingInfo] = useState({
    plan: "Pro",
    amount: "$29.99",
    nextBillingDate: "March 15, 2025",
  });

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Billing Information</h1>
      
      <div className="border border-gray-200 rounded-lg p-4">
        <p className="text-lg"><strong>Plan:</strong> {billingInfo.plan}</p>
        <p className="text-lg"><strong>Amount:</strong> {billingInfo.amount}</p>
        <p className="text-lg"><strong>Next Billing Date:</strong> {billingInfo.nextBillingDate}</p>
      </div>

      <button 
        className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Manage Subscription
      </button>
    </div>
  );
}
