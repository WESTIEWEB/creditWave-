import React, { useState } from 'react'
import { RiArrowDropUpLine, RiArrowDropDownLine } from 'react-icons/ri'

import { logo } from '../../../constants/images'

import { dashboardItems } from '../items'
import { Link } from 'react-router-dom'

// type SideBarProps = {
//     items?: []
// }

type DropItemP = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  items : any;
  onClick: (item: string) => void
}

const DropItem = ({ items, onClick }: DropItemP) => {
  return (
    <ul className='w-full h-auto'>
      {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        items?.map((item: any) => (
          <li className='w-full' key={item && item.name} onClick={() => onClick(item.name)}>

          </li>
        ))
      }
    </ul>
  )

}

const SideBar = () => {
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
    <div className='relative w-[20%] bg-white flex flex-col items-center min-h-[1024px]' style={{ boxShadow: '5px 0px 5px rgba(0, 0, 0, 0.1)' }}>
      <div className="h-[60px] flex w-[85%] pl-[10x] items-center justify-start"><img src={logo} alt='logo' className='ml-[10px] w-[88px] h-[31px]' /></div>
      <ul className='w-[85%] flex flex-col mt-[15px] gap-[20px]'>
        {
          dashboardItems.map((itm, index) => (
            <>
            <li className='w-full flex items-center justify-center gap-5' key={index}>
              <img className='w-[24px] h-[24px]' src={itm.icon} alt={`dashboard item ${index}`} />
              <Link to={selected} className='w-full flex'>
              <p className='text-[13px] text-center'>
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
              <DropItem items={itm} onClick={handleSelect}/>
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
