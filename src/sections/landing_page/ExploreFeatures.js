// import React from 'react';
// import first_features from '../../assets/first_features.svg'
// import pdf_downloads_img from '../../assets/pdf_downloads.svg'
// import disease_detection_img from '../../assets/disease_detection.svg'
// import view_reports_img from '../../assets/view_reports.svg'

// function FeatureCard({ title, description, imageUrl }) {
//   return (
//     <div className="w-64 bg-white rounded-lg shadow-md p-6 transition duration-300 hover:bg-purple-600 hover:text-white">
//       <img src={imageUrl} alt="Feature" className="w-32 h-32 object-cover mb-4 rounded-lg" />
//       <h3 className="text-xl font-bold font-montserrat">{title}</h3>
//       <div className="bg-red-500 h-1 w-10 my-4"></div>
//       <p className="text-sm font-normal font-montserrat">{description}</p>
//     </div>
//   );
// }

// function ExploreFeatures() {
//   return (
//     <div className="py-20 bg-gray-100">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-4xl font-bold font-montserrat mb-12">Explore Our Features</h2>
//         <div className="flex justify-between">
//           <FeatureCard
//             title="Upload a File"
//             description="The gradual accumulation of information about"
//             imageUrl={first_features}
//           />
//           <FeatureCard
//             title="Disease Detection"
//             description="The gradual accumulation of information about"
//             imageUrl={disease_detection_img}
//           />
//           <FeatureCard
//             title="Download PDF Reports"
//             description="The gradual accumulation of information about"
//             imageUrl={pdf_downloads_img}
//           />
//           <FeatureCard
//             title="View Generated Reports"
//             description="The gradual accumulation of information about"
//             imageUrl={view_reports_img}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ExploreFeatures;




// import React from 'react';
// import first_features from '../../assets/first_features.svg'
// import pdf_downloads_img from '../../assets/pdf_downloads.svg'
// import disease_detection_img from '../../assets/disease_detection.svg'
// import view_reports_img from '../../assets/view_reports.svg'

// function FeatureCard({ title, description, imageUrl }) {
//   return (
//     <div className="w-full sm:w-64 bg-white rounded-lg shadow-md p-6 mb-8 sm:mb-0 sm:mr-4 transition duration-300 hover:bg-purple-600 hover:text-white">
//       <img src={imageUrl} alt="Feature" className="w-32 h-32 object-cover mb-4 rounded-lg mx-auto" />
//       <h3 className="text-lg sm:text-xl font-bold font-montserrat text-center">{title}</h3>
//       <div className="bg-red-500 h-1 w-10 my-4 mx-auto"></div>
//       <p className="text-sm sm:text-base font-normal font-montserrat">{description}</p>
//     </div>
//   );
// }

// function ExploreFeatures() {
//   return (
//     <div className="py-20 bg-gray-100">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-4xl sm:text-5xl font-bold font-montserrat mb-12 text-center">Explore Our Features</h2>
//         <div className="flex flex-col sm:flex-row justify-center sm:justify-between">
//           <FeatureCard
//             title="Upload a File"
//             description="The gradual accumulation of information about"
//             imageUrl={first_features}
//           />
//           <FeatureCard
//             title="Disease Detection"
//             description="The gradual accumulation of information about"
//             imageUrl={disease_detection_img}
//           />
//           <FeatureCard
//             title="Download PDF Reports"
//             description="The gradual accumulation of information about"
//             imageUrl={pdf_downloads_img}
//           />
//           <FeatureCard
//             title="View Generated Reports"
//             description="The gradual accumulation of information about"
//             imageUrl={view_reports_img}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ExploreFeatures;


import React from 'react';
import upload_icon from '../../assets/upload.gif';
import download_icon from '../../assets/download-file.gif';
import report_icon from '../../assets/health-checkup.gif';
import disease_icon from '../../assets/brain-cancer.gif';

function FeatureCard({ title, description, imageUrl }) {
  return (
    <div className="w-full sm:w-64 md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
      <div className="bg-white rounded-lg shadow-md p-6 transition duration-300 hover:bg-purple-600 hover:text-white">
        <img src={imageUrl} alt="Feature" className="w-32 h-32 object-cover mb-4 rounded-lg mx-auto" />
        <h3 className="text-lg font-bold font-montserrat text-center mb-2">{title}</h3>
        <div className="bg-red-500 h-1 w-10 my-2 mx-auto"></div>
        <p className="text-sm font-normal font-montserrat text-center">{description}</p>
      </div>
    </div>
  );
}

function ExploreFeatures() {
  return (
    <div className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold font-montserrat mb-12 text-center">Explore Our Features</h2>
        <div className="flex flex-wrap justify-center">
          <FeatureCard
            title="Upload a File"
            description="The gradual accumulation of information about"
            imageUrl={upload_icon}
          />
          <FeatureCard
            title="Disease Detection"
            description="The gradual accumulation of information about"
            imageUrl={disease_icon}
          />
          <FeatureCard
            title="Download PDF Reports"
            description="The gradual accumulation of information about"
            imageUrl={download_icon}
          />
          <FeatureCard
            title="View Generated Reports"
            description="The gradual accumulation of information about"
            imageUrl={report_icon}
          />
        </div>
      </div>
    </div>
  );
}

export default ExploreFeatures;
