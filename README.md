# Codash template

## When should I use this pattern?

If you want to build web applications and dashboards connecting to an API (consuming and posting), if you want to create a custom design and centralize dashboards and hyperlinks to various systems (like Power BI, Tableau, Sharepoint, Teams, meetings).

## What skills do I need to do it?

To build applications following the codash template you need to know WEB Development (HTML, CSS, Javascript and React), in addition to deploying it is essential to master Captain Pipeline.

# Run via Docker

You can build an image docker to run this application, here's the following script to build and run.

```sh
docker build -t codash:dev . \
&& docker run \
    -it \
    --rm \
    -v ${PWD}:/app \
    -v /app/node_modules \
    -p 3001:3000 \
    -e CHOKIDAR_USEPOLLING=true \
    codash:dev
```

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
