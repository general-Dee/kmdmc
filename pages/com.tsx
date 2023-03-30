import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import Spinner from '../components/Spinner';
import { motion } from 'framer-motion'

interface Commodity {
  name: string;
  measurement: string;
  price: number;
}

const commodities: Commodity[] = [
  { name: 'Tommato', measurement: 'Basket', price: 1732.80 },
  { name: 'Pepper', measurement: 'Mudu', price: 26.78 },
  { name: 'Onion', measurement: 'Basket', price: 1177.50 },
  { name: 'Millet', measurement: 'Mudu', price: 850.00 },
  { name: 'Corn', measurement: 'Mudu', price: 2300.50 },
  { name: 'Garri', measurement: 'Mudu', price: 1000.50 },
  { name: 'Oil', measurement: 'Liter', price: 1100.50 },
  { name: 'Beans', measurement: 'Mudu', price: 900.50 },
  { name: 'Yam', measurement: 'Tuba', price: 700.50 },
  { name: 'Rice', measurement: 'Mudu', price: 900.50 },
  { name: 'Potato', measurement: 'Basket', price: 1800.50 },
  { name: 'Ginger', measurement: 'Mudu', price: 1400.50 },
];

export default function Home() {
  const [time, setTime] = useState(new Date());
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (


    <div>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold mb-8">Commodities</h1>
        <div className="grid grid-cols-3 gap-4">
          {commodities.map((commodity) => (
            <motion.div 
            initial= {{
              scale: 0.75,
              opacity: 0
                 }}
          transition= {{duration: .5}}
          whileInView= {{ opacity: 1, scale: 1}}
          viewport= {{ once: true}}
            key={commodity.name} className="bg-white rounded-lg shadow-lg p-4">
              <h2 className="text-xl font-semibold mb-2">{commodity.name}</h2>
              <p className="text-gray-600">{commodity.price.toFixed(2)} Naira (per {commodity.measurement})</p>
            </motion.div>
          ))}
        </div>
        <p className="text-2xl font-bold mt-8">As at {format(time, 'yyyy-MM-dd HH:mm:ss')}</p>
      </div>
      )}
    </div>

   
  );
}
