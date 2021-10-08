import { forwardRef, useContext } from "react"
import { DataContext } from "../contexts/DataContext"
import { FunctionsContext } from "../contexts/FunctionsContext"
import { i18nContext } from "../contexts/i18nextContext"

import enCV from '../EN.txt'
import ruCV from '../RU.docx'
import Arrow from '../images/arrow_down.svg'

import '../styles/about.scss'

export const Introduction = forwardRef((props, ref) => {
  const { copyToClipboard } = useContext(FunctionsContext)
  const { hobbies, aboutMeText } = useContext(DataContext)
  const { t } = useContext(i18nContext)
  const years = 17

  return (
    <>
      <div ref={ref} className="introduction__wrapper">
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
      <a
        href={
          localStorage.getItem('i18nextLng') === 'ru' ? ruCV : enCV
        }
        download='CV_MGlower-RU'
        className="about__cv__download"
      >
        {t('about.cv.download')}
      </a>
      <div className="about__cv__wrapper">
        <p>
          {t('defaults.contact')}:&nbsp;
            <a
              href="zaharov.danil.job@gmail.com"
              onClick={copyToClipboard}
            >
              zaharov.danil.job@gmail.com
            </a>
        </p>
        {
          aboutMeText.map((el, i) => {
            return (
              <p key={i}>
                {t(`about.cv.text.${i}`,
                {
                  ru: aboutMeText[i].ru,
                  en: aboutMeText[i].en,
                  years: years
                })}
              </p>
            )
          })
        }
      </div>
    </>
  )
})