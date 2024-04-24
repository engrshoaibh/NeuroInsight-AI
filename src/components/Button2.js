import { RiUserSettingsLine, RiLockPasswordLine } from "react-icons/ri";
import { FaGoogle } from 'react-icons/fa';
import { Link } from "react-router-dom";
export default function Button2(content) {
  const iconMap = {
    password: <RiLockPasswordLine className={content.icon_style} />,
    input: <RiUserSettingsLine className={content.icon_style} />,
    google : <FaGoogle className={content.icon_style} />
  };
  return (
    <Link to={content.href} className="bg-purple-600 text-white px-4 py-2 rounded-md flex items-center text-center">
      {iconMap[content.icon]}
      {content.title}
    </Link>
  );
}
