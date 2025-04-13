"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface AddOn {
  name: string;
  price: number;
}

interface AddOnsClientProps {
  addOns: AddOn[];
  baseAmount: number;
}

export default function AddOnsClient({ addOns, baseAmount }: AddOnsClientProps): JSX.Element {
  const [selectedAddOns, setSelectedAddOns] = useState<Set<number>>(new Set<number>());

  const toggleAddOn = (index: number): void => {
    const newSelected = new Set(selectedAddOns);
    if (newSelected.has(index)) {
      newSelected.delete(index);
    } else {
      newSelected.add(index);
    }
    setSelectedAddOns(newSelected);~~
  };

  return (
    <div className="bg-zinc-900 rounded-xl sm:rounded-2xl p-4 sm:p-6">
      <h2 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Add-on</h2>
      <div className="space-y-3 sm:space-y-4">
        {addOns.map((addon, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`flex flex-col sm:flex-row sm:items-center justify-between p-3 sm:p-4 rounded-lg cursor-pointer transition-colors ${
              selectedAddOns.has(index) ? "bg-zinc-800" : "hover:bg-zinc-800"
            }`}
            onClick={() => toggleAddOn(index)}
          >
            <div className="flex items-center gap-3 mb-2 sm:mb-0">
              <CheckCircle2 
                className={`w-5 h-5 flex-shrink-0 ${
                  selectedAddOns.has(index) ? "text-emerald-500" : "text-zinc-600"
                }`}
              />
              <span className="text-sm sm:text-base">{addon.name}</span>
            </div>
            <span className="text-sm sm:text-base ml-8 sm:ml-0">+${addon.price.toFixed(2)}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}