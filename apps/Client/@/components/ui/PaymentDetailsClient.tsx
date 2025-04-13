"use client"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Check } from "lucide-react"

interface PaymentDetailsProps {
  baseAmount: number
  planName: string
  addOns: { name: string; price: number }[]
}

export default function PaymentDetailsClient({ baseAmount, planName, addOns = [] }: PaymentDetailsProps) {
  const [selectedAddOns, setSelectedAddOns] = useState<Set<number>>(new Set())
  const [totalPrice, setTotalPrice] = useState(baseAmount)
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly")

  // Calculate total add-ons price
  const totalAddOns = Array.from(selectedAddOns).reduce((sum, index) => sum + (addOns[index]?.price ?? 0), 0)

  // Update total price when selections change
  useEffect(() => {
    const baseWithDiscount = billingCycle === "yearly" ? baseAmount * 0.9 : baseAmount
    setTotalPrice(baseWithDiscount + totalAddOns)
  }, [baseAmount, totalAddOns, billingCycle])

  const toggleAddOn = (index: number) => {
    const newSelected = new Set(selectedAddOns)
    if (newSelected.has(index)) {
      newSelected.delete(index)
    } else {
      newSelected.add(index)
    }
    setSelectedAddOns(newSelected)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-[#0c0c0c] border border-zinc-800 rounded-xl p-6 h-fit lg:sticky lg:top-8 text-zinc-200"
    >
      <h2 className="text-xl font-semibold mb-6 text-white">Payment Details</h2>

      {/* Billing toggle */}
      <div className="flex items-center justify-center mb-8 space-x-4">
        <span className={`text-sm ${billingCycle === "monthly" ? "text-white" : "text-zinc-500"}`}>Monthly</span>
        <button
          onClick={() => setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly")}
          className="relative inline-flex h-6 w-11 items-center rounded-full bg-zinc-800"
        >
          <span className="sr-only">Toggle billing cycle</span>
          <span
            className={`${
              billingCycle === "yearly" ? "translate-x-6" : "translate-x-1"
            } inline-block h-4 w-4 transform rounded-full bg-white/60 transition-transform`}
          />
        </button>
        <span className={`text-sm ${billingCycle === "yearly" ? "text-white" : "text-zinc-500"}`}>
          Yearly <span className="text-xs text-white">(Save up to 10%)</span>
        </span>
      </div>

      <div className="space-y-5">
        <div className="flex justify-between items-center">
          <span className="text-zinc-400">Base Plan - {planName}</span>
          <span className="font-medium">
            ${billingCycle === "yearly" ? (baseAmount * 0.9).toFixed(2) : baseAmount.toFixed(2)}
          </span>
        </div>

        {addOns.length > 0 && (
          <div className="space-y-3 pt-2">
            <h3 className="text-sm font-medium text-zinc-300">Add-Ons</h3>
            {addOns.map((addon, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => toggleAddOn(index)}
                    className={`h-5 w-5 rounded flex items-center cursor-pointer justify-center ${
                      selectedAddOns.has(index) ? "bg-white text-black" : "border border-zinc-700"
                    }`}
                  >
                    {selectedAddOns.has(index) && <Check size={14} />}
                  </button>
                  <span className="text-sm text-zinc-400">{addon.name}</span>
                </div>
                <span className="text-sm">${addon.price.toFixed(2)}</span>
              </div>
            ))}
          </div>
        )}

        <div className="border-t border-zinc-800 my-4 pt-4"></div>

        <div className="flex justify-between font-semibold">
          <span>Total Amount</span>
          <span className="text-white">${totalPrice.toFixed(2)}</span>
        </div>

        <button className="w-full py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all hover:opacity-90 mt-6 font-medium">
          Proceed to checkout
        </button>
      </div>
    </motion.div>
  )
}
