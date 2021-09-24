import DaruLink1 from '../images/data/daruLink/1.png'
import DaruLink2 from '../images/data/daruLink/2.png'
import DaruLink3 from '../images/data/daruLink/3.png'
import DaruLink4 from '../images/data/daruLink/4.png'
import DaruLink5 from '../images/data/daruLink/5.png'
import DaruLink6 from '../images/data/daruLink/6.png'
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

export const data = {
  hobbies: [
    'Books reading',
    'Cycling',
    'Films watching',
    'Learn new things'
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
      name: 'CMS',
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
      name: 'Styling',
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
      id: 'daru-link',
      img: DaruLink1,
      imgs: [
        DaruLink1,
        DaruLink2,
        DaruLink3,
        DaruLink4,
        DaruLink5,
        DaruLink6,
      ],
      title: 'Daru link',
      descrition: '',
      type: 'Landing page project',
      tags: ['mongodb', 'html', 'css']
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
      descrition: '',
      type: 'Landing page project',
      tags: ['mongodb', 'html', 'css']
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
      descrition: '',
      type: 'Landing page project',
      tags: ['firebase', 'reactjs']
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
      descrition: '',
      type: 'Landing page project',
      tags: ['mongodb', 'html', 'css']
    },
  ]
}