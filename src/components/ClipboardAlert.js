import { useContext, useRef } from 'react'
import { i18nContext } from '../contexts/i18nextContext'
import { CSSTransition } from 'react-transition-group'
import { FunctionsContext } from '../contexts/FunctionsContext'

import '../styles/clipboardAlert.scss'

export default function ClipboardAlert() {
  const { t } = useContext(i18nContext)
  const { isCopied, setIsCopied } = useContext(FunctionsContext)
  const copyingRef = useRef(null)

  return (
    <CSSTransition
      in={isCopied}
      nodeRef={copyingRef}
      timeout={5000}
      classNames='clipboard__alert__wrapper'
    >
      <div ref={copyingRef} className='clipboard__alert__wrapper'>
          <div className='clipboard__alert__content'>
            <span onClick={() => setIsCopied(false)}>
              &times;
            </span>
            <div className="clipboard__alert__text">
              {t('defaults.copy')}
            </div>
          </div>
      </div>
    </CSSTransition>
  )
}