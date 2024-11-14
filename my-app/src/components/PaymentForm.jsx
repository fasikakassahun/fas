import React from "react";

const PaymentForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full">
        {/* Updated title with purple color */}
        <h2 className="text-2xl font-semibold text-center text-purple-700 mb-6">
          Cinema Payment Form
        </h2>

        {/* Payment Methods Logos */}
        <div className="mb-6 flex justify-center space-x-6">
          {/* Increased image size */}
          <img className="w-16" src="../images/rec/visa.png" alt="Visa" />
          <img className="w-16" src="../images/rec/mc.png" alt="MasterCard" />
          <img className="w-16" src="../images/rec/payp.jpg" alt="PayPal" />
          {/* Ethiopian Banks */}
          <img className="w-16" src="../images/rec/awash.png" alt="Ethiopian Bank 1" />
          <img className="w-16" src="../images/rec/z.jpg" alt="Ethiopian Bank 2" />
          <img className="w-16" src="../images/rec/comb.jpg" alt="Ethiopian Bank 3" />
        </div>

        <form action="#" method="POST">
          <div className="grid grid-cols-2 gap-6 mb-6">
            {/* Billing Address Section */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Billing Address
              </h3>

              <div className="mb-4">
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="full-name"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="full-name"
                  className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm text-gray-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Full Name"
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm text-gray-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="example@example.com"
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="address"
                >
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm text-gray-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="addis ababa - megenagna"
                />
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label
                    className="block text-sm font-medium text-gray-700"
                    htmlFor="city"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm text-gray-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="City"
                  />
                </div>

                
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    className="block text-sm font-medium text-gray-700"
                    htmlFor="zip-code"
                  >
                    Zip Code
                  </label>
                  <input
                    type="text"
                    id="zip-code"
                    className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm text-gray-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Zip Code"
                  />
                </div>
              </div>
            </div>

            {/* Payment Section */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Payment
              </h3>

              <div className="mb-4">
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="card-name"
                >
                  Name on Card
                </label>
                <input
                  type="text"
                  id="card-name"
                  className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm text-gray-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Name on Card"
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="card-number"
                >
                  Credit Card Number
                </label>
                <input
                  type="text"
                  id="card-number"
                  className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm text-gray-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="1111 2222 3333 4444"
                />
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label
                    className="block text-sm font-medium text-gray-700"
                    htmlFor="exp-month"
                  >
                    Exp. Month
                  </label>
                  <select
                    id="exp-month"
                    className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm text-gray-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option>January</option>
                    <option>February</option>
                    <option>March</option>
                    <option>April</option>
                    <option>May</option>
                    <option>June</option>
                    <option>July</option>
                    <option>August</option>
                    <option>September</option>
                    <option>October</option>
                    <option>November</option>
                    <option>December</option>
                  </select>
                </div>

                <div>
                  <label
                    className="block text-sm font-medium text-gray-700"
                    htmlFor="exp-year"
                  >
                    Exp. Year
                  </label>
                  <input
                    type="text"
                    id="exp-year"
                    className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm text-gray-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="2025"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    className="block text-sm font-medium text-gray-700"
                    htmlFor="cvv"
                  >
                    CVV
                  </label>
                  <input
                    type="text"
                    id="cvv"
                    className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm text-gray-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="123"
                  />
                </div>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Submit Payment
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentForm;
