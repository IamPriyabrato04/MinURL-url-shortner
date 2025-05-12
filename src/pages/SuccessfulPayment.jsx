import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { UrlState } from '@/context';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
   import.meta.env.VITE_SUPABASE_URL,
   import.meta.env.VITE_SUPABASE_ANON_KEY
);

const PaymentSuccess = () => {
   const { user } = UrlState();
   const navigate = useNavigate();
   const location = useLocation();
   const [countdown, setCountdown] = useState(5);

   console.log('--- PaymentSuccess Component Rendered ---');
   console.log('user from UrlState:', user);

   useEffect(() => {
      const params = new URLSearchParams(location.search);
      const planFromURL = params.get('plan')?.trim();

      const plan =
         planFromURL === 'free'
            ? 'free'
            : planFromURL === "pro"
               ? "pro"
               : "premium";

      console.log('Component mounted');
      console.log('User:', user);
      console.log('Plan from URL:', plan);

      // Wait until user is defined
      if (user === undefined) return;

      if (!plan || !user) {
         console.warn('Redirecting due to missing user or plan');
         // navigate('/auth');
         // return;
      }

      const saveSubscription = async () => {
         const { error } = await supabase.from('subscription').insert({
            user_id: user.id,
            created_at: new Date().toISOString(),
            status: 'active',
            plan: plan,
         });

         if (error) {
            console.error('Error storing subscription:', error);
         } else {
            const interval = setInterval(() => {
               setCountdown((prev) => {
                  if (prev === 1) {
                     clearInterval(interval);
                     navigate('/dashboard');
                  }
                  console.log('Countdown:', prev);
                  return prev - 1;
               });
            }, 1000);
         }
      };

      saveSubscription();
   }, [user, location.search, navigate]);

   return (
      <div className="text-center text-lg font-semibold mt-10">
         Payment successful! Redirecting in {countdown} seconds...
      </div>
   );
};

export default PaymentSuccess;
