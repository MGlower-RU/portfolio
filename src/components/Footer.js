import '../styles/footer.scss'

import GitHub from '../images/github.svg'

export default function Footer() {
  return (
    <footer className='footer__wrapper'>
      <div className="footer__copyright">
        © MGlower portfolio
      </div>
      <a
        href="https://github.com/MGlower-RU"
        className='footer__social'
        target='_blank'
        rel='noreferrer'
      >
        <img src={GitHub} alt="" />
      </a>
    </footer>
  )
}