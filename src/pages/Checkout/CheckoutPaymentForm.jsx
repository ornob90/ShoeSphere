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
import useAxiosSecure from "../../hooks/axios/useAxiosSecure";
import BASE_URL from "../../utils/api";

const CheckoutPaymentForm = ({ customerActive }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const [paymentLoad, setPaymentLoad] = useState(false);

  const price = 148.05;
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    axiosSecure
      .post(BASE_URL + "/create-payment-intent", {
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

    setPaymentLoad(true);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setPaymentLoad(false);
      console.log("payment error: ", error);
      setError(error.message);
      return;
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
      setPaymentLoad(false);
      console.log(confirmError.message);
    } else {
      setPaymentLoad(false);
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

      {paymentLoad ? (
        <Button
          className="w-full text-white flex justify-center items-center py-2 "
          type="button"
          disabled
        >
          <svg
            className="bg-white animate-spin h-5 w-5 mr-3 ..."
            viewBox="0 0 24 24"
          ></svg>
          Processing...
        </Button>
      ) : (
        <Button
          className="w-full py-2 mt-2 text-white"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </Button>
      )}

      {transactionId && <p>Your transaction id is : {transactionId}</p>}
      <p className="text-red-600">{error}</p>
    </form>
  );
};

export default CheckoutPaymentForm;
