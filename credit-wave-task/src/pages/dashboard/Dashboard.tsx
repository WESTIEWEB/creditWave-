// import { dashboardItems } from './items'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import SideBar from './components/SideBar'
import { internship, laptop, profile } from '../../constants'

const Home = () => {
    return (
            <div className='w-full h-screen bg-white items-center flex flex-col'>
                <div className='w-[90%] flex my-[50px] flex-col gap-[50px]'>
                    <div className="w-full h-[263px] flex gap-[20px]">
                        <div className='w-[70%] h-full bg-[#00C795] rounded-[10px] flex justify-between p-[25px]'>
                            <div className='w-full '>
                                <p className='font-bold text-[18px] text-white'>
                                Welcome back Kenny!
                                </p>
                                <p className='font-medium text-white text-[0.5em]'>
                                Your last login was 12:00pm 09 Jul, 2023
                                </p>
                            </div>
                            <img src={laptop} alt='desktop' className='h-[143px] w-[223px]'/>
                        </div>
                        <div className='w-[30%] bg-white rounded-[10px] flex flex-col justify-center items-center h-full 'style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
                            <img src={profile} alt='profile image'/>
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

                    <div className="w-full h-[532px] flex gap-[20px]">
                        <div className='w-[70%] h-full rounded-[10px] bg-white  flex justify-between p-[25px]' style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
                                                    
                        </div>
                        <div className='w-[30%]  bg-white flex flex-col justify-center items-center h-full gap-5 '>
                            <div className='w-full rounded-[10px] h-1/2' style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}></div>
                            <div className='w-full rounded-[10px] h-1/2 grid place-items-center' style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
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

  return (
    <div className='w-screen h-auto flex'>
        <SideBar />
        <div className='w-[80%] min-h-screen'>
            <Header />
            <Routes>
                <Route path='' element={<Home />} />
            </Routes>
        </div>
    </div>
  )
}

export default Dashboard
