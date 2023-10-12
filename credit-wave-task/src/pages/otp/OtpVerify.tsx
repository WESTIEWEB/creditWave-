// import { BiSolidLockOpenAlt } from 'react-icons/bi'

import CustomInput from '../../components/customInputs/CustomInput'
import { useEffect, useState } from 'react'
import CustomButton from '../../components/customButton/CustomButton'
import { lock } from '../../constants/images'

const OtpVerify = () => {
    const [otp, setOtp] = useState("")
    const [countdown, setCountdown] = useState(120)
    const [resendDisabled, setResendDisabled] = useState(true)

    useEffect(() => {
        const timer = setInterval(() => {
          if (countdown > 0) {
            setCountdown(countdown - 1);
          } else {
            setResendDisabled(false);
            clearInterval(timer);
          }
        }, 1000); // Update the countdown every second
    
        return () => clearInterval(timer);
      }, [countdown]);
    
      // Function to format the countdown timer as "minutes:seconds"
      const formatCountdown = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
      };


    const handleOtpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOtp(e.target.value)
    }
    const requestOtp = () => {
        setCountdown(120)
        setResendDisabled(true)
    }
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center bg-white'>
        <div className='w-[50%] sm:w-[80%] flex flex-col items-center justify-center gap-10'>
            <div className='bg-[#C1FFF0] w-[88px] rounded-2xl h-[87px] flex justify-center items-center'>
                <img src={lock} className='w-[40px] h-[50px]' />
            </div>

            <div className='w-full flex flex-col gap-4'>
                <p className='w-full text-[#135D54] leading-[21px] text-center font-bold text-[32px]'>Verify Login</p>
                <p className='w-full text-center font-medium text-sm text-[#6F8B84]'>
                 Enter the six (6) digit verification code sent to <br/> +234913*****4** and A******na@creditwaveng.com to continue
                </p>
            </div>

            <CustomInput onClick={requestOtp} placeholder='Verification Code' resendDisabled={resendDisabled} formatCountdown={formatCountdown} type='text' value={otp} counter={countdown} onChange={handleOtpChange} />

            <CustomButton text='Verify' textColor='white' className='rounded-[4px] p-[22px] w-full flex flex-col items-center justify-center h-[24px] text-[white] bg-[#00C795]' link='app/dashboard' style='text-[18px] font-semibold' />
        </div>
            {
                !resendDisabled && (
                    <p className='text-gray-700 text-[14px] w-[50%] flex self-center cursor-pointer -translate-y-[82px]' onClick={requestOtp}>Resend Code</p>
                )
            }
      
    </div>
  )
}

export default OtpVerify
