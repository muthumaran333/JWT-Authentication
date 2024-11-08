const mongoose = require('mongoose')
const EmployeeSchema = new mongoose. Schema({
name: String,
email: String,
password: String
})
const EmployeeModel = mongoose.model("Employees", EmployeeSchema)
module.exports = EmployeeModel





// const mongoose = require("mongoose");
// const EmployeeSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: [true,'Please Enter User Name']
//     validate : {(val)=> }  =====> we want to write an validate function and alsowe want to install the validator function
// for further detailes just refers to the Net Ninja Youtube channel #5 th video of the JWT Athentication
//   },
//   email: {
//     type: String,
//     require: [true, "Please Enter the Valid Email"],
//     unique: [true, "User Already Exist"],
//     lowercase : [true,"Email Should be in the lowercase"]
//   },
//   password: {
//     type: String,
//     require: [true, "Please Enter the Valid Password"],
//     minLength: [8, "minimum Length of the Password is 8 "],

//   },
// });
// const EmployeeModel = mongoose.model("Employees", EmployeeSchema);
// module.exports = EmployeeModel;
