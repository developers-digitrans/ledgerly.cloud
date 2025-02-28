import { loadStripe } from "@stripe/stripe-js";

export const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

export const redirectToCheckout = async (priceId: string) => {
  try {
    const stripe = await stripePromise;
    if (!stripe) throw new Error("Stripe not initialized");

    const { error } = await stripe.redirectToCheckout({
      mode: "subscription",
      lineItems: [{ price: priceId, quantity: 1 }],
      successUrl: `${window.location.origin}/success`,
      cancelUrl: `${window.location.origin}/pricing`,
    });

    if (error) throw error;
  } catch (error) {
    console.error("Error redirecting to checkout:", error);
    throw error;
  }
};
