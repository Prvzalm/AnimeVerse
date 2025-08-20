import { useEffect, useState } from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';

const useAuth = () => {
  const { data: session, status } = useSession();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set loading to false once session status is determined
    if (status !== 'loading') {
      setLoading(false);
    }
  }, [status]);

  const login = async (provider: string) => {
    await signIn(provider);
  };

  const logout = async () => {
    await signOut();
  };

  return {
    session,
    loading,
    login,
    logout,
  };
};

export default useAuth;