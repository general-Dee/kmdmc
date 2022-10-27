// import React from 'react'
// import Stepper from '../Stepper'
// import StepperControle from '../StepperControle'
// import Details from '../steps/Details'
// import Final from '../steps/Final'
// import Payment from '../steps/Payment'
// import { useState } from 'react'
// import Account from '../steps/Account'

// type Props = {}

// function Vendor_reg({}: Props) {

//   const [currentStep, setCurrentStep] = useState(1)

//   const steps = [
//     "Account Information",
//     "Personal Details",
//     "Complete"
//   ]

//   const displaySteps = (step) => {
//     switch(step) {
//       case 1:
//         return <Account />
//         break;
//       case 2:
//         return <Details />
//         break;
//       case 3:
//         return <Payment />
//         break;
//       case 4:
//         return <Final />
//     }
//   }
//   return (
//     <div className='md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-white'>
//         {/* Stepper */}
//         <div>
//             <Stepper 
//               steps={steps}
//               currentStep={currentStep}
//             />
//         </div>
//         {/* Navigation Controles */}
//         <div>
//             <StepperControle />
//         </div>
//     </div>
//   )
// }

// export default Vendor_reg