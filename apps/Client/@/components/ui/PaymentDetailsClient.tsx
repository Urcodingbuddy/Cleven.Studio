"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface PaymentDetailsProps {
  baseAmount: number;
  planName: string;
  addOns: { price: number }[];
}

export default function PaymentDetailsClient({ baseAmount, planName, addOns }: PaymentDetailsProps) {
  const [selectedAddOns, setSelectedAddOns] = useState<Set<number>>(new Set());
  const [totalPrice, setTotalPrice] = useState(baseAmount);

  // Calculate total add-ons price
  const totalAddOns = Array.from(selectedAddOns).reduce(
    (sum, index) => sum + (addOns[index]?.price ?? 0),
    0
  );

  // Update total price when selections change
  useEffect(() => {
    setTotalPrice(baseAmount + totalAddOns);
  }, [baseAmount, totalAddOns]);

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="bg-zinc-900 rounded-xl sm:rounded-2xl p-4 sm:p-6 h-fit lg:sticky lg:top-8"
    >
      <h2 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Payment Details</h2>
      <div className="space-y-3 sm:space-y-4">
        <div className="flex justify-between text-sm sm:text-base">
          <span className="text-zinc-400">(Base Plan - {planName})</span>
          <span>${baseAmount.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm sm:text-base">
          <span className="text-zinc-400">(Add-On)</span>
          <span>${totalAddOns.toFixed(2)}</span>
        </div>
        <div className="border-t border-zinc-700 my-3 sm:my-4"></div>
        <div className="flex justify-between font-semibold text-sm sm:text-base">
          <span>Total Amount</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>
        <button className="w-full py-2.5 sm:py-3 bg-emerald-500 rounded-lg hover:bg-emerald-600 transition-colors mt-4 sm:mt-6 text-sm sm:text-base font-medium">
          Proceed to checkout
        </button>
      </div>
    </motion.div>
  );
}