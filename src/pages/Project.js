import { useContext } from "react";
import { useParams } from "react-router"
import { DataContext } from "../contexts/DataContext";
import { Carousel } from 'react-responsive-carousel';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../styles/project.scss'
import { Link } from "react-router-dom";

export default function Project() {
  const { projects } = useContext(DataContext)
  const { id } = useParams()
  const project = projects.find(el => el.id === id)

  return (
    <div className="project__wrapper">
      <Link to='/projects' className="project__back">
        Go back
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
          <a href={project.hostLink}>
            Check site
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
}