import { Elements } from "@stripe/react-stripe-js";
import React from "react";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { useParams } from "react-router-dom";
import useCart from "../../../../hooks/useCart";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    const id = useParams();    
    // const total =  parseFloat(value.price);
    // const price = total.toFixed(2);
    console.log(id)
    const [cart] = useCart();
    console.log(cart)

    const cartItem = cart.find(element => element._id == id.id)
    console.log(cartItem)



  return (
    <div className="w-2/3 mx-auto">
      <Elements stripe={stripePromise} >
        <CheckoutForm cartItem={cartItem} />
      </Elements>
    </div>
  );
};

export default Payment;
