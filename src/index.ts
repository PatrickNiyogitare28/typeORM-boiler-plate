import 'dotenv/config';
import express,{Application, Request, Response, NextFunction} from "express";
import {createConnection} from 'typeorm';
import {User} from './Entities/User';

const app:Application = express();
const {PORT, DEV_DB_NAME, DEV_DB_USERNAME, DEV_DB_PASSWORD} = process.env;
createConnection({
    type:'mysql', //db type
    database: DEV_DB_NAME, //database name
    username: DEV_DB_USERNAME, //database username
    password: DEV_DB_PASSWORD,  //database password
    logging:true,   // logging out requests  to db and theirs status
    synchronize:true, //Allow automatic entity creations for persisting objects
    entities: [User]

})

app.get("/", (_:Request,res:Response, next:NextFunction) => {
    res.send("Hello");
})


app.listen(PORT, ():void => {
    console.log("Server 🏃‍♂️🏃‍♂️🏃‍♂️🏃‍♂️ "+PORT)
})