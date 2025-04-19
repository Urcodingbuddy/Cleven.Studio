import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export const useSignUp = () => {
  const router = useRouter();

  const handleSignUp = async (
    email: string, 
    firstName: string,  
    lastName: string,  
    password: string, 
    confirmPassword: string, 
    setError: (error: string) => void, 
    setLoading: (loading: boolean) => void, 
    callbackUrl: string = "/workspace"
  ) => {
    setLoading(true);

    const result = await signIn("credentials", {
      email,
      firstName,
      lastName,
      password,
      confirmPassword,
      redirect: false,
      action: "signup",
      callbackUrl,
    });

    if (result?.error) {
      setError(result.error);
      setLoading(false);
    } else if (result?.url) {
      router.push(result.url);
    } else {
      console.error("Unexpected result:", result);
    }
  };

  return { handleSignUp };
};