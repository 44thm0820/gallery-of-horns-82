# Lab 01-Class02-Day 2 of 4 day lab: Gallery of Horns

## Today's lab topic: React State and Props

## This readme provides an overview of the project for a new visitor to my repo

By the end of this week, I will create an application that displays images and information of horned animals. This application will allow the user to filter the images by number of horns and choose his or her favorite image.

Today, my goal is to use the JSON file provided to display the title, image and description of each horned beast in your application.

## Contributors

- Rey Mercado

## Link

  [react] (https://reactjs.org/)

## Book

  React Explained: Your Step-by-Step Guide to React (2020 Edition) by Zac Gordon

## Comments

## Time Estimate assignment overview
For each of the features listed below, make an estimate of the time it will take you to complete the feature, and record your start and finish times for that feature:

Number and name of feature: ________________________________

Estimate of time needed to complete: _____

Start time: _____

Finish time: _____

Actual time needed to complete: _____
Add this information to your README.

## Feature #1: Display images

### Why are we implementing this feature 1?

As a user, I want to view the images on the page so that I can browse the photo collection.

### What are we going to implement?

Given that a user opens the application in the browser
When the user navigates to the home page
Then the photo gallery should display all of the images in the gallery

### How are we implementing it?

The Main component should pass props for the title, image and description to each HornedBeast component. You will find this information in the provided JSON file.

## Feature #2: Allow users to vote for their favorite beast

### Why are we implementing this feature 2?

As a user, I want to be able to interact with the site and pick my favorite beast.

### What are we going to implement on this feature 2?

Given that a user clicks on an image, the number of “favorites” displayed on that image will increase by one.

### How are we implementing this feature 2?

Create state inside of the HornedBeast component that keeps track of the number of times an image was clicked.

Put a heart in each horned beast with the number of times it was “favorited” next to it.

## Feature 3: Bootstrap

### Why are we implementing this feature 3?

As a user, I want to see a visually pleasing application that is also reponsive when I view this application on different screen sizes.

### What are we going to implement on this feature 3?

Given that a user opens the application in the browser
When the images are displayed on the screen
Then each image should be rendered in a visually pleasing way
The images should be displayed in columns, as screen width allows

### How are we implementing this feature 3?

Bring in the react-bootstrap library and use it to style your application making sure that it is responsive.

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
