// import React from 'react';
// import { FaFacebook, FaInstagram, FaTwitter, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

// function Footer() {
//   return (
//     <footer className="bg-gray-900 text-white py-8">
//       <div className="container mx-auto flex justify-between px-4">
//         {/* Quick Links */}
//         <div>
//           <h2 className="text-lg font-bold mb-4">Quick Links</h2>
//           <ul className="list-none">
//             <li><FaPhone className="inline-block mr-2" /> +1234567890</li>
//             <li><FaEnvelope className="inline-block mr-2" /> example@example.com</li>
//             <li><FaMapMarkerAlt className="inline-block mr-2" /> 123 Street, City, Country</li>
//             {/* Add more quick links here */}
//           </ul>
//         </div>

//         {/* Social Icons */}
//         <div className="flex items-center space-x-4">
//           <FaFacebook className="text-purple-600 text-lg cursor-pointer" />
//           <FaInstagram className="text-purple-600 text-lg cursor-pointer" />
//           <FaTwitter className="text-purple-600 text-lg cursor-pointer" />
//         </div>
//       </div>

//       {/* Neuro-Insight AI All Right Reserved */}
//       <div className="text-center mt-4">
//         <p className="mb-0">Neuro-Insight AI All Right Reserved</p>
//       </div>
//     </footer>
//   );
// }

// export default Footer;


import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between px-4">
        {/* Quick Links */}
        <div className="mb-4 sm:mb-0 px-12">
          <h2 className="text-lg font-bold mb-2">Quick Links</h2>
          <ul className="list-none">
            <li className="mb-2"><FaPhone className="inline-block mr-2" /> +1234567890</li>
            <li className="mb-2"><FaEnvelope className="inline-block mr-2" /> example@example.com</li>
            <li className="mb-2"><FaMapMarkerAlt className="inline-block mr-2" /> 123 Street, City, Country</li>
            {/* Add more quick links here */}
          </ul>
        </div>

        {/* Social Icons */}
        <div className="flex items-center justify-center space-x-4">
          <FaFacebook className="text-purple-600 text-lg cursor-pointer" />
          <FaInstagram className="text-purple-600 text-lg cursor-pointer" />
          <FaTwitter className="text-purple-600 text-lg cursor-pointer" />
        </div>
      </div>

      {/* Neuro-Insight AI All Right Reserved */}
      <div className="text-center mt-4">
        <p className="mb-0">Neuro-Insight AI All Right Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
