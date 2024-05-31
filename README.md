# Welcome to Flights service

## Project Setup

-clone the project on ypur local
-execute npm install on the same path as of your root directory of the downloaded project
-Create a .env file in the root directory and add the following environment variables
     -PORT=3000
-Inside the src/config folder create a new file config.js and then add the foloowing piece of json:
{
  "development": {
    "username": "root",
    "password": "zaq@100#",
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

```
-Once you've added you db config as listed above,go to the src folder from your terminal and execute `npx sequelize db:create`

```

## DB Design
  -Airplane Table
  -Flight
  -Airport
  -City

  -Aflight belongs to an airplane but one airplane can be used in multiple flights
  -A city has many airports but one airport belongs to a city
  -One airport can have many flights, but a flight belongs to one airport