import express from "express";

const app = express();

app.get("/", (_,res) => {
    res.send("Hello");
})

app.listen(5000, ():void => {
    console.log("Server 🏃‍♂️🏃‍♂️🏃‍♂️🏃‍♂️ 5000")
})