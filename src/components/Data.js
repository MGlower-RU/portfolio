import Movie1 from '../images/data/movie/1.png'
import Movie2 from '../images/data/movie/2.png'
import Trafalgar1 from '../images/data/trafalgar/1.png'
import Trafalgar2 from '../images/data/trafalgar/2.png'
import Trafalgar3 from '../images/data/trafalgar/3.png'
import Trafalgar4 from '../images/data/trafalgar/4.png'
import Trafalgar5 from '../images/data/trafalgar/5.png'
import Trafalgar6 from '../images/data/trafalgar/6.png'
import Yakutia1 from '../images/data/yakutia/1.png'
import Yakutia2 from '../images/data/yakutia/2.png'
import Yakutia3 from '../images/data/yakutia/3.png'
import Yakutia4 from '../images/data/yakutia/4.png'
import Yakutia5 from '../images/data/yakutia/5.png'
import Yakutia6 from '../images/data/yakutia/6.png'
import Yakutia7 from '../images/data/yakutia/7.png'
import Yakutia8 from '../images/data/yakutia/8.png'
import RockPaperScissors1 from '../images/data/rockPaperScissors/1.png'
import RockPaperScissors2 from '../images/data/rockPaperScissors/2.png'
import Plonq1 from '../images/data/plonq/1.png'
import Plonq2 from '../images/data/plonq/2.png'
import Plonq3 from '../images/data/plonq/3.png'
import Plonq4 from '../images/data/plonq/4.png'
import Plonq5 from '../images/data/plonq/5.png'

export const data = {
  hobbies: [
    'books',
    'cycling',
    'films',
    'learning',
  ],
  skills: [
    {
      name: 'database',
      items: [
        {
          name: 'firebase',
          items: [
            'collection',
            'database'
          ]
        },
        {
          name: 'mongoDB',
        },
      ]
    },
    {
      name: 'cms',
      items: [
        {
          name: 'netlify',
        },
        {
          name: 'wordpress',
        },
      ]
    },
    {
      name: 'technologies',
      items: [
        {
          name: 'HTML',
        },
        {
          name: 'adaptive',
        },
        {
          name: 'ReactJS',
          items: [
            'hooks',
            'component approach',
            'APIs',
            'libraries'
          ]
        },
      ]
    },
    {
      name: 'styling',
      items: [
        {
          name: 'Material-UI',
        },
        {
          name: 'JSS',
        },
        {
          name: 'inline',
        },
      ]
    },
  ],
  projects: [
    {
      id: 'rock-paper-scissors',
      img: RockPaperScissors1,
      imgs: [
        RockPaperScissors1,
        RockPaperScissors2
      ],
      title: 'Rock Paper Scissors',
      description: {
        en: 'This project was created to understand the react hooks(useState, useEffect, useContext) behavior.',
        ru: 'Проект был сделан для изучения работы реакт хуков.'
      },
      type: 'game',
      hostLink: 'https://mglower-rock-paper-scissors.netlify.app/',
      tags: ['html', 'scss', 'react', 'react hooks']
    },
    {
      id: 'movie',
      img: Movie1,
      imgs: [
        Movie1,
        Movie2,
      ],
      title: 'Movie Check',
      description: {
        en: 'Find the movie and get info about it.',
        ru: 'Найдите нужный фильм и получите информацию о нём.'
      },
      type: 'landing',
      hostLink: 'https://mglower-movie.netlify.app/',
      tags: ['react', 'react hooks', 'material-ui', 'api']
    },
    {
      id: 'plonq',
      img: Plonq1,
      imgs: [
        Plonq1,
        Plonq2,
        Plonq3,
        Plonq4,
        Plonq5,
      ],
      title: 'Plonq',
      description: {
        en: 'E-cigarettes multipage site',
        ru: 'Многостраничный сайт электронных сигарет'
      },
      type: 'multipage',
      hostLink: 'https://plonq.netlify.app/',
      tags: ['html', 'scss', 'react', 'react-router-dom', 'react hooks', 'form submission', 'graphs']
    },
    {
      id: 'trafalgar',
      img: Trafalgar1,
      imgs: [
        Trafalgar1,
        Trafalgar2,
        Trafalgar3,
        Trafalgar4,
        Trafalgar5,
        Trafalgar6,
      ],
      title: 'Trafalgar',
      description: {
        en: '',
        ru: ''
      },
      type: 'landing',
      hostLink: '',
      tags: []
    },
    {
      id: 'yakutia',
      img: Yakutia1,
      imgs: [
        Yakutia1,
        Yakutia2,
        Yakutia3,
        Yakutia4,
        Yakutia5,
        Yakutia6,
        Yakutia7,
        Yakutia8,
      ],
      title: 'Yakutia',
      description: {
        en: '',
        ru: ''
      },
      type: 'landing',
      hostLink: '/',
      tags: []
    },
  ]
}