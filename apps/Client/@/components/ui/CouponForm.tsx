"use client";
import { useState } from "react";

export default function CouponForm ()  {
  const [coupon, setCoupon] = useState('');

  return (
    <div className="flex flex-col sm:flex-row gap-2 mt-4">
      <input
        type="text"
        placeholder="Enter coupon code"
        value={coupon}
        onChange={(e) => setCoupon(e.target.value)}
        className="w-full flex-1 px-4 py-2 rounded-lg bg-zinc-800 text-white text-sm sm:text-base"
      />
      <button 
        onClick={() => console.log('Applying coupon:', coupon)}
        className="w-full sm:w-auto px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors text-sm sm:text-base"
      >
        Apply Coupon
      </button>
    </div>
  );
};
