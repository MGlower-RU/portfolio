import { useContext } from 'react'
import { DataContext } from '../contexts/DataContext'

import '../styles/skills.scss'

export default function Skills() {
  const { skills } = useContext(DataContext)

  function openSkill(e) {
    e.preventDefault()

    document
    .querySelectorAll('.skills__item--extra')
    .forEach(el => {
      el === e.target ? e.target.classList.toggle('active') : el.classList.remove('active')
    })

    window.addEventListener('click', checkSkillClick)

    const list = e.target.parentNode.querySelector('ul')
    const wrapper = document.querySelector('.skills__wrapper').getBoundingClientRect()

    if(list.getBoundingClientRect().right > wrapper.right) {
      list.style.left = 'auto';
      list.style.right = 0;
    } else if(list.getBoundingClientRect().left <= 0) {
      list.style.left = 0;
      list.style.right = 'auto';
    }
  }

  function checkSkillClick(e) {
    let itemContainer = e.target.closest('.skills__item');
    if(itemContainer === null || itemContainer.children.length < 2) {
      document
      .querySelectorAll('.skills__item--extra')
      .forEach(el => el.classList.remove('active'))

      window.removeEventListener('click', checkSkillClick)
    }
  }

  return (
    <div className="skills__wrapper">
      {
        skills.map((el, i) => {
          return (
            <div key={i} className="skills__list__wrapper">
              <h2 className="skills__list__header">
                {el.name}
              </h2>
              <ul className="skills__list">
                {
                  el.items.map((el, i) => {
                    return (
                      <div key={i} className="skills__item">
                        {
                          el.items !== undefined ?
                          <>
                            <a
                              href="/"
                              onClick={openSkill}
                              className='skills__item--extra'
                            >
                              {el.name}
                            </a>
                            <ul>
                              {
                                el.items.map((el, i) => {
                                  return (
                                    <li key={i}>
                                      {el}
                                    </li>
                                  )
                                })
                              }
                            </ul>
                          </>
                          :
                          <p>
                            {el.name}
                          </p>
                        }
                      </div>
                    )
                  })
                }
              </ul>
            </div>
          )
        })
      }
    </div>
  )
}