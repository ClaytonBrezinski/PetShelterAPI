# Pet Shelter API

The pet weather API acts as the backend portion of a 2 system project that communicates through REST endpoints. Its purpose is to hold pet information on the postgres server and allow for POST and GET communication to take place with it through the REST endpoints that are provided. 

## Project Technologies

*   Node.js - JavaScript server
*   Express - Web application framework for running requests through (if correctly implemented, would allow client to use it as a proxy for accessing DarkSky content)
*   PostgreSQL - database

### Techs

*   [NPM](https://www.npmjs.com/) - node package manager
*   [Yarn](https://yarnpkg.com/en/) - package manager, using it to run the client and express at the same time

### Frameworks

*   Node.js - JavaScript server
*   Express - Web application framework for running requests through (if correctly implemented, would allow client to use it as a proxy for accessing DarkSky content)

### Requirements

*   bluebird: 3.5.1 - promise library for the server
*   body-parser: 1.18.2 - populates req.body on the server, when requests are made through it
*   ejs: 2.6.1 - allow embedded JS templates
*   express: 4.16.3 - server software
*   pg-promise: 8.4.1 - promise library for postgres
*   request: 2.85.0 - http client

## Installation / Running the app / API Usage

*   Installation: clone project to work environment `git clone https://github.com/OriginalMidas/PetShelterAPI.git`, open command prompt within created directory and install the required packages
*   Running the app: in the project root directory run `yarn run dev` this will run the client and express app concurrently

### API Usage
* Root (`/`) is a greeting page
* a GET request on `/api/pets` will yield a list of all pets 
* a POST request on `/api/pets` will allow you to make a post to the database
* a GET request on `/api/pets/<INSERT_ID_HERE>` will yield the details of one pet with the ID provided

## Known issues

*   There is not sufficient protection for communications on/to the server.
    *   incorrect injection methods are not sanitized
    *   insufficinet rejection replies to incorrect POSTS

## Future improvements

*   Postman testing for the REST endpoints
*   Add tokenization on the backend so that only communications with a valid token are allowed
*   Create a new table that contains the type and breed of dog (cat, kitty or dog, woofer , etc.) and link this table to the pets table. 
