"use client"
import { useState} from "react"
import { motion } from "framer-motion"
import { Check } from "lucide-react"

interface PaymentDetailsProps {
  baseAmount: number
  planName: string
  addOns: { name: string; price: number }[]
}

export default function PaymentDetailsClient({ baseAmount, planName, addOns }: PaymentDetailsProps) {
  const [selectedAddOns, setSelectedAddOns] = useState<Set<number>>(new Set())
  const [totalPrice, setTotalPrice] = useState(baseAmount)
 

  // Calculate total add-ons price
  const totalAddOns = Array.from(selectedAddOns).reduce((sum, index) => sum + (addOns[index]?.price ?? 0), 0)
  const total = baseAmount + totalAddOns

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
     

      <div className="space-y-5">
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
          <span>Total Amount - monthly </span>
          <span className="text-white">${totalPrice.toFixed(2)}</span>
        </div>

        <button className="w-full py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all hover:opacity-90 mt-6 font-medium">
          Proceed to checkout
        </button>
      </div>
    </motion.div>
  )
}
