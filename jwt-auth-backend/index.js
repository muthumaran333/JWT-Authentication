const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");
const EmployeeModel = require('./models/user.js');
const app = express();

app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/Employee", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Register route
app.post('/register', (req, res) => {
  // Here you can add your logic to save the employee
  const newEmployee = new EmployeeModel(req.body);
  
  newEmployee.save()
    .then((savedEmployee) => res.status(201).json(savedEmployee))
    .catch((error) => res.status(400).json({ error: error.message }));
});

// Login route
app.post("/login", (req, res) => {
  const { email, password } = req.body; // Corrected the destructuring syntax

  EmployeeModel.findOne({ email: email }) // Corrected the findOne syntax
    .then(user => {
      if (user) {
        if (user.password === password) {
          res.json("Success");
        } else {
          res.json("The password is incorrect");
        }
      } else {
        res.json("No record existed");
      }
    })
    .catch(error => {
      res.status(500).json({ error: error.message }); // Added error handling
    });
});


// Start the server
app.listen(5000, () => {                         
  console.log("Server is running on port 5000");
});
