import { useState } from "react";

import { logo } from "../../constants/images"
import CustomInput from "../../components/customInputs/CustomInput";
import CustomButton from "../../components/customButton/CustomButton";
import CopyRight from "../../components/copyRight/CopyRight";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const passwordChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }

  const usernameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  }

  return (
    <div className="relative w-full flex flex-wrap h-screen items-center">
        <div className="w-1/2 bg-[#00C795] h-screen sm:hidden">
            <p className="font-inter">Adroid</p>
            <p className="font-inter">We evaluate and monitor the non-performing loan accounts and implement a recovery action plan to achieve timely and maximum recovery at a minimal cost and appropriate turn-around time through acceptable common practices aligned with legal framework and standards.</p>
        </div>
        <div className="w-1/2 h-screen bg-white flex flex-col justify-center items-center">
          <div className="w-[70%] h-full items-center flex flex-col gap-8">
            <div className="h-[20%]"></div>
            <div className="w-full h-auto flex flex-col justify-center items-center">
              <img src={logo} alt="logo" className="w-[200px] h-[auto]"/>
            </div>
            
            <CustomInput value={username} type="text" placeholder="Username" onChange={usernameChangeHandler} textColor="black" />
            <CustomInput value={password} type="password" placeholder="Password" onChange={passwordChangeHandler} textColor="black" showPassword={showPassword} setShowPassword={setShowPassword} />
            <CustomButton textColor="white" text="Login" className="rounded-[4px] p-[22px] w-full flex flex-col items-center justify-center h-[24px] text-[white] bg-[#00C795]" link="app/otp-verify" style="text-[18px] font-semibold" />

            <CopyRight className="text-[#135D54] font-medium text-[13px] flex self-end translate-y-20" text="© 2023 CreditWave Finance Limited | All Rights Reserved" />
          </div>
        </div>
      
    </div>
  )
}

export default Login
