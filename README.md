# EmployeesManager

This project exposes an UI to manage employees of a company. A table displays all employees, you can edit and delete existing users, and also insert new employees.
There's also some dashboards where you can see some general metrics (e.g by roles) and also specific employees metrics.

## Instructions

In this section you can find instructions about this project.

### Requirements

- Node
- Angular CLI (Version 20)
- Text editor from your preference (VS Code recommended)

### Run project locally

1. Navigate to the project's root folder.
2. Run `npm i` to install all packages.
3. Run `npm start` to start the development environment.
4. Application can be accessed by URL: http://localhost:4200/employees.
5. Json server can be accessed by URL: http://localhost:3000 (This is used by the application, don't forget to change the app environment.ts file if you assign a new port).

## Tools & Features

- Angular (20)
- Angular material
- Json server (mock rest api based on a json file)
- ChartJS

### CRUD operations: Employee

It is possible to see a list of users and some data related to them in the home page (/employees).
Create, Edit and Delete won't affect the dashboards since some processing (e.g soft delete, generate history) should be done backend side.
It is possible though to edit the db.json file manually to play with the dashboards.

### Dashboards:

The application generates some charts using ChartJS library. Currently there are 3 charts available:
1. Employee history: When in the employees list, there's a list of actions that can be done: Edit, Delete and History. The last action (History) will drive the user to a dashboard page showing data from the given user.
2. Role salaries: This can be accessed using the app's navbar. This dashboard shows the average salary by all given roles.
3. Service time: This can also be accessed using the app's navbar. This dashboard shows the average service time by all given roles.

### ToDos

There are some ToDos over the code, describing some flows that would ideally be different if a different solution was used for backend.
Although there are some ToDos, most of them should be resolved if a proprietary API was implemented.