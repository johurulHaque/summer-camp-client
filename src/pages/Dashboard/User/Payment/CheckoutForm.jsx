import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CheckoutForm = ({ cartItem }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [axiosSecure] = useAxiosSecure();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const { user } = useAuth();
  const navigate = useNavigate();

  console.log("[cartItem]",cartItem)
//   const {price} = cartItem;
  const price = cartItem.price
//   console.log(price)
// 

  useEffect(() => {
    if (cartItem.price > 0) {
      axiosSecure.post("/create-payment-intent", { price }).then((res) => {
        // console.log("clieng", res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      });
    }
  }, [axiosSecure, price]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }
    console.log(card);

    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setCardError(error.message);
      console.log("[error]", error);
    } else {
      setCardError("");
    //   console.log("[PaymentMethod]", paymentMethod);
    }
    setProcessing(true);

    // payment confirm
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "unknown",
            email: user?.email || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log(error);
    }
    setProcessing(false);

    console.log(paymentIntent.status);
    if (paymentIntent.status === "succeeded") {
        setTransactionId(paymentIntent.id);
  
        const payment = {
          email: user.email,
          name:cartItem.name,
          image:cartItem.image,
          instructorName:cartItem.instructorName,
          transactionId: paymentIntent.id,
          cartId:cartItem._id,
          price:cartItem.price,
          classId:cartItem.classId,
          date: new Date(),
        //   status: "service pending",          
        };
  
        axiosSecure.post("/payments", payment).then((res) => {
          console.log(res.data);
  
          if (res.data.paymentResult.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your work has been saved",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate('/dashboard/selectClass')
          }
        });
      }

  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-primary btn-sm mt-4"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>
      {cardError && <p className="text-red-600">{cardError}</p>}
      {transactionId && (
        <p className="text-green-600">Transaction successful with transactionId {transactionId}</p>
      )}
    </>
  );
};

export default CheckoutForm;
