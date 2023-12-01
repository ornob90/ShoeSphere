import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import Button from "../../components/html/Button";
import axios from "axios";

const CheckoutPaymentForm = ({ customerActive }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState(false);
  const [transactionId, setTransactionId] = useState("");

  const price = 148.05;

  useEffect(() => {
    axios
      .post("http://localhost:5000/create-payment-intent", {
        price,
      })
      .then((res) => {
        // console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      });
  }, [price]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("payment error: ", error);
      setError(error.message);
    } else {
      // console.log(paymentMethod);
      setError("");
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card,
          billing_details: {
            email: "oornob@orno.com",
            name: "user name",
          },
        },
      });
    if (confirmError) {
      console.log(confirmError.message);
    } else {
      if ((paymentIntent.status = "succeeded")) {
        console.log("Transection id: ", paymentIntent.id);
        setTransactionId(paymentIntent.id);
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`border absolute  w-full h-[300px] ${
        !customerActive ? "w-full left-0" : "top-[30%] -left-[130%] -z-10"
      } duration-[.5s]  delay-150`}
    >
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
        className="px-2 py-5 border"
      ></CardElement>
      <Button
        className="w-full py-2 mt-2 text-white"
        type="submit"
        disabled={!stripe || !clientSecret}
      >
        Pay
      </Button>
      {transactionId && <p>Your transaction id is : {transactionId}</p>}
      <p className="text-red-600">{error}</p>
    </form>
  );
};

export default CheckoutPaymentForm;
