# Task Manager
## Project Portfolio 5

[Frontend: Link to the deployed Heroku app](https://task-manager-pp5.herokuapp.com/)

[Frontend: Link to the GitHub repository](https://github.com/ujuniordev/task-manager-pp5/)

[Backend: Link to the deployed Heroku app](https://drf-task-manager.herokuapp.com/)

[Backend: Link to the GitHub repository](https://github.com/ujuniordev/drf-task-manager/)


Task Manager application
## About the website

The task manager application was develop to provide the user with a tool to help him manage his daily tasks easily and quickly.


## User experience

With a clean, simple and intuitive interface to easily guide the user, the site allows the user to create tasks, edit tasks, check his list of tasks and delete tasks.

The user stories that were used to develop the site are listed below:

 - **US 01 Add Task**
As a **desktop and mobile user,** I want to **create a task** so that **I can have a list of tasks**.
- **US #02 Update a Task**
As a **desktop and mobile user**, I want to **have an option to update a task** so that **I can change requirements if needed**.
- **US #03 delete a task**
As a **desktop and mobile user**, I want to **have an option to delete a task** so that **I can remove unnecessary tasks from my list**.
- **US #04 Filter Tasks**
As a **desktop and mobile user**, I want to **filter tasks by status** so that **I can easily view what's completed and in progress**.
- **US #05 View List of Tasks**
As a **desktop and mobile user**, I want to **view the list of tasks** so that **I can easily see all tasks on the list**.
- **US #06 Register**
As a **desktop and mobile user**, I want to **have an option to register** so that **I can have an account in the task manager**.
- **US #07 Login**
As a **desktop and mobile user**, I want to **have an option to login** so that **I can have access to my account**.
- **US #08 Update Account Details**
As a **desktop and mobile user**, I want to **have an option to update details** so that **I can keep my details up to date in my account**.
- **US #09 Delete Account**
As a **desktop and mobile user**, I want to **have an option to delete account** so that **I can close my account if needed/wanted**.

## Features

This website contains the following features/pages that were developed considering the user's stories listed in the section User experience above, they should all have responsive behavior allowing navigation on any device. Not all features were developed. The agile MoSCoW method was used to define which of the features would be implemented.
- **F#01 add task (using US#01)**
The add task button is the main feature of the tasks manager, and it will allow users to list their tasks to be done. When clicking on the add task button a modal window open where the user can add
- **F#02 list of tasks (using US#02, US#03, US#05)**
The list of tasks displays all tasks created on the app manager by that user, and has 3 main functions: view the list of items, update an item and delete an item.
The user is presented with a list of items that contain the button update - that will open a modal window that allows the users to update the task details and save, and the button delete - that after clicked will immediately delete the task from the list.
- **F#03 filter of tasks (using US#04)**
The filter of tasks is just a filter that has 2 options: completed and incomplete. By clicking on the options the list is automatically updated to display the right tasks.
- **F#04 register & login (using US#06, US#07)**
When entering the app, the user is presented with 2 options: register & login. By clicking on register the user will view a form to input all details needed to create an account. By clicking on login the user will be redirected to the login form, where he/she will input login and password to access the app.
- **F#05 update account (using US#08)**
On the account details page the user has the option to update the account details by simply updating the content on the input fields and clicking save.
- **F#06 delete account (using US#09)**
On the account details page the user has the option to delete the account by simply clicking on the delete button.

### Features to be implemented
Many features have not been implemented due to reasons, like the authentication part of the website which was developed but broke the application so it had to be removed. Also, a new module with a contact form should be implemented in a future release, together with the authentication part.

## Design

The focus was on providing a clean intuitive interface making it clear for the user where his input was requested. 

## Technologies
 - HTML
 - JSX
 - CSS
 - Python
 - JavaScript
 
## Frameworks, Programs and code websites references used during the implementation

### Frameworks

- [Git](https://git-scm.com/) was used for version control through [Gitpod](https://gitpod.io/) terminal, using CLI git commands to commit and push to GitHub
- [GitHub](https://github.com/) is used as the repository for the entire project
- [Heroku](https://www.heroku.com/) was used to deploy the application as it runs on the terminal
- [Bootstrap](https://getbootstrap.com/) was used for design, content positioning and styling.
- [Reactstrap](https://reactstrap.github.io/) together with bootstrap was used for design, content positioning and styling.
- [Django Rest Framework](https://www.django-rest-framework.org/) was the main backend development framework.
- [React.js](https://react.dev/) was used to develop the front end of the web application.

### Code

- During the implementation of the website, it was made necessary to look for examples and of code and different ways to achieve the required goal. Therefore a couple of community websites were used, such as the [W3C Schools website](https://www.w3schools.com/) that was extensively used to check the syntax and code examples

- [Django Rest Framework](https://www.django-rest-framework.org/) documentation was often consulted to check code syntax and other functions.

- [Stack Overflow](https://stackoverflow.com/) was also referenced to check Python function methods and iteration methods and to help understand and fix issues witht he code

- And of course, the [Code Institute LMS](https://learn.codeinstitute.net/) was extensively used especially the Codestar blog walkthrough project.
- With the help from [Real Python](https://realpython.com/django-social-network-1/), [Digital Ocean](https://www.digitalocean.com/) and [SAASitive](https://saasitive.com/) I was able to build most of the features of the website.

## Testing

The testing plan was based on the features described for the website.
![Testing](testing/testing.png)

## Deployment

The project was deployed using the Heroku mock terminal from Code Institue. The steps for deployment are as follows:

- Create a new repository in GitHub
- Create new workspace by clicking 'Gitpod' button.
- Once the workspace has loaded, run terminal command  **npx create-react-app . --use-npm**  to create React app.  
- Once the app is installed, run terminal command  **npm start**  to check app is working. Browser should open with the spinning React logo on a dark blue background.  
- Confirm the changes have rendered in the browser preview then add, commit and push changes.
- Log in to Heroku and create new app".
- Click on the 'Deploy' tab and go to 'Deployment Method'. Click on GitHub.
- Go to 'Manual Deploy' section and click 'Deploy Branch'. Click on 'build logs' to monitor build and ensure deployment is successful. Build is complete when log states 'Build succeeded!'. 
- Click 'Open App' button to view newly deployed app.