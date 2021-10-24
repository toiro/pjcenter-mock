import Link from 'next/link'
import { useState } from 'react'
import { CgMenu } from 'react-icons/cg'
import { CgClose } from 'react-icons/cg'
import { HiAcademicCap } from 'react-icons/hi'

const navbar = () => {
  const [active, setActive] = useState(false)

  const onMenuClick = () => {
    setActive(!active)
  }

  const onItemClick = () => {
    setActive(false)
  }

  const getActiveProp = () => {
    return active ? '' : 'hidden'
  }

  const menuItems = [
    { label: 'Top', ref: '' },
    { label: 'Services', ref: '' },
    { label: 'About us', ref: '' },
    { label: 'Contact us', ref: '' },
  ]

  var menuContent = []
  for (var i in menuItems) {
    menuContent.push(
      <Link href={menuItems[i].ref}>
        <a
          className="md:inline-flex md:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white "
          onClick={onItemClick}
        >
          {menuItems[i].label}
        </a>
      </Link>
    )
  }

  return (
    <>
      <nav className="flex items-center flex-wrap bg-green-300 p-3">
        <button
          className="inline-flex p-3 hover:bg-green-600 rounded md:hidden text-white hover:text-white outline-none"
          onClick={onMenuClick}
        >
          {active ? <CgClose size={'2rem'} /> : <CgMenu size={'2rem'} />}
        </button>
        <Link href="/">
          <a
            className="inline-flex items-center p-2 mr-4"
            onClick={onMenuClick}
          >
            <HiAcademicCap size={'2rem'} color={'#fff'} />
            <span className="text-xl text-white font-bold uppercase tracking-wide">
              ものづくり部門
            </span>
          </a>
        </Link>
        <div
          className={`${getActiveProp()} w-full md:inline-flex md:flex-grow md:w-auto`}
        >
          <div className="md:inline-flex md:flex-row md:ml-auto md:w-auto w-full md:items-center items-start flex flex-col md:h-auto">
            {menuContent}
          </div>
        </div>
      </nav>
    </>
  )
}

export default navbar
