// PaymentForm.js
import React from 'react';
//import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const PaymentForm = ({ handlePayment }) => {
//   const stripe = useStripe();
//   const elements = useElements();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Validate input, handle errors, etc.

//     const { token, error } = await stripe.createToken(elements.getElement(CardElement));

//     if (error) {
//       console.error(error);
//     } else {
//       // Send the token to your server for further processing
//       handlePayment(token);
//     }
//   };

  return (
    // <form onSubmit={handleSubmit}>
    //   <CardElement />
    //   <button type="submit">Pay Now</button>
    // </form>
<></>
    );
};

export default PaymentForm;
