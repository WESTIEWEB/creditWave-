import { AiOutlineMenuFold, AiOutlineMenuUnfold } from 'react-icons/ai'

type HeaderProps = {
    togglrSideBar: () => void;
    sidebarOpen: boolean;
}

const Header: React.FC<HeaderProps> = ({ sidebarOpen, togglrSideBar }) => {
  return (
    <div className='w-full flex h-[60px] bg-[#135D54] sticky items-center ' >
        <button className='ml-5 self-center'>
            {
                sidebarOpen ? (
                    <AiOutlineMenuFold className='w-[24px] h-[24px] text-white' onClick={togglrSideBar}/>
                ) : (
                    <AiOutlineMenuUnfold className='w-[24px] h-[24px] text-white' onClick={togglrSideBar}/>
                )
            }
        </button>
    </div>
  )
}

export default Header
