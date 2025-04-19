import { useEffect, useState } from 'react';
import axios from "axios"

export function usePlan(category: string) {
  const [plans, setPlans] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!category) return;

    const fetchPlans = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await axios.get(`/api/plan/${category}`);
        setPlans(res.data);
      } catch (err: any) {
        console.error('Error fetching plans:', err);
        setError(err.response?.data?.error || 'Failed to fetch plans.');
        setPlans([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPlans();
  }, [category]);

  return { plans, loading, error };
}