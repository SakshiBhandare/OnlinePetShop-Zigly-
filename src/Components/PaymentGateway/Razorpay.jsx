import React, { useState } from 'react';
import Razorpay from 'razorpay';

const Razorpay = () => {

    const [paymentId, setPaymentId] = useState('');

    const handlePayment = async () => {
        const options = {
            key: 'YOUR_RAZORPAY_API_KEY',
            amount: 10000, // Amount in paise
            currency: 'INR',
            name: 'Your Company Name',
            description: 'Test Payment',
            image: 'https://via.placeholder.com/150',
            order_id: paymentId,
            handler: function (response) {
                alert(response.razorpay_payment_id);
            },
            modal: {
                // Specify only the payment methods you want to include
                debit_card: true,
                credit_card: true,
                netbanking: false,
                wallets: false,
                gpay: true, // Google Pay
            },
            prefill: {
                name: 'John Doe',
                email: 'john@example.com',
                contact: '9999999999',
            },
            notes: {
                address: 'Razorpay Corporate Office',
            },
            theme: {
                color: '#3399cc',
            },
        };

        const rzp = new Razorpay(options);
        rzp.open();
    };

    const createOrder = async () => {
        // Make an API call to your server to create a payment order
        // Here you'll get the payment ID back
        try {
            const response = await fetch('/create-order', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ amount: 10000 }), // Send the amount to the server to create the order
            });
            const data = await response.json();
            setPaymentId(data.order_id);
        } catch (error) {
            console.error('Error creating order:', error);
        }
    };


    return (
        <>
            <div>
                <button onClick={createOrder}>Pay with Razorpay</button>
            </div>
        </>
    );
};

export default Razorpay;