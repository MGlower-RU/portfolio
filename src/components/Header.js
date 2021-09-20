import { useState } from "react";
import { NavLink } from "react-router-dom";

import '../styles/header.scss'

export default function Header() {
  const [isOpened, setIsOpened] = useState(false)

  const navItems = [
    {
      id: 'about',
      name: 'About me'
    },
    {
      id: 'skills',
      name: 'Skills'
    },
    {
      id: 'projects',
      name: 'Projects'
    },
  ]

  const lngs = [
    {
      native: 'ru',
      name: 'ru'
    },
    {
      native: 'en',
      name: 'en'
    },
  ]

  function changeLanguage(e) {
    e.preventDefault()
  }

  function toggleMenu(e) {
    e.preventDefault()
    document.body.classList.toggle('menu-opened')
    setIsOpened(!isOpened)
  }

  function checkHeaderClick(e) {
    console.log('clicked');
    if(e.target.closest('header') === null) {
      document.body.classList.remove('menu-opened')
      setIsOpened(false)
    }
  }

  if(isOpened === true) window.onclick = checkHeaderClick

  return (
    <header className='header__wrapper'>
      <a
        href='/'
        onClick={toggleMenu}
        className='menu__mobile__button'
      >
        {/* use "a" tag as wrapper for clicking
        width/height: 100% */}
        {isOpened ? 'Close' : 'Open'} menu
      </a>
      <div className="menu">
        <div className="nav">
          {
            navItems.map(el => {
              return (
                <NavLink
                  key={el.id}
                  exact={el.id === 'about'}
                  to={`/${el.id}`}
                  className="nav__item"
                >
                  {el.name}
                </NavLink>
              )
            })
          }
        </div>
        <div className="languages">
          {
            lngs.map((el, i) => {
              return (
                <a
                  key={i}
                  href='/'
                  className="language"
                  onClick={changeLanguage}
                >
                  {el.name}
                </a>
              )
            })
          }
        </div>
      </div>
    </header>
  )
}