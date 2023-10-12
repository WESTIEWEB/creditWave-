import React from 'react'
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai"

type CustomInputProps = {
    placeholder?: string;
    type?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    label?: string;
    setShowPassword?: React.Dispatch<React.SetStateAction<boolean>>;
    showPassword?: boolean;
    labelColor?: string;
    textColor?: string;
    placeholderColor?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({
    placeholder,
    type,
    showPassword,
    setShowPassword,
    value,
    textColor,
    onChange,
    label
}) => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
        <label className=''>
            {label}
        </label>
        {
            type === "password" ? (
                <div className="relative w-full">
                    <input type={showPassword ? type : 'text'} value={value} onChange={onChange} placeholder={placeholder} className={`w-full border-[1px] rounded-[4px] border-[#BFCCC9] px-[12px] py-[8px] self-center text-[${textColor}]`}/>
                    {
                        showPassword ? (
                            <AiOutlineEyeInvisible className="absolute top-[12px] !text-['black'] right-[12px] cursor-pointer" onClick={() => setShowPassword && setShowPassword(!showPassword)}/>
                        ) : (
                            <AiOutlineEye
                                className="absolute top-[12px] right-[12px] !text-['black'] cursor-pointer"
                                onClick={() => setShowPassword && setShowPassword(!showPassword)}
                            />
                        )
                    }
                </div>
            ) : (
                <input type={type} placeholder={placeholder} onChange={onChange} value={value} className={`w-full border-[1px] rounded-[4px] border-[#BFCCC9] px-[12px] py-[8px] self-center text-[${textColor}]`}/>
            )

        }
    </div>
  )
}

export default CustomInput
