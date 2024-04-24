import React from 'react';
import { Link } from 'react-router-dom';
const Button = ({text, href, bgColor, textColor, hoverBgColor, hoverTextColor,fontStyle} ) => {
  
  return (
    <Link
      to={href}
      className={`bg-${bgColor} text-${textColor} hover:bg-${hoverBgColor} hover:text-${hoverTextColor} text-center rounded-md py-2 px-4 font-regular font-${fontStyle} transition duration-300`}
    >
      {text}
    </Link>
  );
}

export default Button;
