const express = require("express");
const bodyParser = require("body-parser");

const { PORT } = require('./config/serverConfig')
const ApiRoutes = require('./routes/index');

const db = require('./models/index');
const { Airplane,Airport, city } = require("./models/index");




const setupAndStartServer = async () => {
   //create the express object
   const app = express();

   app.use(bodyParser.json());
   app.use(bodyParser.urlencoded({ extended: true }));
   app.use('/api', ApiRoutes);

// console.log(db);

   app.listen(PORT, async () => {
      console.log(`Server started at ${PORT}`);
      if (process.env.SYNC_DB==1) {
         console.log(process.env.SYNC_DB);
         console.log(2564);
          db.sequelize.sync({alter: true});
      }
     
// console.log(Airplane);






   });
}

setupAndStartServer();