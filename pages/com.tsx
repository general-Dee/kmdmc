// import { useState, useEffect } from 'react';
// import { format } from 'date-fns';
// import Spinner from '../components/Spinner';
// import { motion } from 'framer-motion'

// interface Commodity {
//   name: string;
//   measurement: string;
//   price: number;
// }

// const commodities: Commodity[] = [
//   { name: 'Tommato', measurement: 'Basket', price: 1732.80 },
//   { name: 'Pepper', measurement: 'Mudu', price: 26.78 },
//   { name: 'Onion', measurement: 'Basket', price: 1177.50 },
//   { name: 'Millet', measurement: 'Mudu', price: 850.00 },
//   { name: 'Corn', measurement: 'Mudu', price: 2300.50 },
//   { name: 'Garri', measurement: 'Mudu', price: 1000.50 },
//   { name: 'Oil', measurement: 'Liter', price: 1100.50 },
//   { name: 'Beans', measurement: 'Mudu', price: 900.50 },
//   { name: 'Yam', measurement: 'Tuba', price: 700.50 },
//   { name: 'Rice', measurement: 'Mudu', price: 900.50 },
//   { name: 'Potato', measurement: 'Basket', price: 1800.50 },
//   { name: 'Ginger', measurement: 'Mudu', price: 1400.50 },
// ];

// export default function Home() {
//   const [time, setTime] = useState(new Date());
//   const [isLoading, setIsLoading] = useState(true);


//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTime(new Date());
//     }, 1000);

//     setTimeout(() => {
//       setIsLoading(false);
//     }, 3000);

//     return () => clearInterval(timer);
//   }, []);

//   return (


//     <div>
//       {isLoading ? (
//         <Spinner />
//       ) : (
//         <div className="flex flex-col items-center justify-center min-h-screen">
//         <h1 className="text-4xl font-bold mb-8">Commodities</h1>
//         <div className="grid grid-cols-3 gap-4">
//           {commodities.map((commodity) => (
//             <motion.div 
//             initial= {{
//               scale: 0.75,
//               opacity: 0
//                  }}
//           transition= {{duration: .5}}
//           whileInView= {{ opacity: 1, scale: 1}}
//           viewport= {{ once: true}}
//             key={commodity.name} className="bg-white rounded-lg shadow-lg p-4">
//               <h2 className="text-xl font-semibold mb-2">{commodity.name}</h2>
//               <p className="text-gray-600">{commodity.price.toFixed(2)} Naira (per {commodity.measurement})</p>
//             </motion.div>
//           ))}
//         </div>
//         <p className="text-2xl font-bold mt-8">As at {format(time, 'yyyy-MM-dd HH:mm:ss')}</p>
//       </div>
//       )}
//     </div>

   
//   );
// }

import React, { useState } from "react";

type Crop = {
  name: string;
  price: number;
};

type Data = {
  key: string;
  category: string;
  crops: Crop[];
};

type Column = {
  title: string;
  dataIndex: string;
  key: string;
  className?: string;
};

const columns: Column[] = [
  {
    title: "Category",
    dataIndex: "category",
    key: "category",
    className: "text-gray-800 font-semibold",
  },
  {
    title: "Crop",
    dataIndex: "name",
    key: "name",
    className: "text-gray-800",
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
    className: "text-gray-800",
  },
];

const data: Data[] = [
  {
    key: "1",
    category: "Cereal crops",
    crops: [
      { name: "Maize", price: 50 },
      { name: "Sorghum", price: 60 },
      { name: "Millet", price: 70 },
      { name: "Rice", price: 80 },
    ],
  },
  {
    key: "2",
    category: "Legume crops",
    crops: [
      { name: "Beans", price: 90 },
      { name: "Groundnuts", price: 100 },
    ],
  },
  {
    key: "3",
    category: "Spices",
    crops: [
      { name: "Ginger", price: 110 },
      { name: "Garlic", price: 120 },
      { name: "Chili Pepper", price: 130 },
    ],
  },
];

const CommodityTable: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("");

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category === activeCategory ? "" : category);
  };

  // const dataSource: { key: string; name: string; price: number; category: string }[] = data.flatMap(
  //   (item) =>
  //     item.crops.map((crop) => ({
  //       ...crop,
  //       category: item.category,
  //     }))
  // );

  const categories = Array.from(new Set(data.map((item) => item.category)));

  return (
    <div className="relative w-full">
      <div className="flex justify-end w-full mb-2">
        <div className="relative inline-block text-left">
          <button
            type="button"
            className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            id="options-menu"
            aria-haspopup="true"
            aria-expanded="true"
            onClick={() => handleCategoryClick("")}
          >
            {activeCategory || "All Categories"}
            <svg
              className="-mr-1 ml-2 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            />
            </button>

                </div>
                </div>
                </div>
          )}

