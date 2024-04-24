import React from 'react';
import Navbar2 from '../components/Navbar2';
import { useLocation } from 'react-router-dom';

const CounterCard = ({ title, count }) => {
  return (
      <div className="flex flex-col items-center justify-center p-6 text-white rounded-lg bg-gradient-to-b from-purple-500 to-purple-700 shadow-lg mb-8 lg:mb-0 lg:w-1/3 lg:mr-4">
          <h2 className="text-center font-poppins font-bold text-xl mb-4">{title}</h2>
          <p className="text-center font-poppins font-bold text-3xl">{count}</p>
      </div>
  );
}

function Dashboard() {
    const location = useLocation();
    const userData = location.state?.user;
    return (
        <>
            <Navbar2 profileimage = {userData.profileimage} name = {userData.name}/>
            <div className="flex flex-col items-center py-20 px-4 lg:px-8"> {/* Added px-4 lg:px-8 for horizontal padding */}
                <h1 className="text-center font-poppins font-bold text-2xl mb-8">Welcome Back! {userData?.name} 🎉</h1>

                <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between w-full lg:w-4/5 xl:w-3/5"> {/* Adjusted width and alignment */}
                    {/* Counter Card 1 */}
                    <CounterCard title={"Brain Tumor Results"} count={"00"} />

                    {/* Counter Card 2 */}
                    <CounterCard title={"Alzheimer’s Results"} count={"00"} />

                    {/* Counter Card 3 */}
                    <CounterCard title={"Downloaded Reports"} count={"00"} />
                </div>
            </div>
        </>
    );
}

export default Dashboard;
