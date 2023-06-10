import { Elements } from "@stripe/react-stripe-js";
import React from "react";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import useCart from "../../../../hooks/useCart";
import { useParams } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    const value = useParams();    
    const total =  parseFloat(value.price);
    const price = total.toFixed(2);

  return (
    <div className="w-2/3 mx-auto">
      <Elements stripe={stripePromise} >
        <CheckoutForm price={price} />
      </Elements>
    </div>
  );
};

export default Payment;
