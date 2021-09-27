import React, { useContext } from 'react';
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { i18nContext } from '../contexts/i18nextContext'

import '../styles/header.scss'

export default function Header() {
  const { lngDetect, t } = useContext(i18nContext)
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
      native: 'en-US',
      name: 'en'
    },
  ]

  function changeLanguage(e) {
    e.preventDefault()
    lngDetect.changeLanguage(e.target.dataset.lngNative)
    document.querySelectorAll('.language')
    .forEach(el => {
      el !== e.target ? el.classList.remove('current') : el.classList.add('current')
    })
  }

  function toggleMenu(e) {
    e.preventDefault()
    document.body.classList.toggle('menu-opened')
    setIsOpened(!isOpened)
  }

  function checkHeaderClick(e) {
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
        <span>
          {isOpened ? 'Close' : 'Open'} menu
        </span>
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
                  {t(`header.nav.${el.id}`)}
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
                  data-lng-native={el.native}
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