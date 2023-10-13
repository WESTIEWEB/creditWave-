// import { dashboardItems } from './items'
import { Link, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import SideBar from './components/SideBar'
import { internship, laptop, profile, receovery, singleSignOn } from '../../constants'
import { useState } from 'react'
import Calender from './components/Calender'

// Install date library (if not already installed)
// npm install dayjs
const Home = () => {
    return (
            <div className='w-full box-border min-h-screen bg-white items-center overflow-auto flex flex-col'>
                <div className='w-[90%] flex my-[50px] flex-col gap-[50px]'>
                    <div className="w-full sm:auto sm:flex-col flex gap-[20px] items-center">
                        <div className='w-[70%] h-[263px] sm:w-[80%] sm:flex-col bg-[#00C795] rounded-[10px] flex justify-between p-[25px]'>
                            <div className='w-auto'>
                                <p className='font-bold text-[18px] text-white'>
                                Welcome back Kenny!
                                </p>
                                <p className='font-medium text-white text-[0.5em]'>
                                Your last login was 12:00pm 09 Jul, 2023
                                </p>
                            </div>
                            <img src={laptop} alt='desktop' className='h-[143px] w-[223px]'/>
                        </div>
                        <div className='w-[30%] h-[263px] sm:w-[80%]  bg-white rounded-[10px] flex flex-col justify-center items-center 'style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
                            <Link to=''><img src={profile} alt='profile image'/></Link>
                            <div className='w-auto'>
                                <p className='font-bold text-center text-base text-[#343434]'>
                                    Adekunle Adebona
                                </p>
                                <p className='font-medium text-[12px] text-center text-[#343434]'>
                                UI/UX Designer
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="w-full h-auto flex gap-[20px] sm:flex-col items-center mb-5">
                        <div className='w-[70%] h-[532px] rounded-[10px] bg-white sm:w-[80%] flex-col flex gap-[30px] p-[25px]' style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
                            <div className='w-full flex justify-between items-center mt-5'>
                                <p className='text-[#384642] font-semibold text-lg'>
                                    Applications
                                </p>
                                <span className='font-bold text-sm text-[#384642]'>See more</span>
                            </div>
                            
                            <div className='w-full h-auto sm:flex-col flex gap-3 mt-5'>

                                <div className='w-[220px] h-[144px] justify-center items-center flex flex-col rounded-[10px] bg-[#DDFFF7] '>
                                    <div className='w-[85%] flex self-center flex-col'>
                                        <div className='w-full flex flex-col gap-1'>
                                            <img src={receovery} className='w-[26px] h-[24px]' alt='recovery' />
                                            <p className='font-bold text-lg text-[#384642]'>
                                                Revovery
                                            </p>
                                        </div>
                                        <div className='w-full self-start flex justify-between items-center'>
                                            <span className='bg-[text-white font-medium text-[12px] text-[#343434'>
                                                01/08/2023
                                            </span>
                                            <span className='bg-[#135D54] text-white font-medium text-[8.5px] rounded-[4px]'>
                                                Active
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className='w-[220px] h-[144px] justify-center items-center flex flex-col rounded-[10px] bg-[#DDFFF7] '>
                                    <div className='w-[85%] flex self-center flex-col'>
                                        <div className='w-full flex flex-col gap-1'>
                                            <img src={singleSignOn} className='w-[26px] h-[24px]' alt='single-sign on' />
                                            <p className='font-bold text-lg text-[#384642]'>
                                                Single Sign-On
                                            </p>
                                        </div>
                                        <div className='w-full self-start flex justify-between items-center'>
                                            <span className='bg-[text-white font-medium text-[12px] text-[#343434'>
                                                01/08/2023
                                            </span>
                                            <span className='bg-[#135D54] text-white font-medium text-[8.5px] rounded-[4px]'>
                                                Active
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                                                    
                        </div>
                        <div className='w-[30%] h-[532px] sm:w-[80%] bg-white flex flex-col justify-center items-center gap-5 '>
                            <div className='w-full overflow-scroll items-stretch rounded-[10px] h-1/2' style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
                                <Calender />
                            </div>
                            <div className='w-full  rounded-[10px] h-1/2 grid place-items-center sm:grid-cols-2' style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
                                <img src={internship} alt='internship' />
                                <div className='w-[80%]'>
                                    <p className='font-bold text-lg text-center text-[#343434]'>
                                        Need Help?
                                    </p>
                                    <p className='font-medium text-center text-[12px] text-[#343434]'>
                                    Do you have any problem while using the Creditwave SSO?
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
    )
}

const Dashboard = () => {
    const [sidebarOpen, setSidebarOpen] = useState<boolean>(true)

    const toggleSideBar = () => {
        setSidebarOpen(!sidebarOpen)
    }

    const sideWidth = sidebarOpen ? 'w-[20%] sm:!w-[45vw] md:w-[30%]' : 'w-[0%] sm:w-[0] md:w-[0%]'
    const sideWidth2 = sidebarOpen ? 'w-[80%] sm:!w-[100vw] md:w-[70%]' : 'w-[100%] sm:w-[100vw] md:w-[100%]'

  return (
    <div className='w-screen flex box-border'>
        <SideBar sidebarOpen={sidebarOpen} toggleSideBar={toggleSideBar} sideWidth={sideWidth}/>
        <div className={`${sideWidth2} min-h-[1020px]`}>
            <Header toggleSideBar={toggleSideBar} sidebarOpen={sidebarOpen}/>
            <Routes>
                <Route path='' element={<Home />} />
            </Routes>
        </div>
    </div>
  )
}

export default Dashboard
