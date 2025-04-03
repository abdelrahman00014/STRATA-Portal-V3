'use client'

export default function Financial() {
  const calculateLevy = () => {
    const entitlement = document.getElementById('entitlement').value;
    const rate = 2.5;
    const levy = entitlement * rate;
    alert(`Your quarterly levy is $${levy.toFixed(2)}`);
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Financial Information</h1>
      
      <div className="bg-white p-6 rounded shadow mb-6">
        <h2 className="text-xl font-semibold mb-4">Current Levy Rates</h2>
        <p className="mb-2">Administration Fund: $2.50 per unit entitlement</p>
        <p>Capital Works Fund: $1.75 per unit entitlement</p>
      </div>
      
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">Calculate Your Levy</h2>
        <div className="mb-4">
          <label htmlFor="entitlement" className="block mb-1">Your Unit Entitlement:</label>
          <input 
            type="number" 
            id="entitlement" 
            className="border p-2 w-40" 
            defaultValue="10" 
          />
        </div>
        <button 
          onClick={calculateLevy}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Calculate
        </button>
      </div>
    </div>
  );
}
