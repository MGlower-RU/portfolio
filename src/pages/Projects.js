import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { DataContext } from '../contexts/DataContext'
import '../styles/projects.scss'

export default function Projects() {
  const data = useContext(DataContext)
  const tags = [...new Set(data.projects.map(el => el.tags).flat(1))]
  console.log(tags);
  const [checkedTags, setCheckedTags] = useState(tags)

  function openTags(e) {
    e.preventDefault()
    e.target.classList.toggle('active')
    window.addEventListener('click', checkTagsClick)
  }

  function checkTagsClick(e) {
    let itemContainer = e.target.closest('.projects__filter__wrapper');
    if(itemContainer === null) {
      document
      .querySelectorAll('.projects__filter')
      .forEach(el => el.classList.remove('active'))
      window.removeEventListener('click', checkTagsClick)
    }
  }

  function checkTag(e) {
    e.preventDefault()
    const tagsArray = []

    e.target.classList.toggle('active')
    e.target.closest('ul')
    .querySelectorAll('a')
    .forEach(el => {
      if(el.classList.contains('active')) tagsArray.push(el.textContent);
    })
    setCheckedTags(tagsArray);
  }

  return (
    <div className="projects__wrapper">
      <div className="projects__filter__wrapper">
        <a
          href='/'
          className="projects__filter"
          onClick={openTags}
        >
          Filter by
        </a>
        <ul>
          {
           tags.map((el) => {
            return (
              <a
                href='/'
                key={el}
                onClick={checkTag}
                className='active'
              >
                {el}
              </a>
            )
           }) 
          }
        </ul>
      </div>
      <div className="projects__container">
        {
          data.projects
          .filter(el => el.tags.some(el => checkedTags.includes(el)))
          .map(el => {
            return (
              <Link to={`/projects/${el.id}`} key={el.id} className="project">
                <span></span>
                <div
                  className="project__content"
                  style={{
                    background: `linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('${el.img}')`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
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