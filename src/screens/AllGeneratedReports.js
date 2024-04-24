import React from 'react';
import Navbar2 from '../components/Navbar2';

const dummyData = [
  { serialNo: 1, reportId: 'RPT001', diseaseType: "Alzheimer's Disease", date: '2024-02-12', downloads: 10 },
  { serialNo: 2, reportId: 'RPT002', diseaseType: "Parkinson's Disease", date: '2024-02-11', downloads: 8 },
  { serialNo: 3, reportId: 'RPT003', diseaseType: 'Multiple Sclerosis', date: '2024-02-10', downloads: 12 },
  
  // Add more dummy data as needed
];

function AllGeneratedReports() {
  return (
    <>
      <Navbar2 />

      <div className="container mx-auto mt-10 px-4">
        <h1 className="font-poppins text-3xl font-bold mb-8">All Generated Reports</h1>

        <div className="overflow-x-auto">
          <table className="table-auto min-w-full divide-y divide-gray-200 shadow">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Serial No.
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Report ID
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Disease Type
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  No. of Downloads
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {dummyData.map((item) => (
                <tr key={item.reportId}>
                  <td className="px-6 py-4 whitespace-nowrap">{item.serialNo}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.reportId}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.diseaseType}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.downloads}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700">
                      Download
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default AllGeneratedReports;