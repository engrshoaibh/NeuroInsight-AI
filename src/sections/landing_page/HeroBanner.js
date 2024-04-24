// import React from 'react';
// import heroImage from '../../assets/herocover.png';
// import Button from '../../components/Button';

// function HeroBanner() {
//   return (
//     <div className="py-20">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
//         {/* Left Column */}
//         <div className="w-1/2 pr-10">
//           <h1 className="text-6xl font-bold text-left text-gray-900 mb-6 font-montserrat">Check Brain Tumor and Alzheimer’s</h1>
//           <p className="text-gray-700 text-lg font-normal mb-6 font-montserrat">We are always fully focused on providing the accuracy.</p>
//           <Button
//               text="Get Started"
//               href="/login"
//               bgColor="purple-700"
//               textColor="white"
//               hoverBgColor="purple-600"
//               hoverTextColor="purple-300"
//               fontStyle= "poppins"
//             />
//         </div>
        
//         {/* Right Column */}
//         <div className="w-1/2 bg-gray-100">
//           <img src={heroImage} alt="" className="w-full rounded-md shadow-md" />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default HeroBanner;


import React from 'react';
import heroImage from '../../assets/herocover.png';
import Button from '../../components/Button';

function HeroBanner() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse items-center sm:flex-row">
        {/* Left Column */}
        <div className="w-full sm:w-1/2 pr-10 sm:pr-0">
          <h1 className="text-4xl py-10 sm:text-5xl lg:text-6xl font-bold text-center sm:text-left text-gray-900 mb-6 font-montserrat">Check Brain Tumor and Alzheimer’s</h1>
          <p className="text-gray-700 text-base sm:text-lg lg:text-xl font-normal mb-6 font-montserrat text-center sm:text-left">We are always fully focused on providing the accuracy.</p>
          <div className="flex justify-center sm:justify-start">
            <Button
              text="Get Started"
              href="/login"
              bgColor="purple-700"
              textColor="white"
              hoverBgColor="purple-600"
              hoverTextColor="purple-300"
              fontStyle= "poppins"
            />
          </div>
        </div>
        
        {/* Right Column */}
        <div className="w-full sm:w-1/2 flex justify-center">
          <img src={heroImage} alt="" className="w-full max-w-md rounded-md shadow-md" />
        </div>
      </div>
    </div>
  );
}

export default HeroBanner;

