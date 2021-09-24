import { useContext } from "react";
import { useParams } from "react-router"
import { DataContext } from "../contexts/DataContext";
import { Carousel } from 'react-responsive-carousel';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../styles/project.scss'

export default function Project() {
  const { projects } = useContext(DataContext)
  const { id } = useParams()
  const project = projects.find(el => el.id === id)

  return (
    <div className="project__wrapper">
      <div className="project__carousel__wrapper">
        <Carousel
          dynamicHeight={true}
          axis='vertical'
          className='project__carousel'
          autoPlay={false}
          emulateTouch={true}
          preventMovementUntilSwipeScrollTolerance={true}
          infiniteLoop={true}
          showIndicators={false}
          showStatus={false}
          showThumbs={false}
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
          {project.descrition}
        </p>
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
  )
}