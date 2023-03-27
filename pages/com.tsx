import { useState, useEffect } from 'react';
import { format } from 'date-fns';

interface Commodity {
  name: string;
  measurement: string;
  price: number;
}

const commodities: Commodity[] = [
  { name: 'Gold', measurement: 'ounces', price: 1732.80 },
  { name: 'Silver', measurement: 'ounces', price: 26.78 },
  { name: 'Platinum', measurement: 'ounces', price: 1177.50 },
  { name: 'Bronze', measurement: 'ounces', price: 850.00 },
  { name: 'Perls', measurement: 'ounces', price: 2300.50 },
  { name: 'Diamond', measurement: 'ounces', price: 1000.50 },
];

export default function Home() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-8">Commodities</h1>
      <div className="grid grid-cols-3 gap-4">
        {commodities.map((commodity) => (
          <div key={commodity.name} className="bg-white rounded-lg shadow-lg p-4">
            <h2 className="text-xl font-semibold mb-2">{commodity.name}</h2>
            <p className="text-gray-600">{commodity.price.toFixed(2)} Naira per {commodity.measurement}</p>
          </div>
        ))}
      </div>
      <p className="text-2xl font-bold mt-8">{format(time, 'yyyy-MM-dd HH:mm:ss')}</p>
    </div>
  );
}
