import 'dotenv/config';
import express,{Application, Request, Response, NextFunction} from "express";
import {createConnection} from 'typeorm';
import {User} from './Entities/User';

const app:Application = express();
const {PORT, DEV_DB_NAME, DEV_DB_USERNAME, DEV_DB_PASSWORD} = process.env;
const BASE_URL = '/api/v1'
createConnection({
    type:'mysql', //db type
    database: DEV_DB_NAME, //database name
    username: DEV_DB_USERNAME, //database username
    password: DEV_DB_PASSWORD,  //database password
    logging:true,   // logging out requests  to db and theirs status
    synchronize:true, //Allow automatic entity creations for persisting objects
    entities: [User]

})

app.use(express.urlencoded({extended:true}));

app.get("/", (_:Request,res:Response, next:NextFunction) => {
    res.send("Hello");
})

app.get(`${BASE_URL}/users`, (_:Request, res:Response) => {
    User.find().then((data:[]) => {
        res.json(data);
    })
    .catch((error:any) => {
        res.json(error)
    })
})
/*
  @Todo debug reqbody
*/
app.post(`${BASE_URL}/users`, async(req:Request, res:Response) => {
 let user;
  try{
    user = await User.insert(req.body);
  }
  catch(e){
     res.status(400).json(e);
  }

    res.status(201).json(user);
});

app.listen(PORT, ():void => {
    console.log("Server 🏃‍♂️🏃‍♂️🏃‍♂️🏃‍♂️ "+PORT)
})