'use client';

import { useState, useEffect } from 'react';

export default function Payments() {
  const [activeTab, setActiveTab] = useState('upcoming');
  const [unit, setUnit] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('creditCard');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  
  // State for the payment calculator
  const [calculatorState, setCalculatorState] = useState({
    levyAmount: 1000,
    paymentFrequency: 'quarterly',
    paymentType: 'standard',
    hasDiscount: false,
    discountPercentage: 5
  });
  
  // Calculate payments based on user inputs
  const [calculatedAmount, setCalculatedAmount] = useState(0);
  
  useEffect(() => {
    // Calculate the payment amount based on the inputs
    let amount = calculatorState.levyAmount;
    
    // Apply frequency adjustments
    if (calculatorState.paymentFrequency === 'monthly') {
      amount = calculatorState.levyAmount / 3;
    } else if (calculatorState.paymentFrequency === 'annually') {
      amount = calculatorState.levyAmount * 4;
    }
    
    // Apply payment type adjustments
    if (calculatorState.paymentType === 'special') {
      amount += 200;
    } else if (calculatorState.paymentType === 'maintenance') {
      amount += 150;
    }
    
    // Apply discount if applicable
    if (calculatorState.hasDiscount) {
      amount = amount * (1 - (calculatorState.discountPercentage / 100));
    }
    
    setCalculatedAmount(amount.toFixed(2));
  }, [calculatorState]);
  
  // Simulate upcoming payments
  const upcomingPayments = [
    { 
      id: 'INV-2025-Q2', 
      description: 'Quarterly Strata Levy - Q2 2025', 
      amount: 1250.00, 
      dueDate: '2025-06-15',
      status: 'pending'
    },
    { 
      id: 'INV-2025-SPECIAL', 
      description: 'Special Levy - Facade Restoration', 
      amount: 500.00, 
      dueDate: '2025-07-01',
      status: 'pending'
    }
  ];
  
  // Simulate payment history
  const paymentHistory = [
    { 
      id: 'INV-2025-Q1', 
      description: 'Quarterly Strata Levy - Q1 2025', 
      amount: 1250.00, 
      dueDate: '2025-03-15',
      paidDate: '2025-03-12',
      status: 'paid',
      method: 'Direct Debit'
    },
    { 
      id: 'INV-2024-Q4', 
      description: 'Quarterly Strata Levy - Q4 2024', 
      amount: 1200.00, 
      dueDate: '2024-12-15',
      paidDate: '2024-12-10',
      status: 'paid',
      method: 'Credit Card'
    },
    { 
      id: 'INV-2024-Q3', 
      description: 'Quarterly Strata Levy - Q3 2024', 
      amount: 1200.00, 
      dueDate: '2024-09-15',
      paidDate: '2024-09-14',
      status: 'paid',
      method: 'Direct Debit'
    }
  ];
  
  const handlePayment = (e) => {
    e.preventDefault();
    
    // In a real application, this would call an API endpoint to process the payment
    // For this demo, we'll just show a success message
    
    setShowSuccessMessage(true);
    
    // After 3 seconds, reset the form
    setTimeout(() => {
      setShowSuccessMessage(false);
      setUnit('');
      setPaymentMethod('creditCard');
    }, 3000);
  };
  
  const handleCalculatorChange = (e) => {
    const { name, value, type, checked } = e.target;
    setCalculatorState(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-black">Payments</h1>
      
      {/* Tab Navigation */}
      <div className="mb-8 border-b border-gray-300">
        <div className="flex space-x-4">
          <button 
            className={`py-2 px-4 ${activeTab === 'upcoming' ? 'border-b-2 border-blue-600 text-blue-600 font-medium' : 'text-gray-700'}`}
            onClick={() => setActiveTab('upcoming')}
          >
            Upcoming Payments
          </button>
          <button 
            className={`py-2 px-4 ${activeTab === 'history' ? 'border-b-2 border-blue-600 text-blue-600 font-medium' : 'text-gray-700'}`}
            onClick={() => setActiveTab('history')}
          >
            Payment History
          </button>
          <button 
            className={`py-2 px-4 ${activeTab === 'calculator' ? 'border-b-2 border-blue-600 text-blue-600 font-medium' : 'text-gray-700'}`}
            onClick={() => setActiveTab('calculator')}
          >
            Payment Calculator
          </button>
        </div>
      </div>
      
      {/* Upcoming Payments Tab */}
      {activeTab === 'upcoming' && (
        <div>
          <h2 className="text-xl font-bold mb-4 text-black">Upcoming Payments</h2>
          
          {showSuccessMessage && (
            <div className="bg-green-50 border border-green-200 p-4 rounded mb-6">
              <p className="text-green-800 font-medium">
                Payment successful! A confirmation email has been sent to your registered email address.
              </p>
            </div>
          )}
          
          <div className="bg-white p-6 rounded shadow mb-8">
            <h3 className="text-lg font-semibold mb-4 text-black">Make a Payment</h3>
            
            <form onSubmit={handlePayment}>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="unit" className="block mb-1 text-gray-900">Unit Number:</label>
                  <input 
                    type="text" 
                    id="unit" 
                    value={unit}
                    onChange={(e) => setUnit(e.target.value)}
                    className="border p-2 w-full rounded" 
                    required 
                  />
                </div>
                
                <div>
                  <label htmlFor="paymentMethod" className="block mb-1 text-gray-900">Payment Method:</label>
                  <select 
                    id="paymentMethod"
                    value={paymentMethod}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="border p-2 w-full rounded" 
                    required
                  >
                    <option value="creditCard">Credit Card</option>
                    <option value="directDebit">Direct Debit</option>
                    <option value="bankTransfer">Bank Transfer</option>
                  </select>
                </div>
              </div>
              
              <div className="mt-4">
                <h4 className="text-md font-medium mb-3 text-black">Select Invoice to Pay:</h4>
                
                <div className="space-y-3">
                  {upcomingPayments.map((payment, index) => (
                    <div key={index} className="flex items-center">
                      <input 
                        type="radio" 
                        id={`payment_${index}`} 
                        name="selectedPayment"
                        value={payment.id}
                        className="mr-2" 
                        required
                      />
                      <label htmlFor={`payment_${index}`} className="flex-1 text-gray-900">
                        {payment.description} - ${payment.amount.toFixed(2)} (Due: {payment.dueDate})
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              <button 
                type="submit" 
                className="mt-6 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
              >
                Proceed to Payment
              </button>
            </form>
          </div>
          
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-lg font-semibold mb-4 text-black">Upcoming Payments</h3>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="text-left p-4 text-black border-b">Invoice ID</th>
                    <th className="text-left p-4 text-black border-b">Description</th>
                    <th className="text-left p-4 text-black border-b">Amount</th>
                    <th className="text-left p-4 text-black border-b">Due Date</th>
                    <th className="text-left p-4 text-black border-b">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {upcomingPayments.map((payment, index) => (
                    <tr key={index} className="hover:bg-slate-50">
                      <td className="p-4 border-b text-gray-900">{payment.id}</td>
                      <td className="p-4 border-b text-gray-900">{payment.description}</td>
                      <td className="p-4 border-b text-gray-900">${payment.amount.toFixed(2)}</td>
                      <td className="p-4 border-b text-gray-900">{payment.dueDate}</td>
                      <td className="p-4 border-b">
                        <span className="px-2 py-1 rounded-full bg-yellow-100 text-yellow-800 text-sm font-medium">
                          {payment.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
      
      {/* Payment History Tab */}
      {activeTab === 'history' && (
        <div>
          <h2 className="text-xl font-bold mb-4 text-black">Payment History</h2>
          
          <div className="bg-white p-6 rounded shadow">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="text-left p-4 text-black border-b">Invoice ID</th>
                    <th className="text-left p-4 text-black border-b">Description</th>
                    <th className="text-left p-4 text-black border-b">Amount</th>
                    <th className="text-left p-4 text-black border-b">Due Date</th>
                    <th className="text-left p-4 text-black border-b">Paid Date</th>
                    <th className="text-left p-4 text-black border-b">Method</th>
                    <th className="text-left p-4 text-black border-b">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {paymentHistory.map((payment, index) => (
                    <tr key={index} className="hover:bg-slate-50">
                      <td className="p-4 border-b text-gray-900">{payment.id}</td>
                      <td className="p-4 border-b text-gray-900">{payment.description}</td>
                      <td className="p-4 border-b text-gray-900">${payment.amount.toFixed(2)}</td>
                      <td className="p-4 border-b text-gray-900">{payment.dueDate}</td>
                      <td className="p-4 border-b text-gray-900">{payment.paidDate}</td>
                      <td className="p-4 border-b text-gray-900">{payment.method}</td>
                      <td className="p-4 border-b">
                        <span className="px-2 py-1 rounded-full bg-green-100 text-green-800 text-sm font-medium">
                          {payment.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="mt-6">
              <button 
                className="bg-slate-600 text-white px-4 py-2 rounded hover:bg-slate-700"
                onClick={() => window.print()}
              >
                Print Payment History
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Payment Calculator Tab */}
      {activeTab === 'calculator' && (
        <div>
          <h2 className="text-xl font-bold mb-4 text-black">Payment Calculator</h2>
          
          <div className="bg-white p-6 rounded shadow">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-black">Enter Payment Details</h3>
                
                <div className="mb-4">
                  <label htmlFor="levyAmount" className="block mb-1 text-gray-900">Levy Base Amount ($):</label>
                  <input 
                    type="number" 
                    id="levyAmount" 
                    name="levyAmount"
                    value={calculatorState.levyAmount}
                    onChange={handleCalculatorChange}
                    className="border p-2 w-full rounded" 
                    min="0"
                    step="50"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="paymentFrequency" className="block mb-1 text-gray-900">Payment Frequency:</label>
                  <select 
                    id="paymentFrequency" 
                    name="paymentFrequency"
                    value={calculatorState.paymentFrequency}
                    onChange={handleCalculatorChange}
                    className="border p-2 w-full rounded" 
                  >
                    <option value="monthly">Monthly</option>
                    <option value="quarterly">Quarterly</option>
                    <option value="annually">Annually</option>
                  </select>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="paymentType" className="block mb-1 text-gray-900">Payment Type:</label>
                  <select 
                    id="paymentType" 
                    name="paymentType"
                    value={calculatorState.paymentType}
                    onChange={handleCalculatorChange}
                    className="border p-2 w-full rounded" 
                  >
                    <option value="standard">Standard Levy</option>
                    <option value="special">Special Levy</option>
                    <option value="maintenance">Maintenance Fund</option>
                  </select>
                </div>
                
                <div className="mb-4 flex items-center">
                  <input 
                    type="checkbox" 
                    id="hasDiscount" 
                    name="hasDiscount"
                    checked={calculatorState.hasDiscount}
                    onChange={handleCalculatorChange}
                    className="mr-2" 
                  />
                  <label htmlFor="hasDiscount" className="text-gray-900">
                    Apply early payment discount
                  </label>
                </div>
                
                {calculatorState.hasDiscount && (
                  <div className="mb-4 ml-6">
                    <label htmlFor="discountPercentage" className="block mb-1 text-gray-900">Discount Percentage:</label>
                    <input 
                      type="number" 
                      id="discountPercentage" 
                      name="discountPercentage"
                      value={calculatorState.discountPercentage}
                      onChange={handleCalculatorChange}
                      className="border p-2 w-full rounded" 
                      min="0"
                      max="25"
                      step="0.5"
                    />
                  </div>
                )}
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4 text-black">Calculation Results</h3>
                
                <div className="bg-slate-50 p-6 rounded border border-slate-200 mb-6">
                  <p className="text-gray-900 mb-2">
                    <span className="font-medium">Payment Amount:</span>
                  </p>
                  <div className="text-3xl font-bold text-blue-800 mb-4">
                    ${calculatedAmount}
                  </div>
                  
                  <p className="text-gray-900 mb-1">
                    <span className="font-medium">Payment Frequency:</span> {calculatorState.paymentFrequency}
                  </p>
                  <p className="text-gray-900 mb-1">
                    <span className="font-medium">Payment Type:</span> {calculatorState.paymentType}
                  </p>
                  {calculatorState.hasDiscount && (
                    <p className="text-gray-900 mb-1">
                      <span className="font-medium">Discount Applied:</span> {calculatorState.discountPercentage}%
                    </p>
                  )}
                </div>
                
                <div className="bg-blue-50 p-4 rounded border border-blue-100">
                  <h4 className="text-blue-800 font-semibold mb-2">Information</h4>
                  <p className="text-gray-900 text-sm mb-2">
                    This calculator provides an estimate of your strata levy payments based on the information provided.
                  </p>
                  <p className="text-gray-900 text-sm">
                    For exact payment amounts, please refer to your levy notice or contact the strata manager.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 