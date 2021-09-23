import DaruLink from '../images/daru-link.png'
import Flowbase from '../images/flowbase.png'
import Trafalgar from '../images/trafalgar.png'
import Yakutia from '../images/yakutia.png'

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
      img: DaruLink,
      title: 'Daru link',
      type: 'Landing page project',
      tags: ['mongodb', 'html', 'css']
    },
    {
      id: 'flowbase',
      img: Flowbase,
      title: 'Flowbase',
      type: 'Landing page project',
      tags: ['mongodb', 'html', 'css']
    },
    {
      id: 'trafalgar',
      img: Trafalgar,
      title: 'Trafalgar',
      type: 'Landing page project',
      tags: ['firebase', 'reactjs']
    },
    {
      id: 'yakutia',
      img: Yakutia,
      title: 'Yakutia',
      type: 'Landing page project',
      tags: ['mongodb', 'html', 'css']
    },
    {
      id: 'some',
      img: Yakutia,
      title: 'Yakutia',
      type: 'Landing page project',
      tags: ['mongodb', 'html', 'css']
    },
  ]
}