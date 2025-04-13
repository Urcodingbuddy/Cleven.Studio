
import { plans } from '@/lib/planData';
import PaymentDetailsClient from '@/components/ui/PaymentDetailsClient';
import CouponForm from '@/components/ui/CouponForm';
import SmoothScrollProvider from '@repo/landing/SmoothScrollProvider';

interface AddOn {
  name: string;
  price: number;
}

interface Plan {
  category: string;
  plan: string;
  features: string[];
  price: number ;
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

export default async function CheckoutPage({ params }: {
  params: {
    category: string;
    plan: string;
  }
}) {
  const { category, plan } = await Promise.resolve(params)
  const selectedPlan = plans.find(
    (p: Plan) => p.category === category && p.plan === plan
  );
  if (!selectedPlan) {
    return <div>Plan not found</div>;
  }
  const { features } = selectedPlan;
  return (
    <div className="min-h-screen bg-black text-white p-4 sm:p-6 md:p-8">
      <SmoothScrollProvider />

      <div className="max-w-6xl mx-auto">

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 md:mb-12">
          Your Orchestrated Setup
        </h1>

        <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 z-10 ">
          <div className="space-y-4 sm:space-y-6 md:space-y-8">
            <div className="bg-[#0c0c0c] border border-zinc-800 rounded-xl sm:rounded-2xl p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <div className="flex-1">
                  <h1 className="sm:text-xl text-lg font-semibold mb-2">
                    {category.toUpperCase()}
                  </h1>
                  <p className='border border-zinc-800' ></p>
                  <ul className="list-disc list-inside mt-4 mb-4 space-y-1">
                    {features.map((feature: string, idx: number) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                  <CouponForm />
                </div>
              </div>
            </div>
          </div>
          <PaymentDetailsClient
            baseAmount={selectedPlan.price}
            planName={category}
            addOns={addOns}
          />
        </div>
      </div>
    </div>
  );
}