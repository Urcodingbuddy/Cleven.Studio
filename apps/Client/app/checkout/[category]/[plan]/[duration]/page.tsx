import { plans } from '@/lib/planData';
import { notFound } from 'next/navigation';

type Props = {
  params: Promise<{
    category: string;
    plan: string;
    duration: 'monthly' | 'yearly';
  }>;
};

export default async function CheckoutPage(props: Props) {
  const params = await props.params;
  const { category, plan, duration } = params;

  const selectedPlan = plans.find(
    (p) => p.category === category && p.plan === plan
  );

  if (!selectedPlan) return notFound();

  const validDurations = ['monthly', 'yearly'] as const;
  if (!validDurations.includes(duration)) return notFound();

  const price = selectedPlan.price[duration];

  return (
    <div className="p-8 text-white">
      <h1 className="text-3xl font-bold mb-2">
        Checkout - {selectedPlan.category.toUpperCase()} / {selectedPlan.name} Plan ({duration})
      </h1>
      <p className="text-xl mb-4">💵 {price}</p>
      <ul className="list-disc list-inside mt-4 space-y-1">
        {selectedPlan.features.map((feature, idx) => (
          <li key={idx}>{feature}</li>
        ))}
      </ul>
    </div>
  );
}
