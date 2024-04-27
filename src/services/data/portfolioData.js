const portfolioData = [
  {
    name: 'FSO_01',
    url: 'https://github.com/djanyreason/FSO_01',
    about:
      'This repository is for exercises in Part 1 of Full Stack Open, "Introduction to React". The projects in this repo are all basic front-end-only web apps built in React. They use basic react, passing props between components (including event handler functions), and state manipulation through the react useState hook.',
    keywords: ['react'],
  },
  {
    name: 'FSO_02',
    url: 'https://github.com/djanyreason/FSO_02',
    about:
      'This repository is for exercises in Part 2 of Full Stack Open, "Communicating with server". The projects in this repo are all basic front-end-only web apps built in React, which interact with local and remote servers using Axios.',
    keywords: ['react', 'axios', 'json-server', 'react-css'],
  },
  {
    name: 'FSO_03',
    url: 'https://github.com/djanyreason/FSO_03',
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
    name: 'FSO_04',
    url: 'https://github.com/djanyreason/FSO_04',
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
    name: 'FSO_05',
    url: 'https://github.com/djanyreason/FSO_05',
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
    name: 'FSO_06',
    url: 'https://github.com/djanyreason/FSO_06',
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
    name: 'FSO_07',
    url: 'https://github.com/djanyreason/FSO_07',
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
    name: 'FSO_08',
    url: 'https://github.com/djanyreason/FSO_08',
    about:
      'This repository is for exercises in Part 8 of Full Stack Open (FSO), "GraphQL". The project in this repo is a full-stack web application with token-based user authentication that lists a collection of books in a personal library, using GraphQL with React for frontend, Apollo Server for backend, and a MongoDB database.',
    keywords: ['react', 'graphql', 'mongodb', 'mongoose', 'apollo-server'],
  },
  {
    name: 'FSO_09',
    url: 'https://github.com/djanyreason/FSO_09',
    about:
      'This repository is for exercises in Part 9 of Full Stack Open (FSO), "TypeScript". The projects in this repo exclusively use TypeScript, applying it in backend Express apps, in frontend React apps, and in full-stack web apps combining Express and React.',
    keywords: ['typescript', 'typescript-react'],
  },
  {
    name: 'FSO_10',
    url: 'https://github.com/djanyreason/FSO_10',
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
    name: 'FSO_11',
    url: 'https://github.com/djanyreason/FSO_11',
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
    name: 'FSO_11_20_21',
    url: 'https://github.com/djanyreason/FSO_11_20_21',
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
    name: 'FSO_12',
    url: 'https://github.com/djanyreason/FSO_12',
    about:
      'This repository is for Part 12 of Full Stack Open (FSO), "Containers". This part of FSO focuses on using Docker to containerize a development environment. It starts frin a copy of a pre-existing repo (fullstack-hy2020/part12-containers-applications) and implements a Docker containerized development environment for the repo.',
    keywords: ['docker'],
  },
  {
    name: 'FSO_13',
    url: 'https://github.com/djanyreason/FSO_13',
    about:
      'This repository is for Part 13 of Full Stack Open (FSO), "Using Relational Databases". This repo contains a backend web application in NodeJS, using sequelize to interface with a remote PostreSQL database. The app is similar to the backend application in my repository FSO_04, and should be compatable with the frontend in my repository FSO_05.',
    keywords: ['nodejs', 'express', 'postgresql', 'sequelize'],
  },
  {
    name: 'OdinRecipes',
    url: 'https://github.com/djanyreason/OdinRecipes',
    about:
      'This repository is the Recipes project for The Odin Project Foundations course. This repo contains an HTML-only website with links to three recipes, each with an image, list of ingredients, and steps to prepare.',
    keywords: ['html'],
  },
  {
    name: 'andThisIsAWebsite',
    url: 'https://github.com/djanyreason/andThisIsAWebsite',
    about:
      'This repository is the Landing Page project for The Odin Project Foundations course. This repo contains a template landing site webpage with basic CSS and Flexbox styling.',
    keywords: ['html', 'css', 'flexbox'],
  },
  {
    name: 'EtchASketch_OdinProject',
    url: 'https://github.com/djanyreason/EtchASketch_OdinProject',
    about:
      'This repository is the Etch-a-Sketch project for The Odin Project Foundations course. This project contains an "etch-a-sketch" website built using HTML, CSS, and javascript.',
    keywords: ['html', 'css', 'javascript'],
  },
  {
    name: 'Calculator_OdinProject',
    url: 'https://github.com/djanyreason/Calculator_OdinProject',
    about:
      'This repository is the Calculator project for The Odin Project Foundations course. This project is a website featuring a basic four-function calculator built with HTML, CSS, and javascript.',
    keywords: ['html', 'css', 'javascript'],
  },
  {
    name: 'RPS_OdinProject',
    url: 'https://github.com/djanyreason/RPS_OdinProject',
    about:
      'This repository is the Rock Paper Scissors project for The Odin Project Foundations course. This project is a javascript app with a minimal HTML and CSS layer to interface through a website. The webpage plays a best-of-9 game of Rock Paper Scissors.',
    keywords: ['javascript'],
  },
];

export default portfolioData;
