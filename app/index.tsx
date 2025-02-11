// app/index.tsx
import { Redirect } from 'expo-router';

export default function Index() {
  return <Redirect href="/home" />;
}

// Alternative implementation with useRouter:
/*
import { useEffect } from 'react';
import { useRouter } from 'expo-router';

export default function Index() {
  const router = useRouter();
  
  useEffect(() => {
    router.replace('/home');
  }, []);
  
  return null;
}
*/