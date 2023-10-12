// import { dashboardItems } from './items'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import SideBar from './components/SideBar'
import { laptop, profile } from '../../constants'

const Home = () => {
    return (
            <div className='w-full h-screen bg-white justify-center flex'>
                <div className='w-[90%] flex my-8 gap-[10px]'>
                <div className='w-[70%] h-[263px] bg-[#00C795] flex justify-between p-[25px]'>
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
                <div className='w-[30%] bg-white flex flex-col justify-center items-center h-[263px] 'style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
                    <img src={profile} alt='profile image'/>
                </div>
                </div>
            </div>
    )
}

const Dashboard = () => {

  return (
    <div className='w-screen h-auto flex'>
        {/* <div className='w-[20%] bg-white flex flex-col items-center min-h-screen' style={{ boxShadow: '5px 0px 5px rgba(0, 0, 0, 0.1)' }}>
            <img src={logo} alt='logo' className='w-[100px] h-auto' />

                <div className='overflow-scroll w-full flex flex-col items-center justify-center'>
                    {
                        dashboardItems.map((item, index) => {
                            return (
                                <div className='w-full flex items-center px-4 gap-5' key={index}>
                                    <img className='w-[24px] h-[24px]' src={item.icon} alt={`dashboard item ${index}`} />
                                    <p className='text-[13px] text-center'>
                                        {item.name}
                                    </p>
                                    
                                    {
                                        item.dropItem && (

                                        )
                                    }
                                </div>
                            );
                        })
                    }
                </div>

            </div> */}
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
