// import { dashboardItems } from './items'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import SideBar from './components/SideBar'
import { laptop, profile } from '../../constants'

const Home = () => {
    return (
            <div className='w-full h-screen bg-white justify-center flex'>
                <div className='w-[90%] flex my-8 gap-[10px]'>
                <div className='w-[60%] h-[263px] bg-[#00C795]'>
                    <img src={laptop} alt='desktop'/>
                </div>
                <div className='w-[40%] bg-white flex flex-col justify-center items-center h-[263px] 'style={{ boxShadow: '2px 2px 2px 2px 2px rgba(0, 0, 0, 0.1)' }}>
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
        <div className='w-[75%] min-h-screen'>
            <Header />
            <Routes>
                <Route path='' element={<Home />} />
            </Routes>
        </div>
    </div>
  )
}

export default Dashboard
