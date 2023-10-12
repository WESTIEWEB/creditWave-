// import { dashboardItems } from './items'
import { Link, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import SideBar from './components/SideBar'
import { internship, laptop, profile } from '../../constants'
import { useState } from 'react'
import Calender from './components/Calender'

// Install date library (if not already installed)
// npm install dayjs
const Home = () => {
    return (
            <div className='w-full box-border h-screen bg-white items-center overflow-auto flex flex-col'>
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

                    <div className="w-full h-auto flex gap-[20px] sm:flex-col items-center mb-10">
                        <div className='w-[70%] h-[532px] rounded-[10px] bg-white sm:w-[80%]  flex justify-between p-[25px]' style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
                            <div>

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

    const togglrSideBar = () => {
        setSidebarOpen(!sidebarOpen)
    }

    const sideWidth = sidebarOpen ? 'w-[20%] sm:w-[40vw] md:w-[30%]' : 'w-[5%] sm:w-[10vw] md:w-[10%]'
    const sideWidth2 = sidebarOpen ? 'w-[80%] sm:w-[60vw] md:w-[70%]' : 'w-[100%] sm:w-[100vw] md:w-[100%]'

  return (
    <div className='w-screen flex box-border'>
        <SideBar sidebarOpen={sidebarOpen} sideWidth={sideWidth}/>
        <div className={`${sideWidth2} min-h-screen`}>
            <Header togglrSideBar={togglrSideBar} sidebarOpen={sidebarOpen}/>
            <Routes>
                <Route path='' element={<Home />} />
            </Routes>
        </div>
    </div>
  )
}

export default Dashboard
