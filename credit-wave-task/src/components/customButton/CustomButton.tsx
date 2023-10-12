import React from 'react'
import { Link } from 'react-router-dom';

type CustomButtonProps = {
    bgColor?: string;
    textColor?: string;
    text?: string;
    width?: string;
    height?: string;
    className?: string;
    onClick?: () => void;
    link?: string;
    style?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
    className,
    bgColor,
    textColor,
    width,
    height,
    text,
    onClick,
    link,
    style
}) => {
  return (
    <div onClick={onClick} className={`${className ? className : `p-4 w-[${width}] h-[${height}] text-[${textColor}] bg-[${bgColor}]`}`}>
        <Link to={link ? link : ""}>
            <button onClick={onClick} className={`w-full h-full !text-[${textColor}] ${style}`}>
                {text}
            </button>
        </Link>
    </div>
  )
}

export default CustomButton
