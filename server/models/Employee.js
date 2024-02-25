const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

// "employees" word is the way that the collection will be save inside the database
const EmployeeModel = mongoose.model("employees", EmployeeSchema);
module.exports = EmployeeModel