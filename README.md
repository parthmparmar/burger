# burger

## Objective

The objective of this app is a allow an user to add a burger creation of his/her liking to be devoured without the cost to the individual's wealth or health.  It's a virtual burger restaurant!

##  Organization

The app is uses Node JS (with express) to run the server side code, with a mySQL database to warehouse the data and Handlebars as the template engine.

- **main file** -- server.js
    - uses express to launch the app and listen on PORT 

- **NPM packages** -- package.json
    - houses app info and required packages (useful for new install and run on servers)

- **config** -- folder
    - connection.js -- connection to database 
    - orm.js - ORM (object relational management) code for easier interaction with the database

- **controllers** -- folder
    - burgers_controller.js - route handling for the burgers website, like https request - GET, POST, and PUT

- **db** -- folder
    - schema.sql and seeds.sql files for creation and initialization of database

- **models** -- folder
    -burgers.js - burger specific model that points to the ORM functions for quick use of ORM functions

- **public/assets** -- folder
    - CSS - contains the main CSS file that will be send to the client for page styling
    - img - contains the images that will be send to the client for rendering 

- **views** -- folder
    - layouts - contains the main.handlebars file that contains the full html file for correct display on client browser
    - index.handlebars - html + handlebar code to generate burger list and append it to main main.handlebars page for serving to client

## How to Run

### app
1. clone or fork repo to your computer using git commands or github's website
2. run ```npm install``` in CLI to download required node modules to run app
3. navigate to folder with file contents in CLI (e.g. terminal)
4. run schema.sql and seeds.sql files to create database locally
5. update config.js file to reflect local database settings
6. enter the following line: 
    - ```node server.js```
7. access using browser with URL localhost:8080
8. type in a new burger and click Add Burger
9. click Devourer to eat the burger

## Deployment

link: 
github: https://github.com/parthmparmar/burger

## Technologies Used

- npm: to install required modules
- express: to enable server side http request
- node: to program server side workload and logic
- mysql: to house and manage the data
- ORMs: to simplify interacting with the mysql database
- handlebars: to create page elements from data retrieved from the database and serve to the client

## Contact

Parth Parmar -- developer of the find a friend app using the technologies mentioned above


