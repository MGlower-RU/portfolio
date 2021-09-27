import { useContext } from "react"
import { DataContext } from "../contexts/DataContext"
import { i18nContext } from "../contexts/i18nextContext"

import CV from '../CV.txt'
import Arrow from '../images/arrow_down.svg'

import '../styles/about.scss'

export default function Introduction() {
  const { hobbies } = useContext(DataContext)
  const { t } = useContext(i18nContext)
  const years = 17

  return (
    <>
      <div className="introduction__wrapper">
        <div className="introduction__header">
          <div className="introduction__title">
            <div className="introduction__title__profession">
              <h2>
                {t('about.introduction.title.profession.h2')}
              </h2>
              <h1>
                {t('about.introduction.title.profession.h1')}
              </h1>
            </div>
            <div className="introduction__title__name">
              <h2>
                {t('about.introduction.title.name.h2')}
              </h2>
              <h1>
                {t('about.introduction.title.name.h1')}
              </h1>
            </div>
          </div>
          <div className="introduction__hobbies__wrapper">
            <div className="introduction__hobbies__header">
              {t('about.introduction.hobbies.header')}
            </div>
            <ul className="introduction__hobbies">
              {
                hobbies.map(el => {
                  return (
                    <li key={el}>
                      {t(`about.introduction.hobbies.hobby.${el}`)}
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
        <div className="introduction__bottom">
          <div className="introduction__motto">
            {t(`about.introduction.motto`)}
          </div>
          <div className="introduction__scroll-arrow">
            <img src={Arrow} alt="" />
          </div>
        </div>
      </div>
      <a href={CV} download='CV.txt' className="about__cv__download">
        {t('about.cv.download')}
      </a>
      <div className="about__cv__wrapper">
        <p>
          Contact me on: <a href="mailto:zaharov.danil.job@gmail.com">zaharov.danil.job@gmail.com</a>
        </p>
        <p>
          I was born {years} years ago then mom named me Danil. I am on 11th grade in school now. I live in Petrozavodsk, Karelia Republic.
        </p>
        <p>
          My current skills are based on Frontend React technologies.
        </p>
      </div>
    </>
  )
}