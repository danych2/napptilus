# Front-End Test for Napptilus

This is a front-end website made for the Napptilus selection process.

## Installation

Download the project and use [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) from inside the root folder to install the required packages to run this website.

```
npm install
```

## Usage

#### Development mode

To run the application in development mode use:
```
npm run dev
```
You can then go to `http://localhost:3000/` in your browser to see the website.

#### Linter and testing
To run the linter:
```
npm run lint
```

To launch the testing framework [cypress](https://www.cypress.io/), run:
```
npm run test
```
This will automatically start the app in development mode. If you want to instead test it in production mode, start the production app as explained below and then run:
```
npm run cypress
```
Once the cypress app opens, click `E2E Testing` and then select the browser of your choice (so far the website has mostly been tested on Chrome). Click `Start E2E testing` to launch the browser. Once there select the script `napptilus.cy.js` to run the tests.

#### Production mode
To run the application in production mode, first build the app:
```
npm run build
```
And then start it with:
```
npm run start
```

## Running with Docker

You can also run the app inside a Docker container:
- Install [Docker](https://docs.docker.com/engine/install/)
- Make sure Docker daemon is running
- Build Docker image: `docker build -t napptilus-docker .`
- Run Docker container: `docker run -p 3000:3000 napptilus-docker`

## Authors
Daniel Duato Catalán