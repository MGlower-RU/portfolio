import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { DataContext } from '../contexts/DataContext'
import '../styles/projects.scss'

export default function Projects() {
  const data = useContext(DataContext)
  const tags = data.skills.map(el => el.items).flat(1).map(el => el.name)

  return (
    <div className="projects__wrapper">
      <div className="projects__filter__wrapper">
        <a
          href='/'
          className="projects__filter"
        >
          Filter by
        </a>
        <ul>
          {
           tags.map((el) => {
            return (
              <a href='/' key={el}>
                {el}
              </a>
            )
           }) 
          }
        </ul>
      </div>
      <div className="projects__container">
        {
          data.projects.map(el => {
            return (
              <Link to={`/projects/${el.id}`} key={el.id} className="project">
                <span></span>
                <div
                  className="project__content"
                  style={{
                    background: `linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('${el.img}')`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover'
                  }}
                >
                  <h3>
                    {el.title}
                  </h3>
                  <h4>
                    {el.type}
                  </h4>
                </div>
              </Link>
            )
          })
        }
      </div>
    </div>
  )
}