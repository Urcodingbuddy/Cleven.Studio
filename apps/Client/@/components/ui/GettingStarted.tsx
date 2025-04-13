"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function GettingStarted({
  category,
  plan,
}: {
  category: string;
  plan: string;
}) {
  const router = useRouter();

  return (
    <Link href={`/checkout/${category}/${plan}`}>
    <button
      className={`w-full py-2.5 md:py-3 px-4 rounded-full text-sm md:text-base cursor-pointer font-medium transition-all duration-200 bg-white/10 hover:bg-white/20 text-white shadow-md shadow-black/20 hover:shadow-lg hover:shadow-black/30 active:scale-95 active:shadow-sm active:shadow-black/10`}
    >
      Get Started
    </button>
    </Link>
  );
}
