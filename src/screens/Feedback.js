import React from 'react';
import Navbar2 from '../components/Navbar2';

function Feedback() {

  return (
    <>
      <Navbar2 />
      <div className="container mx-auto mt-10 px-4">
        <h1 className="font-poppins text-3xl font-bold mb-8">Feedback</h1>
        <div className="flex flex-col items-center">
          <form className="w-full max-w-md">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="feedbackTextarea">Give Feedback:</label>
              <textarea id="feedbackTextarea" className="resize-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Type your feedback here..." rows="5"></textarea>
            </div>
            <div className="flex justify-center w-full px-3">
              <button className="bg-purple-600 text-white py-2 px-8 rounded-lg w-full md:w-auto">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Feedback;
