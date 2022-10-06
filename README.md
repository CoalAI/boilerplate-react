# Getting Started with React Boilerplate

## Structure
It is highly recommended to follow the same structure through out the project.

These folders are inside src folder
* ### `assets`: As the name says, it contains assets of our project. It consists of images, svgs etc.

* ### `components` : Components are the building blocks of any react project. This folder consists of layout folder, login, register, home, UI and etc.

* #### `layout folder`: It contains layouts available to the whole project like header, footer, etc. We can store the header, footer, or sidebar code here and call it.

* #### `UI folder`: It is a collection of UI components like buttons, modals, inputs, loader, etc., that can be used across various files in the project.

* ### `pages` : The files in the pages folder indicate the route of the react application. Each file in this folder contains its route. A page can contain its subfolder. Each page has its state and is usually used to call an async operation (An asynchronous programming model where the developer process the stream of coming data to propagate the changes in code). It usually consists of various components grouped. eg-> Home, Login, SignUp, etc

* ### `services`: This folder contains a request folder and inside it index file is located, ServerRequest function inside index file is used to integrate APIs and Token services file is used to provide token services.

* ### `store`: This folder will be added if we use redux in your project. Inside it, there are 3 folders named actions, reducers, and constant subfolders to manage states.
 
* ### `utils`: Utils folder consists of some repeatedly used functions that are commonly used in the project. It should contain only common js functions & objects like dropdown options, regex condition, data formatting, etc.
<br />

## UI library

### [Ant design of React](https://ant.design/docs/react/introduce) is a React UI library antd that contains a set of high quality components and demos for building rich, interactive user interfaces. For more read the documentation.
<br />

### `Components` : antd provides plenty of UI components to enrich your web applications, and it will improve components experience consistently. It also recommend some great Third-Party Libraries additionally. Use [Components](https://ant.design/components/overview/) of antd to build UI.

### `How to set custom colors/variables in project`: Add your own variables/colors in craco.config.js. For more explanation read this [documentation](https://ant.design/docs/react/use-with-create-react-app).
<br />

## Branch name
### It is mendatory to follow the below pattern for branch name. 

### Default pattern: ^(master|main|develop){1}$|^(feature|fix|hotfix|release)/.+$

### Example: feature/test/pattern-test would be passed.

### Avaliable patterns:

* #### ^(feature|fix|hotfix|release)/.+ - branch has to start with feature/, fix/, release/ or hotfix/
* #### (feature|release|hotfix)/(JIRA-\d+) - it should look like feature/JIRA-1234
* #### (feature|release|hotfix)/(JIRA-\d+/)?[a-z-]+ - it should look like feature/branch-name or include JIRA's code like feature/JIRA-1234/branch-name
* #### custom patterns, visit [regex](https://extendsclass.com/regex/a3fe16a).
<br />

## Git commit format

### Recommended Commit Message Format
### `<type>` `(<scope>)`: `<short summary>`
* ### type -> Commit Type: feat|fix|docs|style|refactor|test|chore|perf|ci|build|temp
* ### scope -> : Commit Scope: Optional, can be anything specifying the scope of the commit change. For example $location|$browser|$compile|$rootScope|ngHref|ngClick|ngView, etc. In App Development, scope can be a page, a module or a component.
* ### short summary -> Summary in present tense. Not capitalized. No period at the end.
* ### example-> git commit -a -m "test: testing pre-commit"
<br /> 

## Testing
* ### It's necessary to test your react application before commiting your code to git.
* ### The `React Testing Library` is a lightweight solution to DOM testing. For react applications, it is quite useful for testing components and testing how they would function in front of real users.
* ### `Jest` is the testing framework that is recommended in the official docs for testing the react applications. In this example, Jest framework is used to test the component, created for the sample react application. All the tests should be written in a separate test.js file. Jest will automatically detect the files with the extension .test.js. 
* ### Create a `.test.js` file for every `.js` file.
* ### For a example check App.test.js file. 
* ### You can run the test using the command `npm run test`. The output will show the test results .

<br />

## Packages/Libraries already installed
### `Rect-router-dom` : [documentation](https://v5.reactrouter.com/web/guides/quick-start)
### `React-redux`: [documentation](https://react-redux.js.org/introduction/getting-started)
### `craco-plugin-scoped-css` : [documentation](https://www.npmjs.com/package/craco-plugin-scoped-css)
### `antd` : [documentation](https://ant.design/docs/react/introduce)
### `craco-less` : [documentation](https://ant.design/docs/react/use-with-create-react-app)
### `prettier` : [documentation](https://prettier.io/docs/en/index.html)
### `eslint`
### `husky`
### `validate-branch-name`
### `git-commit-msg-linter`
<br />

# Getting Started with Create React App

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
