"use client";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

const availableAddOns = [
    { name: "Extra Security", price: 10 },
    { name: "Faster Support", price: 20 },
    { name: "Additional Storage", price: 15 },
];

export default function CheckoutPage() {
    const searchParams = useSearchParams();
    const selectedPlan = searchParams.get("plan");
    const selectedPrice = parseFloat((searchParams.get("price") || "0").replace("$", "")) || 0;
    
    const [selectedAddOns, setSelectedAddOns] = useState<{ name: string; price: number }[]>([]);

    const toggleAddOn = (addOn : any) => {
        if (selectedAddOns.includes(addOn)) {
            setSelectedAddOns(selectedAddOns.filter(item => item !== addOn));
        } else {
            setSelectedAddOns([...selectedAddOns, addOn]);
        }
    };

    const totalAmount = selectedPrice + selectedAddOns.reduce((sum, addOn) => sum + addOn.price, 0);

    return (
        <div>
            <h1>Checkout</h1>
            <h2>Selected Plan: {selectedPlan}</h2>
            <p>Base Price: ${selectedPrice.toFixed(2)}</p>

            <h3>Suggested Add-ons</h3>
            {availableAddOns.map((addOn) => (
                <div key={addOn.name}>
                    <input 
                        type="checkbox" 
                        onChange={() => toggleAddOn(addOn)} 
                        checked={selectedAddOns.includes(addOn)}
                    />
                    <label>{addOn.name} - ${addOn.price}</label>
                </div>
            ))}

            <h3>Total: ${totalAmount.toFixed(2)}</h3>
            <button onClick={() => processPayment({ amount: totalAmount, plan: selectedPlan, addOns: selectedAddOns })}>Checkout</button>
        </div>
    );
}

const processPayment = ( { amount, plan, addOns } : any)  => {
    // Redirect to Stripe payment page
    fetch("/api/checkout", {
        method: "POST",
        body: JSON.stringify({ amount, plan, addOns }),
        headers: { "Content-Type": "application/json" },
    })
    .then(res => res.json())
    .then(data => {
        window.location.href = data.sessionUrl;
    });
};
