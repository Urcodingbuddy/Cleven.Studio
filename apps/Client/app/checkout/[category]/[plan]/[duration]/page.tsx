
import { plans } from '@/lib/planData';
import { notFound } from 'next/navigation';
import AddOnsClient from '@/components/ui/addOnsClient';
import PaymentDetailsClient from '@/components/ui/PaymentDetailsClient';
import CouponForm from '@/components/ui/CouponForm';
import SmoothScrollProvider  from '@repo/landing/SmoothScrollProvider';

interface AddOn {
  name: string;
  price: number;
}

interface Plan {
  category: string;
  plan: string;
  name: string;
  features: string[];
  price: {
    monthly: number;
    yearly: number;
  };
}

const addOns: AddOn[] = [
  { name: "Monthly traffic & Performance Report", price: 2.03 },
  { name: "Page speed optimization + Bug fixes", price: 5.98 },
  { name: "Image compression & lazy loading", price: 4.11 },
  { name: "New feature Request", price: 7.89 },
  { name: "New feature Product Management", price: 4.03 },
  { name: "Custom code maintenance", price: 14.99 },
  { name: "Social Media Integration", price: 7.98 }
];

// Separate CouponForm into its own component
// Main component
export default async function CheckoutPage({ params }: { 
  params: {
    category: string;
    plan: string;
    duration: 'monthly' | 'yearly';
  }
}) {
  const { category, plan, duration } = await Promise.resolve(params);

  // Find the selected plan
  const selectedPlan = plans.find(
    (p: Plan) => p.category === category && p.plan === plan
  );

  if (!selectedPlan) return notFound();

  const validDurations = ['monthly', 'yearly'] as const;
  if (!validDurations.includes(duration)) return notFound();

  const planPrice = selectedPlan.price[duration];
  const baseAmount = planPrice;

  return (
    <div className="min-h-screen bg-black text-white p-4 sm:p-6 md:p-8">
      <SmoothScrollProvider />
      <div className="max-w-6xl mx-auto">
        <div className="p-8 text-white">
          <h1 className="text-3xl font-bold mb-2">
            Checkout - {selectedPlan.category.toUpperCase()} / {selectedPlan.name} Plan ({duration})
          </h1>
          <p className="text-xl mb-4">💵 ${Number(planPrice).toFixed(2)}</p>
        </div>
        
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 md:mb-12 text-center">
          Your Plan
        </h1>
        
        <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          <div className="space-y-4 sm:space-y-6 md:space-y-8">
            <div className="bg-zinc-900 rounded-xl sm:rounded-2xl p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <div className="w-full sm:w-1/3">
                  <img
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
                    alt="Website Maintenance"
                    className="rounded-lg w-full h-48 sm:h-auto object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h2 className="text-lg sm:text-xl font-semibold mb-2">
                    Website maintenance and support
                  </h2>
                  <ul className="list-disc list-inside mt-4 mb-4 space-y-1">
                    {selectedPlan.features.map((feature: string, idx: number) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                  <CouponForm />
                </div>
              </div>
            </div>

            <AddOnsClient addOns={addOns} baseAmount={Number(baseAmount)} />
          </div>

          <PaymentDetailsClient 
            baseAmount={baseAmount} 
            planName={selectedPlan.name} 
            addOns={addOns} 
          />
        </div>
      </div>
    </div>
  );
}