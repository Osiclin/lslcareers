# LSLCAREERS

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## NOTE 

Normally i won't expose this keys but for the sake of this task and ease of use by the team
Create a .env file in the root of the project and copy, paste these values to enable fetching from the API:

REACT_APP_RAPID_API_KEY=56fe1c539bmsh6fb4610bd30e103p1a7aa5jsnfad25271bdd0
REACT_APP_RAPID_API_HOST=movies-app1.p.rapidapi.com

## Available Scripts For Running This Project

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

## Build Process

This section explains the build process of this app.

### Code Structure

This project has a src folder that can all the components, context, pages and services used.

The services contain the base url for the api to be called.

All views of the app are contained in the pages folder.

All components of the app are contained in the components folder with their respective css module file.


### Styling

Inline and module based styling were both used for this project.

Variables were used to tell if the users device is on dark or light theme, and switch the background and text color to fit the users preferred theme.
