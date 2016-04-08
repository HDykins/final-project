# Final project - Christmas tree ordering website

As the final project for my course at The IronYard, I chose to create a user-friendly stateful xmas tree order website. This is because during brainstorming we identified an area where there was some inconvenience - decoration of christmas trees. Some people don't like or can't or don't have time to decorate their trees, and so there might be a market for a website that allows people to delegate that responsibility to a decoration service. Creating a website for the ordering process also ticked all the boxes regarding techincal requirements for the project; React, Flux, Node, Mongo, various wrappers like Browserify, Express, Mongoose, jQuery, IE9 compatible, own restful API, user authentication and using external APIs.

### CHOSEN IDEA - Christmas tree ordering website

Users can order a christmas tree via a simple traditional shopping site process. Users have many options to customize their order; choose tree type, height, decorations, delivery/collection options, services, delivery date and payment options. The user has a running total of pricing throughout the process and is able to review the order details before and after payment. The features were dictated by the user stories and the website to have a clean, simple and intuitive user interface. Also comes with a backend that allows the user to register, sign-in, use order details for future orders and cancel orders.

### Steps to setup

- Install node.js and mongo.db.
https://nodejs.org/en/download/
https://www.mongodb.org/downloads#production

- Install http-server using node from npm
https://www.npmjs.com/package/httpserver

- Download the backend repo for the website from
https://github.com/HDykins/final-project-backend/

- Navigate to the front-end and back-end repos main folder (**final-project** and **final-project-backend**) and type *sudo npm install* in terminal to install the included node packages for each repo

- Navigate to **final-project/build** and start the http server by typing *sudo http-server -p 8181*

- In a seperate tab navigate to your mongodb **bin** folder ([mongo install location]/bin) and type *sudo ./mongod* in terminal

- In another seperate tab navigate to **final-project-backend** and type *sudo npm start* to start the backend server
 
- Finally, connect to the address http://localhost:8181/ in the browser and use the website

#### Previous ideas for project

1st idea - Tip/lifehack website

Users can search for tips/lifehacks on a specific subject. They can do this with the search bar or by using categories browser. The tips are taken from a database and users can add their own tips to this database with a nice tip creation page that can take user text input as the main input, with the ability to supply additional media types if required.

2nd idea - Ultra quick chart creator

Users select a parameter and the site autocreates a simple chart with a default template/styling. The data comes via the census API and d3 is used to dome some nice styling. The user input will be either that they can make their own styling and submit it, and users can rate that styling, or that users can provide feedback (ratings) on the best combinations between template/styling and category. For example spider diagrams probably won't be the best representation of discrete data.

3rd idea - Graduate student projects storage

Students put up their projects and work/dissertations/phds under their subjects they did at university. Businesses and potentoal employers can browse these projects by keywords and subject name. It helps employers who might be interested in a specific subject that is part of their industry, and the student will have incentive to post their projects in the hope that employers will get in contact with them.
