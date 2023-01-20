# Table of contents
- [Project Presentation](#project-presentation)
  - [Project Summary](##project-summary)
  - [Requirements](#requirements)
- [Functionality][#functionality]
- [Design system](#design-system)
- [Code owners](#code-owners)

# [Project Presentation](#project-presentation)

Project aim is to be able to build a web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites.

## [Project Summary](#project-summary)

The goals of this project:
- Setting up Webpack
- Sass styles
- Webpack Loaders and Plugins
- Creating layouts and page design
- Service workers
- Using APIs and creating requests to external urls

### Wikipedia defintion of NPL

Wikipedia definition of NPL:
> Natural language processing (NLP) is a subfield of computer science, information engineering, and artificial intelligence
concerned with the interactions between computers and human (natural) languages, in particular how to program computers to
process and analyze large amounts of natural language data.

### Prequistes

- webserver - node 
- web app framework for routing - express
- build tool - webpack
- external script - service worker
- external API - meaningcloud (used for this project) or aylien

## [Functionality](#functionality)

### API

- should be called on form submission in server/index.js
- information about the API response must show up in the view such as polarity (positibe/negative), and subjectivity (subjective/factual)

### Offline functionality

- server workers must have been set up in webpack.prod.js and called from views/index.html

### Testing 

- Jest must be installed and 'npm run test' script must be implimented to run Jest
- every src/js files must have at least 1 unit test

### Interactions

- app must render successfully the homepage when starter with the command 'npm run start'
- page build must include validate form input and return an error alert to the user if invalid (input field cannot be blank)

## [Requirements](#requirements)

### Interface and Architecture

#### Architecture
- test
  - polarityScoreTest.js
  - urlCheckerTest.js
- node_modules
- src 
  - client
    - js
      - formHandler.js
      - urlChecker.js
    - styles
      - base.scss
      - footer.scss
      - form.scss
      - header.scss
      - resets.scss
    - views
      - index.html
      - style.scss
    - index.js
  - server
    - index.js
    - mockAPI.js
  - style.css
- .babelrc
- .env
- .gitignore
- package-lock.json
- package.json
- webpack.dev.js
- webpack.prod.js

#### Usability

- usable on modern desktop, tablet, and phone browsers

#### Styling

- form styling
- hover button
- results container styling

#### HTML Structure

- a single field form that uses correct HTML tags and structure
- must be semantic HTML

### Page Behaviour

#### ...
#### ...

### Documentation

#### README

- basic information, project description, usage, dependencies, packages - correct markdown syntax should be used

#### Comments

- comments should be present at the beginning of each procedure and class

# [Design system](#design-system)

## ...
## ...

# [Code owners](#project-presentation)

Website: https://www.juliemiquelard.com<br>
Github: https://github.com/j25mq<br>

Project led with Udacity.