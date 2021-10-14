import { useContext, forwardRef, useState } from "react";
import { useParams } from "react-router"
import { DataContext } from "../contexts/DataContext";
import { i18nContext } from "../contexts/i18nextContext";
import { Carousel } from 'react-responsive-carousel';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../styles/project.scss'
import { Link } from "react-router-dom";

export const Project = forwardRef(() => {
  const { projects } = useContext(DataContext)
  const { t } = useContext(i18nContext)
  const { id } = useParams()
  const project = projects.find(el => el.id === id)
  const [currentImg, setCurrentImg] = useState(project.imgs[0])

  function zoomInSliderImg(e) {
    setCurrentImg(project.imgs[e])
    document.body.classList.add('zoomed')
  }

  function zoomOutSliderImg(e) {
    document.body.classList.remove('zoomed')
  }

  return (
    <div className="project__wrapper">
      <div
        className="project__zoom-img__wrapper"
        onClick={zoomOutSliderImg}
      >
        <img src={currentImg} alt="" draggable='false' />
      </div>
      <Link to='/projects' className="project__back">
        {t('defaults.back')}
      </Link>
      <div className="project__info">
        <div className="project__carousel__wrapper">
          <Carousel
            dynamicHeight={true}
            axis='vertical'
            className='project__carousel'
            autoPlay={false}
            emulateTouch={true}
            preventMovementUntilSwipeScrollTolerance={true}
            infiniteLoop={true}
            showStatus={false}
            showThumbs={false}
            onClickItem={zoomInSliderImg}
          >
            {
              project.imgs.map((el, i) => {
                return (
                  <img key={i} src={el} alt='' />
                )
              })
            }
          </Carousel>
        </div>
        <div className="project__text">
          <h2>
            {project.title}
          </h2>
          <p>
            {t(`project.description`,
            {
              ru: project.description.ru,
              en: project.description.en
            })}
          </p>
          <a href={project.hostLink}>
            {t('defaults.hostLink')}
          </a>
          <div className="project__tags">
            {
              project.tags.map((el, i) => {
                return (
                  <div key={i} className="project__tag">
                    {el}
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
})