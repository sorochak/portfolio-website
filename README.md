# My Personal Website Journey

This project will be my personal website/portfolio page.

TO DO:

1. Planning & Design
- [x] Sketch the Design
- [x] List Features & Sections (e.g., About, Projects, Contact)

2. Setup Development Environment
- [x] Create React App: Use the Create React App (CRA) tool to set up a new React project.

3. Create Structure
- [x] Directory Structure: Organize the app's structure to have directories like components, pages, assets, etc.
- [ ] Setup Components: Break down the UI into smaller reusable components (e.g., Navbar, Footer, Button).
- [ ] Setup Pages: Organize the major sections/views as separate pages (e.g., HomePage, ProjectPage).

4. Implement Core Features
- [ ] Header: Build the header (usually navigation)
- [ ] Footer: Build the footer component
- [ ] Content: Populate the pages with actual content - personal info, projects, resume, etc.
- [ ] Add Styling: Style the components. Consider using SCSS or styled-components for more advanced styling capabilities.

5. Integrate Material-UI for Responsiveness
- [ ] Install Material-UI: Integrate Material-UI for responsive components and styling.
- [ ] Use Material-UI Components: Replace or enhance custom components with MUI components where necessary for better responsiveness and design consistency.

6. Analytics
- [ ] Set Up Google Analytics: Create a Google Analytics account and get a tracking ID.
- [ ] Integrate Analytics: Use a package like react-ga to integrate Google Analytics with the React app.

7. Testing
- [ ] Responsive Testing: Ensure the site looks good on various device sizes.
- [ ] Browser Testing: Check the site's functionality across different browsers.

8. Deployment & CI/CD Pipeline
- [x] GitHub Pages Setup: Create a GitHub repository for portfolio.
- [ ] Deployment Setup: Use tools like gh-pages npm package to help automate the deployment to GitHub Pages.
- [ ] Automate Deployment: Set up GitHub Actions for automatic deployment upon pushing to the main branch.

9. Documentation & Sharing
- [ ] Document Process: Jot down the entire process, challenges faced, solutions found, and any other learnings.
- [ ] Share on Dev.to: Write and publish an article on Dev.to sharing the experience and learnings. This not only showcases the project but also writing and reflection skills.

10. Dockerize the React App
- [ ] Create a Dockerfile in the root of the project with the following content:
# Use an official Node runtime as the parent image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies in the container
RUN npm install

# Copy the current directory contents into the container
COPY . .

# Make port 3000 available outside the container
EXPOSE 3000

# Run the application when the container launches
CMD ["npm", "start"]

- [ ] Create a .dockerignore file in the root of the project to exclude unnecessary files:
- [ ] Build the Docker Image
- [ ] Run the React App in a Docker Container
- [ ] Deploy
- [ ] Update Documentation


11. Think about SEO - maybe implement React-Helmet
- [ ] Implement React-Helmet https://www.freecodecamp.org/news/react-helmet-examples/

12. Add button to switch between dark and light theme

13. Potentially consider implementing dependabot for non-breaking updates?

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
