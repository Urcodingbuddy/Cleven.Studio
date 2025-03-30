"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface AddOn {
  name: string;
  price: number;
}

const addOns: AddOn[] = [
  { name: "Custom Code Maintenance", price: 15 },
  { name: "Extra Security Check", price: 20 },
];

// Plan Mapping
const plans = {
  "bug-fixing-basic": { name: "Bug Fixing - Basic", price: 59 },
  "bug-fixing-standard": { name: "Bug Fixing - Standard", price: 79 },
  "bug-fixing-premium": { name: "Bug Fixing - Premium", price: 99 },
} as const;

export default function CheckoutPage({ params }: { params: { plan: keyof typeof plans } }) {
  const router = useRouter();
  const [selectedAddOns, setSelectedAddOns] = useState<AddOn[]>([]);
  const [total, setTotal] = useState(0);

  const selectedPlan = plans[params.plan as keyof typeof plans];

  useEffect(() => {
    if (!selectedPlan) router.push("/pricing");
    setTotal(selectedPlan?.price || 0);
  }, [selectedPlan, router]);

  // Handle Add-on Selection
  const toggleAddOn = (addOn: AddOn) => {
    const isSelected = selectedAddOns.some((a) => a.name === addOn.name);
    if (isSelected) {
      setSelectedAddOns(selectedAddOns.filter((a) => a.name !== addOn.name));
      setTotal(total - addOn.price);
    } else {
      setSelectedAddOns([...selectedAddOns, addOn]);
      setTotal(total + addOn.price);
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-semibold">{selectedPlan?.name}</h1>
      <p className="mt-2 text-lg">Base Price: ${selectedPlan?.price}</p>

      <h2 className="mt-6 text-xl font-semibold">Add-Ons</h2>
      <div className="mt-4 space-y-2">
        {addOns.map((addOn) => (
          <label key={addOn.name} className="flex items-center gap-4">
            <input
              type="checkbox"
              onChange={() => toggleAddOn(addOn)}
              checked={selectedAddOns.some((a) => a.name === addOn.name)}
            />
            {addOn.name} - ${addOn.price}
          </label>
        ))}
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold">Total: ${total}</h2>
      </div>

      <button
        onClick={() => alert("Checkout Process...")}
        className="mt-6 bg-green-600 text-white px-6 py-2 rounded-lg"
      >
        Proceed to Payment
      </button>
    </div>
  );
}
