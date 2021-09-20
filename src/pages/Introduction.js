import { useContext } from "react"
import { DataContext } from "../contexts/DataContext"

import Arrow from '../images/arrow_down.svg'

import '../styles/about.scss'

export default function Introduction() {
  const { hobbies } = useContext(DataContext)

  return (
    <div className="introduction__wrapper">
      <div className="introduction__header">
        <div className="introduction__title">
          <div className="introduction__title__profession">
            <h2>
              I'm a
            </h2>
            <h1>
              Frontend developer
            </h1>
          </div>
          <div className="introduction__title__name">
            <h2>
              My name is
            </h2>
            <h1>
              Zaharov Danil
            </h1>
          </div>
        </div>
        <div className="introduction__hobbies__wrapper">
          <div className="introduction__hobbies__header">
            Hobbies:
          </div>
          <ul className="introduction__hobbies">
            {
              hobbies.map((el, i) => {
                return (
                  <li key={i}>
                    {el}
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
      <div className="introduction__bottom">
        <div className="introduction__about">
          <h3>
            I am 17 years old boy.
          </h3>
          <h3>
            And I wanna increase my skills and make its useful.
          </h3>
        </div>
        <div className="introduction__scroll-arrow">
          <img src={Arrow} alt="" />
        </div>
      </div>
    </div>
  )
}