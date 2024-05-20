const portfolioData = [
  {
    id: 'PortfolioPage',
    name: 'Web and Mobile Development Portfolio',
    repo: 'https://github.com/djanyreason/PortfolioPage/',
    url: 'https://djanyreason.github.io/PortfolioPage/',
    about:
      'This is this webpage that you are currently browsing. It is a single page app for a website that displays the web and mobile development projects in my personal portfolio. It is built in React, with Redux for state management and styled with MaterialUI. It does not interface with a backend server, but is designed so that it could if there was one running.',
    keywords: [
      'react',
      'redux',
      'state-management',
      'react-material-ui',
      'react-components',
    ],
  },
  {
    id: 'FSO_13',
    name: 'Full Stack Open Pt. 13: Using Relational Databases',
    repo: 'https://github.com/djanyreason/FSO_13',
    about:
      'This repository is for Part 13 of Full Stack Open (FSO), "Using Relational Databases". This repo contains a backend web application in NodeJS, using sequelize to interface with a remote PostreSQL database. The app is similar to the backend application in my repository FSO_04, and should be compatable with the frontend in my repository FSO_05.',
    keywords: ['nodejs', 'express', 'postgresql', 'sequelize'],
  },
  {
    id: 'FSO_12',
    name: 'Full Stack Open Pt. 12: Containers',
    repo: 'https://github.com/djanyreason/FSO_12',
    about:
      'This repository is for Part 12 of Full Stack Open (FSO), "Containers". This part of FSO focuses on using Docker to containerize a development environment. It starts frin a copy of a pre-existing repo (fullstack-hy2020/part12-containers-applications) and implements a Docker containerized development environment for the repo.',
    keywords: ['docker'],
  },
  {
    id: 'FSO_11',
    name: 'Full Stack Open Pt. 11: CI/CD - Exercises 1-19',
    repo: 'https://github.com/djanyreason/FSO_11',
    about:
      'This repository is for exercises 11.1-11.19 in Part 11 of Full Stack Open (FSO), "CI/CD". This part of FSO focuses on Continuous Integration / Continuous Delivery ("CI/CD") systems - this repo is a fork of a pre-existing repo (fullstack-hy2020/full-stack-open-pokedex) with new GitHub Actions workflows.',
    keywords: [
      'continuous-integration',
      'continuous-delivery',
      'cicd',
      'github-actions',
    ],
  },
  {
    id: 'FSO_11_20_21',
    name: 'Full Stack Open Pt. 11: CI/CD - Exercises 20&21',
    repo: 'https://github.com/djanyreason/FSO_11_20_21',
    about:
      'This repository is for exercises 11.20-11.21 in Part 11 of Full Stack Open (FSO), "CI/CD". This part of FSO focuses on Continuous Integration / Continuous Delivery ("CI/CD") systems - this repo takes the "Bloglist" application developed in my FSO_04 and FSO_05 repos and adds new GitHub Actions workflows.',
    keywords: [
      'continuous-integration',
      'continuous-delivery',
      'cicd',
      'github-actions',
    ],
  },
  {
    id: 'FSO_10',
    name: 'Full Stack Open Pt. 10: React Native',
    repo: 'https://github.com/djanyreason/FSO_10',
    about:
      'This repository is for exercises in Part 10 of Full Stack Open (FSO), "React Native". The project in this repo is a React Native mobile application, which interfaces with a remote server to display information for a series of GitHub repositories. The app relies upon React Native StyleSheet, Formik, Yup, GraphQL, and Apollo Client.',
    keywords: [
      'graphql',
      'react-native',
      'jest',
      'apollo-client',
      'infinite-sroll',
      'flexbox',
      'fetch-api',
      'asyncstorage',
      'yup',
      'formik',
      'react-router-native',
      'cursor-pagination',
      'usecontext',
    ],
  },
  {
    id: 'FSO_06',
    name: 'Full Stack Open Pt. 6: Advanced State Management',
    repo: 'https://github.com/djanyreason/FSO_06',
    about:
      'This repository is for exercises in Part 6 of Full Stack Open (FSO), "Advanced state management". The projects in this repo are all front-end React web apps, though some have a back-end component handled through json-server. The projects are focused on state management using either Redux or React Query and useReducer.',
    keywords: [
      'react',
      'redux',
      'state-management',
      'redux-thunk',
      'axios',
      'usereducer',
      'react-query',
      'redux-toolkit',
    ],
  },
  {
    id: 'FSO_09',
    name: 'Full Stack Open Pt. 9: TypeScript',
    repo: 'https://github.com/djanyreason/FSO_09',
    about:
      'This repository is for exercises in Part 9 of Full Stack Open (FSO), "TypeScript". The projects in this repo exclusively use TypeScript, applying it in backend Express apps, in frontend React apps, and in full-stack web apps combining Express and React.',
    keywords: ['typescript', 'typescript-react'],
  },
  {
    id: 'FSO_08',
    name: 'Full Stack Open Pt. 8: GraphQL',
    repo: 'https://github.com/djanyreason/FSO_08',
    about:
      'This repository is for exercises in Part 8 of Full Stack Open (FSO), "GraphQL". The project in this repo is a full-stack web application with token-based user authentication that lists a collection of books in a personal library, using GraphQL with React for frontend, Apollo Server for backend, and a MongoDB database.',
    keywords: ['react', 'graphql', 'mongodb', 'mongoose', 'apollo-server'],
  },
  {
    id: 'FSO_07',
    name: 'Full Stack Open Pt. 7: React Router, Custom Hooks, Styling, Webpack',
    repo: 'https://github.com/djanyreason/FSO_07',
    about:
      'This repository is for exercises in Part 7 of Full Stack Open (FSO), "React router, custom hooks, styling app with CSS and webpack". The projects in this repo are React front-end web apps., focusing on navigation with React Router, custom react hooks, and styling with CSS and ready-made UI libraries.',
    keywords: [
      'react',
      'redux',
      'react-rounter',
      'react-bootstrap',
      'axios',
      'react-css',
      'reat-material-ui',
      'react-hooks',
    ],
  },
  {
    id: 'FSO_05',
    name: 'Full Stack Open Pt. 5: Testing React Apps',
    repo: 'https://github.com/djanyreason/FSO_05',
    about:
      'This repository is for exercises in Part 5 of Full Stack Open (FSO), "Testing React apps". This repo contains a React front end for the server developed in FSO Part 4, contained in my respository FSO_04.',
    keywords: [
      'react',
      'unit-testing',
      'jest',
      'linting',
      'react-components',
      'localstorage',
      'end-to-end testing',
      'cypress',
      'token-based-authentication',
      'prop-types',
      'usestate',
      'useref',
    ],
  },
  {
    id: 'FSO_04',
    name: 'Full Stack Open Pt. 4: Testing Express Servers & User Administration',
    repo: 'https://github.com/djanyreason/FSO_04',
    about:
      'This repository is for exercises in Part 4 of Full Stack Open, "Testing Express servers, user administration". This repo contains a back-end server built using with NodeJS and Express, which connects to a MongoDB database. The server & DB manage a collection of "blog post" objects and user authentication information.',
    keywords: [
      'nodejs',
      'cors',
      'middleware',
      'unit-testing',
      'express',
      'mongodb',
      'jest',
      'linting',
      'mongoose',
      'nodemon',
      'token-based-authentication',
    ],
  },
  {
    id: 'FSO_03',
    name: 'Full Stack Open Pt. 3: Programming a Server With Node.js and Express',
    repo: 'https://github.com/djanyreason/FSO_03',
    about:
      'This repository is for exercises in Part 3 of Full Stack Open (FSO), "Programming a server with NodeJS and Express". This repo contains a back-end server that connects to the phonebook project front-end developed in FSO Part 2.',
    keywords: [
      'nodejs',
      'cors',
      'middleware',
      'express',
      'mongodb',
      'linting',
      'mongoose',
      'flyio',
    ],
  },
  {
    id: 'FSO_02',
    name: 'Full Stack Open Pt. 2: Communicating with Server',
    repo: 'https://github.com/djanyreason/FSO_02',
    about:
      'This repository is for exercises in Part 2 of Full Stack Open, "Communicating with server". The projects in this repo are all basic front-end-only web apps built in React, which interact with local and remote servers using Axios.',
    keywords: ['react', 'axios', 'json-server', 'react-css'],
  },
  {
    id: 'FSO_01',
    name: 'Full Stack Open Pt. 1: Introduction to React',
    repo: 'https://github.com/djanyreason/FSO_01',
    about:
      'This repository is for exercises in Part 1 of Full Stack Open, "Introduction to React". The projects in this repo are all basic front-end-only web apps built in React. They use basic react, passing props between components (including event handler functions), and state manipulation through the react useState hook.',
    keywords: ['react'],
  },
  {
    id: 'Calculator_OdinProject',
    name: 'The Odin Project: Calculator',
    repo: 'https://github.com/djanyreason/Calculator_OdinProject',
    url: 'https://djanyreason.github.io/Calculator_OdinProject/',
    about:
      'This repository is the Calculator project for The Odin Project Foundations course. This project is a website featuring a basic four-function calculator built with HTML, CSS, and javascript.',
    keywords: ['html', 'css', 'javascript'],
  },
  {
    id: 'EtchASketch_OdinProject',
    name: 'The Odin Project: Etch-a-Sketch',
    repo: 'https://github.com/djanyreason/EtchASketch_OdinProject',
    url: 'https://djanyreason.github.io/EtchASketch_OdinProject/',
    about:
      'This repository is the Etch-a-Sketch project for The Odin Project Foundations course. This project contains an "etch-a-sketch" website built using HTML, CSS, and javascript.',
    keywords: ['html', 'css', 'javascript'],
  },
  {
    id: 'RPS_OdinProject',
    name: 'The Odin Project: Rock Paper Scissors',
    repo: 'https://github.com/djanyreason/RPS_OdinProject',
    url: 'https://djanyreason.github.io/RPS_OdinProject/',
    about:
      'This repository is the Rock Paper Scissors project for The Odin Project Foundations course. This project is a javascript app with a minimal HTML and CSS layer to interface through a website. The webpage plays a best-of-9 game of Rock Paper Scissors.',
    keywords: ['javascript'],
  },
  {
    id: 'andThisIsAWebsite',
    name: 'The Odin Project: Landing Page',
    repo: 'https://github.com/djanyreason/andThisIsAWebsite',
    url: 'https://djanyreason.github.io/andThisIsAWebsite/',
    about:
      'This repository is the Landing Page project for The Odin Project Foundations course. This repo contains a template landing site webpage with basic CSS and Flexbox styling.',
    keywords: ['html', 'css', 'flexbox'],
  },
  {
    id: 'OdinRecipes',
    name: 'The Odin Project: Recipes',
    repo: 'https://github.com/djanyreason/OdinRecipes',
    url: 'https://djanyreason.github.io/OdinRecipes/',
    about:
      'This repository is the Recipes project for The Odin Project Foundations course. This repo contains an HTML-only website with links to three recipes, each with an image, list of ingredients, and steps to prepare.',
    keywords: ['html'],
  },
];

export default portfolioData;
