'use client';

import { useState } from 'react';

export default function PaymentsPage() {
  const [showCalculator, setShowCalculator] = useState(false);
  const [unitSize, setUnitSize] = useState('');
  const [calculatedFee, setCalculatedFee] = useState<number | null>(null);

  const calculateFee = () => {
    if (!unitSize) return;
    const size = parseFloat(unitSize);
    const baseFee = 100;
    const fee = baseFee + (size * 2);
    setCalculatedFee(fee);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Strata Payments</h1>

      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Payment Instructions</h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Payments are due on the 1st of each month</li>
            <li>Late fees apply after the 15th of the month</li>
            <li>Payments can be made via bank transfer or credit card</li>
            <li>Keep your payment receipts for records</li>
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Fee Calculator</h2>
          <button
            onClick={() => setShowCalculator(!showCalculator)}
            className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
          >
            {showCalculator ? 'Hide Calculator' : 'Show Calculator'}
          </button>

          {showCalculator && (
            <div className="bg-gray-100 p-4 rounded">
              <div className="space-y-4">
                <div>
                  <label className="block mb-2">Unit Size (sqm):</label>
                  <input
                    type="number"
                    value={unitSize}
                    onChange={(e) => setUnitSize(e.target.value)}
                    className="border p-2 rounded w-full"
                  />
                </div>
                <button
                  onClick={calculateFee}
                  className="bg-green-500 text-white px-4 py-2 rounded"
                >
                  Calculate Fee
                </button>
                {calculatedFee && (
                  <div className="mt-4">
                    <p className="font-semibold">
                      Estimated Monthly Fee: ${calculatedFee.toFixed(2)}
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
} 