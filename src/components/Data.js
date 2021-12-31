import Movie1 from '../images/data/movie/1.png'
import Movie2 from '../images/data/movie/2.png'
import Bau1 from '../images/data/bau-landing/1.png'
import Bau2 from '../images/data/bau-landing/2.png'
import Bau3 from '../images/data/bau-landing/3.png'
import Bau4 from '../images/data/bau-landing/4.png'
import Bau5 from '../images/data/bau-landing/5.png'
import Bau6 from '../images/data/bau-landing/6.png'
import Bau7 from '../images/data/bau-landing/7.png'
import Bau8 from '../images/data/bau-landing/8.png'
import Bau9 from '../images/data/bau-landing/9.png'
import RockPaperScissors1 from '../images/data/rockPaperScissors/1.png'
import RockPaperScissors2 from '../images/data/rockPaperScissors/2.png'
import Plonq1 from '../images/data/plonq/1.png'
import Plonq2 from '../images/data/plonq/2.png'
import Plonq3 from '../images/data/plonq/3.png'
import Plonq4 from '../images/data/plonq/4.png'
import Plonq5 from '../images/data/plonq/5.png'
import Garland1 from '../images/data/garland/1.png'
import Garland2 from '../images/data/garland/2.png'
import BirthdayTimer1 from '../images/data/birthday-timer/1.png'
import Quiz1 from '../images/data/quiz/1.png'
import Quiz2 from '../images/data/quiz/2.png'
import Quiz3 from '../images/data/quiz/3.png'
import Weather1 from '../images/data/weather-app/1.png'
import TodoFirebase1 from '../images/data/todo-firebase/1.png'
import TodoFirebase2 from '../images/data/todo-firebase/2.png'
import TodoFirebase3 from '../images/data/todo-firebase/3.png'
import TodoFirebase4 from '../images/data/todo-firebase/4.png'
import SimpleIosCalculator1 from '../images/data/simple-ios-calculator/1.png'
import AdidasAllbirds1 from '../images/data/adidas-allbirds/1.png'
import AdidasAllbirds2 from '../images/data/adidas-allbirds/2.png'
import AdidasAllbirds3 from '../images/data/adidas-allbirds/3.png'
import AdidasAllbirds4 from '../images/data/adidas-allbirds/4.png'
import AdidasAllbirds5 from '../images/data/adidas-allbirds/5.png'
import AdidasAllbirds6 from '../images/data/adidas-allbirds/6.png'
import AdidasAllbirds7 from '../images/data/adidas-allbirds/7.png'
import AdidasAllbirds8 from '../images/data/adidas-allbirds/8.png'

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
            'database',
            'collections',
            'auth',
            'hosting'
          ]
        },
        {
          name: 'local storage',
        },
      ]
    },
    {
      name: 'cms',
      items: [
        {
          name: 'netlify',
          items: ['form submission']
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
          name: 'HTML5',
        },
        {
          name: 'CSS3',
        },
        {
          id: 'adaptive',
        },
        {
          name: 'JS ES12',
          items: [
            'replaceAll',
            'Promise.any',
            '&&=, ||=, ??= operators',
          ]
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
          name: 'SCSS',
        },
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
    {
      name: 'soft',
      items: [
        {
          id: 'languages',
          items: [
            'русский',
            'english(B1-B2)'
          ]
        },
        {
          id: 'timeManagement',
        },
        {
          id: 'criticalThinking',
        },
        {
          id: 'positivity',
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
        en: 'E-cigarettes multipage site (Figma layout)',
        ru: 'Многостраничный сайт электронных сигарет (макет из Figma)'
      },
      type: 'multipage',
      hostLink: 'https://plonq.netlify.app/',
      tags: ['html', 'scss', 'react', 'react-router-dom', 'react hooks', 'form submission', 'graphs', 'responsive', 'localisation']
    },
    {
      id: 'bau',
      img: Bau1,
      imgs: [
        Bau1,
        Bau2,
        Bau3,
        Bau4,
        Bau5,
        Bau6,
        Bau7,
        Bau8,
        Bau9,
      ],
      title: 'Bau',
      description: {
        en: 'The landing site with responsive layout, smooth scrolling navigation, grid image library and tabs in materials section.',
        ru: 'Адаптивный лэндинг сайт с плавной навигацией при клике по пункту меню, галерея изображений на основе grid-сетки.'
      },
      type: 'landing',
      hostLink: 'https://mglower-kwork-bau-landing.netlify.app/',
      tags: ['html', 'scss', 'responsive', 'react', 'react hooks']
    },
    {
      id: 'garland',
      img: Garland1,
      imgs: [
        Garland1,
        Garland2,
      ],
      title: 'X-Mas garland',
      description: {
        en: 'The garland that has on/off and speed controls.',
        ru: 'Гирлянда с кнопками включения/выключения и изменением скорости.'
      },
      type: 'stuff',
      hostLink: 'https://mglower-garland.netlify.app/',
      tags: ['html', 'scss', 'react', 'react hooks']
    },
    {
      id: 'birthday-timer',
      img: BirthdayTimer1,
      imgs: [
        BirthdayTimer1,
      ],
      title: 'Birthday countdown',
      description: {
        en: 'The site that will show the time left to your birthday.',
        ru: 'Сайт, на котором можно узнать сколько дней осталось до вашего дня рождения.'
      },
      type: 'stuff',
      hostLink: 'https://mglower-birthday-countdown.netlify.app/',
      tags: ['html', 'scss', 'react', 'react hooks']
    },
    {
      id: 'quiz',
      img: Quiz1,
      imgs: [
        Quiz1,
        Quiz2,
        Quiz3
      ],
      title: 'Quiz game',
      description: {
        en: 'Answer choice quiz game.',
        ru: 'Викторина с выбором ответа.'
      },
      type: 'game',
      hostLink: 'https://mglower-quiz.netlify.app/',
      tags: ['html', 'scss', 'react', 'react hooks']
    },
    {
      id: 'weather',
      img: Weather1,
      imgs: [
        Weather1,
      ],
      title: 'Weather check',
      description: {
        en: 'Be ready to go outside.',
        ru: 'Будь готов выйти на улицу.'
      },
      type: 'stuff',
      hostLink: 'https://react-weather-6af5c.web.app/',
      tags: ['html', 'css', 'react', 'react hooks', 'adaptive']
    },
    {
      id: 'todo-firebase',
      img: TodoFirebase1,
      imgs: [
        TodoFirebase1,
        TodoFirebase2,
        TodoFirebase3,
        TodoFirebase4,
      ],
      title: 'Firebase Todo',
      description: {
        en: 'Todo app with auth and cloud database with Firebase.',
        ru: 'Заметки с базой данных и аутентификацией.'
      },
      type: 'stuff',
      hostLink: 'https://todo-d7596.web.app/',
      tags: ['html', 'css', 'react', 'react hooks', 'adaptive', 'firebase', 'auth', 'database']
    },
    {
      id: 'simple-ios-calculator',
      img: SimpleIosCalculator1,
      imgs: [
        SimpleIosCalculator1
      ],
      title: 'ios calculator',
      description: {
        en: 'ios theme calculator with basic functions.',
        ru: 'Калькулятор с базовыми функциями.'
      },
      type: 'stuff',
      hostLink: 'https://mglower-simple-ios-calculator.netlify.app/',
      tags: ['html', 'css', 'react', 'react hooks', 'adaptive']
    },
    {
      id: 'adidas-allbirds',
      img: AdidasAllbirds1,
      imgs: [
        AdidasAllbirds1,
        AdidasAllbirds2,
        AdidasAllbirds3,
        AdidasAllbirds4,
        AdidasAllbirds5,
        AdidasAllbirds6,
        AdidasAllbirds7,
        AdidasAllbirds8
      ],
      title: 'adidas Allbirds',
      description: {
        en: 'The site was taken from figma layout. Not used for commercial purposes.',
        ru: 'Макет сайта был взят в Figma. Не используется в коммерческих целях.'
      },
      type: 'landing',
      hostLink: 'https://mglower-adidas-allbirds.netlify.app/',
      tags: ['html', 'css', 'react', 'react hooks', 'slider']
    },
  ],
  aboutMeText: [
    {
      en: 'I was born {{years}} years ago then mom named me Danil. I live in Petrozavodsk, Karelia Republic. I am on 11th grade in school now.',
      ru: 'Меня зовут Данил и мне {{years}} лет. На данный момент проживаю в городе Петрозаводск, Республика Карелия. Обучаюсь в 11 классе.'
    },
    {
      en: 'I\'ve started to learn programming 1.5 years ago with Python but after the 5 months of coding I\'ve made a decision to relocate myself on web-programming with HTML, CSS and JS. I\'ve been learning its on the resources like MDN, learn.js, codewars, cssBattle, documentations. I have several completed projects on Kwork. My current skills are based on Frontend React technologies (check it on skills page). React development stage consists: code splitting by folders (i.e. components, styles), functional components, scss BEM stylization.',
      ru: 'Начал изучать программирование 1.5 года назад с языка Python, понял что хочу "видеть результат" и после 5 месяцев кодинга перешёл к изучению веб-разработки на HTML, CSS и JS. Обучался по MDN, learn.js и документациям, а проверял, поддерживал уровень знаний и узнавал новые методы решений задач с помощью codewars, cssBattle и тому подобных ресурсов. Занимаюсь разработкой проектов на ReactJS (смотрите навыки в секции "навыки"). При разработке на React предпочитаю: использовать разделение кода по папкам (components, styles, ...), функциональные компоненты, scss стилизацию по БЭМ, npm. Есть пара выполненных проектов на Kwork.'
    },
  ]
}