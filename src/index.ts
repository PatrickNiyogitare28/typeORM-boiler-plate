import express,{Application, Request, Response, NextFunction} from "express";

const app:Application = express();

app.get("/", (_:Request,res:Response, next:NextFunction) => {
    res.send("Hello");
})

app.listen(5000, ():void => {
    console.log("Server 🏃‍♂️🏃‍♂️🏃‍♂️🏃‍♂️ 5000")
})