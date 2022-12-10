import Link from 'next/link'
import Image from 'next/image'
import React, { useContext } from 'react'
import { LayoutContext } from '../contexts/LayoutContext'
import { menuItems } from '../utils/constants';
import { useRouter } from 'next/router'

const NavMenu = () => {
  const { toggleMenu, setToggleMenu } = useContext(LayoutContext);
  return (
    <div>
      <MenuItems className={'md:flex hidden gap-6 md:gap-2 lg:gap-6'} />
      <ul className="md:hidden flex gap-6">
        <li onClick={() => setToggleMenu(prev => !prev)}>
          <Image src={!toggleMenu ? `/images/menu.png` : `/images/close.png`} height={24} width={24} alt="menu" />
        </li>
      </ul>
      <div className={`h-full w-full bg-primary z-10 fixed top-12 p-4 pt-8 left-0 ${!toggleMenu ? "hidden" : ''} md:hidden`}>
        <MenuItems className="flex md:hidden flex-col" />
      </div>
    </div>
  )
}
const MenuItems = ({ className }) => {
  const router = useRouter();
  return (
    <ul className={className}>
      {
        menuItems.map(menu =>
          <li className='p-2' key={menu.name}>
            <Link className={`${router.asPath === menu.path ? 'font-bold' : ''}`} href={menu.path}>{menu.name}</Link>
          </li>
        )
      }
      <li className='my-2 md:my-0 py-2 px-2'>
        <Link className='py-2 px-8 border border-hiring rounded-sm2' href="/we-are-hiring">We Are Hiring</Link>
      </li>
    </ul>
  )
}
export default NavMenu