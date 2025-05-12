


import { useNavigate } from 'react-router-dom'
import { UrlState } from '@/context'

export const useStripeRedirect = () => {
   const navigate = useNavigate()
   const { isAuthenticated } = UrlState() // assumes you're managing auth status in context

   const redirectToStripe = (plan) => {
      if (!isAuthenticated) {
         navigate('/auth') // redirect to login page
         return
      }

      if (plan === 'free') {
         navigate('/dashboard')
         return
      }
      else if (plan === 'pro') {
         const paymentUrl = 'https://buy.stripe.com/test_9B628rawQ8GDgf8bXIeEo00';
         window.location.href = paymentUrl;
      }
      else if (plan === 'premium') {
         const paymentUrl = 'https://buy.stripe.com/test_28E4gz20ke0XaUO0f0eEo01';
         window.location.href = paymentUrl;
      }
      else {
         console.error('Invalid plan selected')
      }
   }

   return { redirectToStripe }
}