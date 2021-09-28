import Movie1 from '../images/data/movie/1.png'
import Movie2 from '../images/data/movie/2.png'
import Flowbase1 from '../images/data/flowbase/1.png'
import Flowbase2 from '../images/data/flowbase/2.png'
import Flowbase3 from '../images/data/flowbase/3.png'
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
      id: 'flowbase',
      img: Flowbase1,
      imgs: [
        Flowbase1,
        Flowbase2,
        Flowbase3,
      ],
      title: 'Flowbase',
      description: {
        en: '',
        ru: ''
      },
      type: 'landing',
      hostLink: '/',
      tags: []
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
      hostLink: 'https://mglower-countries.netlify.app/',
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