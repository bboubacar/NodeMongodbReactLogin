const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const EmployeeModel = require("./models/Employee")


const app = express();
app.use(express.json());
app.use(cors());

console.log("connection to the serveur...");


app.post("/login", (req, res) =>{
    const {email, password} = req.body;
    EmployeeModel.findOne({email: email})
    .then(user => {
        if(user){
            if(user.password === password){
                res.json("Success");
            }else{
                res.json("The password is incorrect");
            }
        }else{
            res.json("No record existed");
        }
    })
    .catch(err => res.json(err))
})

app.post("/register", (req, res) =>{
    EmployeeModel.create(req.body)
    .then(employees => res.json(employees))
    .catch(err => res.json(err))
})


const startServer =  async () => {
    try{
        await mongoose.connect("mongodb://localhost:27017/employee");

        app.listen(5000, () =>{
            console.log("Serveur is running");
        });
    }catch(err){
        console.log("Connexion to server erreur ", err);
    }
}

startServer();
