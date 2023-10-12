import { AiOutlineMenuFold, AiOutlineMenuUnfold } from 'react-icons/ai'

type HeaderProps = {
    toggleSideBar: () => void;
    sidebarOpen: boolean;
}

const Header: React.FC<HeaderProps> = ({ sidebarOpen, toggleSideBar }) => {
  return (
    <div className='w-full flex h-[60px] bg-[#135D54] sticky items-center ' >
        <button className='ml-5 self-center'>
            {
                sidebarOpen ? (
                    <AiOutlineMenuFold className='w-[24px] h-[24px] text-white' onClick={toggleSideBar}/>
                ) : (
                    <AiOutlineMenuUnfold className='w-[24px] h-[24px] text-white' onClick={toggleSideBar}/>
                )
            }
        </button>
    </div>
  )
}

export default Header
