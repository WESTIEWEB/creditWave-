import React, { useState } from 'react'
import { RiArrowDropUpLine, RiArrowDropDownLine } from 'react-icons/ri'
import { AiOutlineMenuFold } from 'react-icons/ai'

import { logo } from '../../../constants/images'

import { dashboardItems } from '../items'
import { Link } from 'react-router-dom'
import { DropItemsT } from '../interface'

// type SideBarProps = {
//     items?: []
// }

type DropItemP = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  items : any;
  onClick: (item: string) => void;
  selectedDropdown: string | null;
}

const DropItem = ({ items, onClick, selectedDropdown }: DropItemP) => {
  return (
    <>
      {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        items?.map((item: DropItemsT) => (
          item.name === selectedDropdown && (
          <ul className='w-[80%] h-auto self-center px-[10px] overflow-y-auto items-center justify-center' onClick={() => onClick(item.name)}>
          <Link to={item.link} className='w-full flex'>
          <li className={`flex w-[80%] items-center text-[0.65em] font-medium text-gray-400  text-center`} key={item && item.name.toString()} onClick={() => onClick(item.name)}>
            {item.name}    
          </li>
          </Link>
          </ul>
          )
        ))
      }
    </>
  )

}

type SideBarProps = {
  sidebarOpen: boolean;
  sideWidth: string;
  toggleSideBar: () => void;
}
const SideBar:React.FC<SideBarProps> = ({
  sidebarOpen,
  sideWidth,
  toggleSideBar,
}) => {
  const [selected, setSelected] = useState<string>('')
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  


  const handleSelect = (item: string) => {
    setSelected(item)
    if (openDropdown === item) {
      // If the clicked item is the same as the open dropdown, close it.
      setOpenDropdown(null);
    } else {
      // If a different item is clicked, open its dropdown.
      setOpenDropdown(item);
    }
  };
  return (
    <div className={`relative ${sideWidth} sm:absolute sm:z-50 bg-white flex flex-col items-center min-h-[1020px] overflow-y-auto overflow-x-hidden`} style={{ boxShadow: '5px 0px 5px rgba(0, 0, 0, 0.1)', display: !sidebarOpen ? 'none' : ''  }}>
      <div className="h-[60px] flex w-[85%] pl-[10x] items-center justify-start relative">
        <img src={logo} alt='logo' className='ml-[10px] w-[88px] h-[31px]' /> 
        {
          sidebarOpen && (
            <AiOutlineMenuFold onClick={toggleSideBar} className="hidden sm:block text-[24px] absolute right-0 translate-x-2 text-[#00C796] cursor-pointer"/>
          )
        }
      </div>
      <ul className='w-full justify-center items-center flex flex-col mt-[25px] gap-[15]'>
        
        {
          dashboardItems.map((itm) => (
            <>
            {
              itm.dropItem ? (
            <>
              <li className={`w-full p-[10px] flex items-center justify-center gap-5`} key={itm.name.toString()}>
                <img className='w-[24px] h-[24px] md:w-[12px] md:h-[12px]' src={itm.icon} alt={itm.name} />
                <Link to={selected} className='w-full flex'>
                <p className='text-[0.7em] font-medium text-[#072320] text-center'>
                    {itm.name}
                </p>
                </Link>
                {itm.dropItem && (
                <div onClick={() => handleSelect(itm.name)}>
                  {openDropdown === itm.name ? <RiArrowDropUpLine className="text-[24px] text-[#00C796] cursor-pointer" /> : <RiArrowDropDownLine className="text-[24px] text-[#00C796] cursor-pointer"/>}
                </div>
                )}
              </li>
              {
              openDropdown && (
              <DropItem items={itm.dropItem} selectedDropdown={openDropdown} onClick={handleSelect}/>
              )
              }
            </>
            ): (
              <li className={`w-full flex p-[10px] items-center justify-center gap-5 `} key={itm.name.toString()}>
              <img className='w-[24px] h-[24px] md:w-[12px] md:h-[12px]' src={itm.icon} alt={itm.name} />
              <Link to={selected} className='w-full flex'>
                <p className='text-[0.7em] font-medium text-[#072320] text-center'>
                    {itm.name}
                </p>
              </Link>
              </li>
            )
            }
            </>
          ))
        }

      </ul>
            
    </div>
  )
}

export default SideBar
