import { FaGoogle } from 'react-icons/fa';

export default function Button2(content) {
  const iconMap = {
    google : <FaGoogle className={content.icon_style} />
  };
  return (
  
      <button onClick={content.handleGoogleSignIn} className="bg-black text-white flex justify-center px-4 py-2 rounded-md hover:bg-gray-800 transition duration-300">
        {iconMap[content.icon]}
        {content.title}
      </button>
    );
  
}
