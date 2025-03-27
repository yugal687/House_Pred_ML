'use client'
import { useState } from 'react';

export default function PredictionForm() {
  const [formData, setFormData] = useState({
    MedInc: '',
    HouseAge: '',
    AveRooms: '',
    AveBedrms: '',
    Population: '',
    AveOccup: '',
    Latitude: '',
    Longitude: '',
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // const res = await fetch('https://house-pred-ml-53gm.onrender.com/api/predict/', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(
      //     Object.fromEntries(
      //       Object.entries(formData).map(([key, val]) => [key, parseFloat(val)])
      //     )
      //   ),
      // });
  
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(
          Object.fromEntries(
            Object.entries(formData).map(([key, val]) => [key, parseFloat(val)])
          )
        ),
      });
      const data = await res.json();
      if (res.ok) {
        setResult(`Predicted Price: $${(data.predicted_price * 100000).toFixed(2)}`);
      } else {
        setResult(`Error: ${data.error}`);
      }
    } catch (error) {
      setResult(`Error: ${error.message}`);
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-8 rounded-xl shadow-md space-y-6 mt-10">
      <h2 className="text-2xl font-bold text-center text-emerald-800">California House Price Predictor</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {Object.keys(formData).map((key) => (
          <div key={key}>
            <label className="block text-sm font-medium text-black">{key}</label>
            <input
              type="number"
              name={key}
              value={formData[key]}
              onChange={handleChange}
              step="any"
              required
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
        ))}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Predict Price
        </button>
      </form>
      {result && <p className="text-center text-lg font-semibold mt-4">{result}</p>}
    </div>
  );
}
