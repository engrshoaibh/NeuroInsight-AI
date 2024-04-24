// import React from 'react';
// import profilepic from '../../assets/ProfilePic.svg'
// function TeamMember({ name, imageUrl }) {
//   return (
//     <div className="flex flex-col items-center justify-center w-60">
//       <img src={imageUrl} alt="Team Member" className="w-24 h-24 rounded-full mb-2" />
//       <h3 className="text-lg font-semibold font-montserrat">{name}</h3>
//     </div>
//   );
// }

// function MeetOurTeam() {
//   return (
//     <div className="py-20 custom-bg-color">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//         <h2 className="text-4xl font-bold font-montserrat mb-12">Meet Our Team</h2>
//         <div className="flex justify-center">
//           <TeamMember name="John Doe" imageUrl={profilepic} />
//           <TeamMember name="Jane Smith" imageUrl={profilepic} />
//           <TeamMember name="Mark Johnson" imageUrl={profilepic} />
//           <TeamMember name="Emily Brown" imageUrl={profilepic}/>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default MeetOurTeam;


import React from 'react';
import profilepic from '../../assets/ProfilePic.svg'

function TeamMember({ name, imageUrl }) {
  return (
    <div className="flex flex-col items-center justify-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4">
      <img src={imageUrl} alt="Team Member" className="w-24 h-24 rounded-full mb-2" />
      <h3 className="text-lg font-semibold font-montserrat">{name}</h3>
    </div>
  );
}

function MeetOurTeam() {
  return (
    <div className="py-20 custom-bg-color">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold font-montserrat mb-12">Meet Our Team</h2>
        <div className="flex flex-wrap justify-center">
          <TeamMember name="Muhammad Talha" imageUrl={profilepic} />
          <TeamMember name="Shoaib Hassan" imageUrl={profilepic} />
          <TeamMember name="Muhammad Abdullah Nasim" imageUrl={profilepic} />
          <TeamMember name="Muallam Hussain" imageUrl={profilepic}/>
        </div>
      </div>
    </div>
  );
}

export default MeetOurTeam;
