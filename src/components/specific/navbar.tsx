import React, { useState } from 'react'
import ctl from '@netlify/classnames-template-literals'
import Link from 'next/link'
import { CgMenu } from 'react-icons/cg'
import { CgClose } from 'react-icons/cg'
import { HiAcademicCap } from 'react-icons/hi'

// inline-flex で hidden を上書き（display: none → inline-flex）
const menuCN = (display: boolean) =>
  ctl(`
  ${!display && `hidden`}
  w-full
  md:inline-flex
  md:flex-grow
  md:w-auto
  `)

export type MenuItemDefinition = {
  [key: string]: MenuItem
}

export type MenuItem = {
  label: string
  href: string
}

type Prop = {
  menuItems: MenuItemDefinition
}

const navbar: React.FC<Prop> = ({ menuItems }) => {
  const [isMenuActive, setMenuActive] = useState(false)
  const toggleMenu = () => setMenuActive(!isMenuActive)
  const closeMenu = () => setMenuActive(false)

  var menuContent = []
  for (let [key, value] of Object.entries(menuItems)) {
    menuContent.push(
      <Link href={value.href} key={key}>
        <a
          className="items-center justify-center px-3 py-2 w-full text-white hover:text-white font-bold hover:bg-green-600 rounded md:inline-flex md:w-auto"
          onClick={closeMenu}
        >
          {value.label}
        </a>
      </Link>
    )
  }

  return (
    <>
      <nav className="flex flex-wrap items-center p-3 bg-green-300">
        <button
          className="inline-flex p-3 text-white hover:text-white hover:bg-green-600 rounded outline-none md:hidden"
          onClick={toggleMenu}
        >
          {isMenuActive ? <CgClose size={'2rem'} /> : <CgMenu size={'2rem'} />}
        </button>
        <Link href="/">
          <a className="inline-flex items-center mr-4 p-2" onClick={closeMenu}>
            <HiAcademicCap size={'2rem'} color={'#fff'} />
            <span className="text-white text-xl font-bold tracking-wide uppercase">
              ものづくり部門
            </span>
          </a>
        </Link>
        <div className={menuCN(isMenuActive)}>
          <div className="flex flex-col items-start w-full md:inline-flex md:flex-row md:items-center md:ml-auto md:w-auto md:h-auto">
            {menuContent}
          </div>
        </div>
      </nav>
    </>
  )
}

export default navbar
