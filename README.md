# 4 layer acrhitecture with React Redux

This is a test

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This is a React project that embraces the 4 layer architecture.
Using this type of architecture you are:
Decoupling bussines logic from the framework of your choise. 
Utalising immutable architecture
Easy to navigate 








Layers: 

1) Domain:
Encaplulation of bussiness logic, side-effect free.
As we are dealing with immutable architecture, our domain layer will consist of entities.
The domain describes the state and holds the business logic. It represents the core of our application and should be agnostic to the view layer. We should be able to use our domain regardless of the framework we choose.
3) Store:
Holds state that is immutable, act as a publisher
notifies Subscribers about state change. Holds actions and reducers
3) Service:
Enorchistration of external operations
4) View:
Presentational and Container components
Angular, React, Vue ...



## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
