import Movie1 from '../images/data/movie/1.webp'
import Movie2 from '../images/data/movie/2.webp'
import Bau1 from '../images/data/bau-landing/1.webp'
import Bau2 from '../images/data/bau-landing/2.webp'
import Bau3 from '../images/data/bau-landing/3.webp'
import Bau4 from '../images/data/bau-landing/4.webp'
import Bau5 from '../images/data/bau-landing/5.webp'
import Bau6 from '../images/data/bau-landing/6.webp'
import Bau7 from '../images/data/bau-landing/7.webp'
import Bau8 from '../images/data/bau-landing/8.webp'
import Bau9 from '../images/data/bau-landing/9.webp'
import RockPaperScissors1 from '../images/data/rockPaperScissors/1.webp'
import RockPaperScissors2 from '../images/data/rockPaperScissors/2.webp'
import Plonq1 from '../images/data/plonq/1.webp'
import Plonq2 from '../images/data/plonq/2.webp'
import Plonq3 from '../images/data/plonq/3.webp'
import Plonq4 from '../images/data/plonq/4.webp'
import Plonq5 from '../images/data/plonq/5.webp'
import Garland1 from '../images/data/garland/1.webp'
import Garland2 from '../images/data/garland/2.webp'
import BirthdayTimer1 from '../images/data/birthday-timer/1.webp'
import Quiz1 from '../images/data/quiz/1.webp'
import Quiz2 from '../images/data/quiz/2.webp'
import Quiz3 from '../images/data/quiz/3.webp'
import Weather1 from '../images/data/weather-app/1.webp'
import TodoFirebase1 from '../images/data/todo-firebase/1.webp'
import TodoFirebase2 from '../images/data/todo-firebase/2.webp'
import TodoFirebase3 from '../images/data/todo-firebase/3.webp'
import TodoFirebase4 from '../images/data/todo-firebase/4.webp'
import SimpleIosCalculator1 from '../images/data/simple-ios-calculator/1.webp'
import AdidasAllbirds1 from '../images/data/adidas-allbirds/1.webp'
import AdidasAllbirds2 from '../images/data/adidas-allbirds/2.webp'
import AdidasAllbirds3 from '../images/data/adidas-allbirds/3.webp'
import AdidasAllbirds4 from '../images/data/adidas-allbirds/4.webp'
import AdidasAllbirds5 from '../images/data/adidas-allbirds/5.webp'
import AdidasAllbirds6 from '../images/data/adidas-allbirds/6.webp'
import AdidasAllbirds7 from '../images/data/adidas-allbirds/7.webp'
import AdidasAllbirds8 from '../images/data/adidas-allbirds/8.webp'
import PasswordGenerator1 from '../images/data/password-generator/1.webp'
import PasswordGenerator2 from '../images/data/password-generator/2.webp'
import MemoryCardGame1 from '../images/data/memory-game/1.webp'
import MemoryCardGame2 from '../images/data/memory-game/2.webp'
import DalliLanding1 from '../images/data/dalli-landing/1.webp'
import DalliLanding2 from '../images/data/dalli-landing/2.webp'
import DalliLanding3 from '../images/data/dalli-landing/3.webp'
import DalliLanding4 from '../images/data/dalli-landing/4.webp'
import DalliLanding5 from '../images/data/dalli-landing/5.webp'
import DalliLanding6 from '../images/data/dalli-landing/6.webp'
import DalliLanding7 from '../images/data/dalli-landing/7.webp'
import DalliLanding8 from '../images/data/dalli-landing/8.webp'
import DalliLanding9 from '../images/data/dalli-landing/9.webp'
import ApartmentRent1 from '../images/data/apartment-rent/1.webp'
import ApartmentRent2 from '../images/data/apartment-rent/2.webp'
import ApartmentRent3 from '../images/data/apartment-rent/3.webp'
import ApartmentRent4 from '../images/data/apartment-rent/4.webp'
import ApartmentRent5 from '../images/data/apartment-rent/5.webp'
import ApartmentRent6 from '../images/data/apartment-rent/6.webp'
import ApartmentRent7 from '../images/data/apartment-rent/7.webp'
import ApartmentRent8 from '../images/data/apartment-rent/8.webp'
import TelegramAIAssistant from '../images/data/telegram-ai-assistant/1.webp'

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
          name: 'JS ES2022',
        },
        {
          name: 'Typescript'
        },
        {
          name: 'Redux',
          items: [
            'react-redux',
            'redux-toolkit',
            'redux-thunk'
          ]
        },
        {
          name: 'ReactJS',
          items: [
            'hooks',
            'component approach',
            'APIs',
            'libraries',
          ]
        },
        {
          name: 'NextJS'
        }
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
          items: [
            'styled-components'
          ]
        },
        {
          name: 'inline',
        },
        {
          name: 'module.css'
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
            'english(B2)'
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
      id: 'telegram-ai-assistant',
      img: TelegramAIAssistant,
      imgs: [
        TelegramAIAssistant,
      ],
      title: 'AI assistant bot',
      description: {
        en: 'This is an AI assistant bot created using Telegram Bot Api and OpenAI GPT model. The bot can remember your conversation context, also you can create Modes to setup bot prompt instantly.',
        ru: 'Персональный чат ассистент в Телеграм на основе OpenAI GPT модели, который даст ответ на любой ваш вопрос. Бот запоминает контекст вашего разговора и отвечает основываясь на нём. Также вы можете создавать готовые темы для разговоры и сохранять их под нужным вам названием.'
      },
      type: 'stuff',
      hostLink: 'https://t.me/MGlower_GPT_Bot',
      tags: ['nextJS', 'telegram', 'AI', 'firebase']
    },
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
      tags: ['html', 'scss', 'react', 'react hooks', 'adaptive']
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
      tags: ['html', 'scss', 'react', 'react hooks', 'adaptive', 'firebase', 'auth', 'database']
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
      tags: ['html', 'scss', 'react', 'react hooks', 'adaptive']
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
      tags: ['html', 'scss', 'react', 'react hooks', 'slider']
    },
    {
      id: 'password-generator',
      img: PasswordGenerator1,
      imgs: [
        PasswordGenerator1,
        PasswordGenerator2,
      ],
      title: 'password generator',
      description: {
        en: 'Simple password generator.',
        ru: 'Простой генератор паролей.'
      },
      type: 'stuff',
      hostLink: 'https://mglower-password-generator.netlify.app/',
      tags: ['html', 'scss', 'react', 'react hooks', 'regexp']
    },
    {
      id: 'card-memory-game',
      img: MemoryCardGame1,
      imgs: [
        MemoryCardGame1,
        MemoryCardGame2,
      ],
      title: 'memory game',
      description: {
        en: 'The game to increase your memory remembering skill and check your luck level.',
        ru: 'Карточная игра для повышения навыков запоминания и проверки своей удачи.'
      },
      type: 'game',
      hostLink: 'https://mglower-memory-card-game.netlify.app/',
      tags: ['html', 'scss', 'react', 'react hooks', 'adaptive']
    },
    {
      id: 'dalli',
      img: DalliLanding1,
      imgs: [
        DalliLanding1,
        DalliLanding2,
        DalliLanding3,
        DalliLanding4,
        DalliLanding5,
        DalliLanding6,
        DalliLanding7,
        DalliLanding8,
        DalliLanding9,
      ],
      title: 'dalli',
      description: {
        en: 'The project from Figma.',
        ru: 'Проект на основе макета из Figma.'
      },
      type: 'landing',
      hostLink: 'https://mglower-dalli-spa.netlify.app/',
      tags: ['html', 'scss', 'react', 'react hooks', 'adaptive', 'slider']
    },
    {
      id: 'apartment-rent',
      img: ApartmentRent1,
      imgs: [
        ApartmentRent1,
        ApartmentRent2,
        ApartmentRent3,
        ApartmentRent4,
        ApartmentRent5,
        ApartmentRent6,
        ApartmentRent7,
        ApartmentRent8,
      ],
      title: 'apartment rent',
      description: {
        en: 'The project from Figma.',
        ru: 'Проект на основе макета из Figma.'
      },
      type: 'landing',
      hostLink: 'https://mglower-dalli-spa.netlify.app/',
      tags: ['html', 'scss', 'react', 'react hooks', 'adaptive', 'slider']
    },
  ],
  aboutMeText: [
    {
      en: 'My name is Danil and I am {{years}} old. I live in Russia.',
      ru: 'Меня зовут Данил и мне {{years}} лет. На данный момент проживаю в городе Петрозаводск, Республика Карелия.'
    },
    {
      en: 'My first experience with programming languages was on Python but after the 5 months of coding I have learned about web programming and decided to try it. I studied on such resources as MDN, leetCode, cssBattle and through documentations. My favorite framework is React with NextJS',
      ru: 'Мой первый опыт кодинга был на Python, но после 5 месяцев изучения узнал о веб-разработке и решил попробовать. Обучался по MDN, learn.js и документациям, а проверял, поддерживал уровень знаний и узнавал новые методы решения задач с помощью codewars, cssBattle и тому подобных ресурсов. Библиотека React с NextJS - моя любимая связка.'
    },
  ]
}