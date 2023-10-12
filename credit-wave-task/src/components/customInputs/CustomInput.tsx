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
    counter?: number;
    formatCountdown?: (seconds: number) => string;
    resendDisabled?: boolean;
    onClick?: () => void;
}

const CustomInput: React.FC<CustomInputProps> = ({
    placeholder,
    type,
    showPassword,
    setShowPassword,
    value,
    textColor,
    onChange,
    label,
    counter,
    formatCountdown,
    resendDisabled,
}) => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
        <label className=''>
            {label}
        </label>
        {
            counter ? (
                <div className='relative w-full h-[50px] flex flex-col'>
                    <input type={type} placeholder={placeholder} onChange={onChange} value={value} className={`w-full border-[1px] rounded-[4px] leading-6 h-full border-[#BFCCC9] px-[12px] py-[10px] self-center text-[${textColor}]`}/>
                    {resendDisabled && (
                    <span className="!text-[#00C796] text-base absolute top-[12px] font-normal right-[12px] cursor-pointer">
                        {formatCountdown && formatCountdown(counter)}
                    </span>
                    )}
                </div>
            ) : 
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
