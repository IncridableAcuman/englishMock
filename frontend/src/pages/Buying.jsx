import React from 'react';
import { Link } from 'react-router-dom';

const Buying = () => {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Purchase Mock Tests</h2>
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <h3 className="text-lg font-semibold mb-2">Available Packages</h3>
        <div className="space-y-4">
          <div className="border p-4 rounded">
            <p className="font-medium">Basic Package</p>
            <p className="text-gray-700">Access to 5 mock tests</p>
            <p className="text-lg font-bold mt-2">$9.99</p>
            <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">Buy Now</button>
          </div>
          <div className="border p-4 rounded">
            <p className="font-medium">Premium Package</p>
            <p className="text-gray-700">Unlimited access for 1 month</p>
            <p className="text-lg font-bold mt-2">$24.99</p>
            <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">Buy Now</button>
          </div>
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-2">Payment Information</h3>
        <p className="text-gray-700 mb-4">
          Enter your payment details to proceed with the purchase. All transactions are secure.
        </p>
        <input
          type="text"
          className="w-full p-2 border rounded mb-2"
          placeholder="Card Number"
        />
        <input
          type="text"
          className="w-full p-2 border rounded mb-2"
          placeholder="Expiration Date"
        />
        <input
          type="text"
          className="w-full p-2 border rounded mb-2"
          placeholder="CVV"
        />
        <button className="bg-green-500 text-white px-4 py-2 rounded">Complete Purchase</button>
        <p className="text-gray-600 mt-2">Note: This is a placeholder. Real payment integration requires a backend.</p>
      </div>

      <div className="mt-4">
        <Link to="/" className="text-blue-500 hover:underline">Back to Home</Link>
      </div>
    </div>
  );
};

export default Buying;