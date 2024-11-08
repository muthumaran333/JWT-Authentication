const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");
const bcrypt = require('bcrypt');
const EmployeeModel = require('./models/user.js');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000', // Change this to the URL of your frontend
  credentials: true,
}));
app.use(cookieParser());

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/Employee", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// JWT setup
const maxAge = 3 * 24 * 60 * 60; 
const createToken = (id) => {
  return jwt.sign({ id }, 'muthumarana@$##@@$%^&$#@#$@%&^&**&^%&^', {
    expiresIn: maxAge 
  });
};

// Register route
app.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ error: "Name, email, and password are required." });
    }
    const hashedPassword = await bcrypt.hash(password, 10); 
    const newEmployee = new EmployeeModel({ name, email, password: hashedPassword });
    const savedEmployee = await newEmployee.save();
    const token = createToken(savedEmployee._id);
    res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(201).json({ savedEmployee: savedEmployee._id, token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Login route
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required." });
    }
    const user = await EmployeeModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "No record existed." });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      const token = createToken(user._id);
      res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
      res.status(200).json({ message: "Login successful", token });
    } else {
      res.status(401).json({ error: "The password is incorrect." });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Middleware to verify JWT token
const requireAuth = (req, res, next) => {
  const token = req.cookies.jwt;
  if (!token) {
    return res.status(401).json({ error: "Authorization token is required." });
  }
  
  jwt.verify(token, 'muthumarana@$##@@$%^&$#@#$@%&^&**&^%&^', (err, decoded) => {
    if (err) {
      return res.status(403).json({ error: "Invalid or expired token." });
    }
    req.userId = decoded.id;
    next();
  });
};

// Protected profile route
app.get('/profile', requireAuth, async (req, res) => {
  try {
    const user = await EmployeeModel.findById(req.userId).select('-password');
    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start the server
app.listen(8000, () => {
  console.log("Server is running on port 8000");
});








// const express = require("express");
// const mongoose = require('mongoose');
// const cors = require("cors");
// const bcrypt = require('bcrypt');
// const EmployeeModel = require('./models/user.js');
// const app = express();

// app.use(express.json());
// app.use(cors());

// // Connect to MongoDB
// // mongodb://127.0.0.1:27017/Employee
// mongoose.connect("mongodb+srv://muthu:123@cluster0.0j81q.mongodb.net/Authentication", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// // Register route
// app.post('/register', async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     // Check if email and password are provided
//     if (!email || !password) {
//       return res.status(400).json({ error: "Email and password are required." });
//     }

//     // Hash the password
//     const hashedPassword = await bcrypt.hash(password, 10); // 10 is the salt rounds

//     const newEmployee = new EmployeeModel({
//       email,
//       password: hashedPassword, // Store hashed password
//     });
    
//     const savedEmployee = await newEmployee.save();
//     res.status(201).json(savedEmployee);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// app.post("/login", async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     // Check if email and password are provided
//     if (!email || !password) {
//       return res.status(400).json({ error: "Email and password are required." });
//     }

//     // Find user by email
//     const user = await EmployeeModel.findOne({ email });
//     if (!user) {
//       return res.status(404).json({ error: "No record existed." });
//     }

//     // Compare the password with the hashed password
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (isMatch) {
//       res.json("Success");
//     } else {
//       res.status(401).json({ error: "The password is incorrect." });
//     }
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });


// // Start the server
// app.listen(5000, () => {                         
//   console.log("Server is running on port 5000");
// });




// const express = require("express");
// const mongoose = require('mongoose');
// const cors = require("cors");
// const bcrypt = require('bcrypt');
// const EmployeeModel = require('./models/user.js');
// const app = express();
// const cookieParser = require('cookie-parser');
// const jwt = require('jsonwebtoken');
// const { requireAuth } = require('./middleware/AuthenMiddleware.js')

// app.use(express.json());
// app.use(cors({
//   origin: 'http://localhost:3000',  // Change this to the URL of your frontend
//   credentials: true, // Allow sending cookies
// }));
// app.use(cookieParser());

// // Connect to MongoDB
// mongoose.connect("mongodb+srv://muthu:123@cluster0.0j81q.mongodb.net/Authentication", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// // Create a JWT token
// const maxAge = 3 * 24 * 60 * 60; // Token expiry (3 days)
// const createToken = (id) => {
//   return jwt.sign({ id }, 'muthumarana@$##@@$%^&$#@#$@%&^&**&^%&^', {
//     expiresIn: maxAge // Token expiration time
//   });
// };

// // Register route
// app.post('/register', async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     // Check if email and password are provided
//     if (!email || !password) {
//       return res.status(400).json({ error: "Email and password are required." });
//     }

//     // Hash the password
//     const hashedPassword = await bcrypt.hash(password, 10); // 10 is the salt rounds

//     const newEmployee = new EmployeeModel({
//       email,
//       password: hashedPassword, // Store hashed password
//     });
    
//     const savedEmployee = await newEmployee.save();

//     // Create JWT token and set it as a cookie
//     const token = createToken(savedEmployee._id);
//     res.cookie('jwt', token, {
//       httpOnly: true, // Security: make the cookie HTTP only
//       maxAge: maxAge * 1000, // Expiration time (milliseconds)
//     });
    
//     // Send a response with the token and user ID
//     res.status(201).json({ savedEmployee: savedEmployee._id, token });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // Login route
// app.post("/login", async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     // Check if email and password are provided
//     if (!email || !password) {
//       return res.status(400).json({ error: "Email and password are required." });
//     }

//     // Find user by email
//     const user = await EmployeeModel.findOne({ email });
//     if (!user) {
//       return res.status(404).json({ error: "No record existed." });
//     }

//     // Compare the password with the hashed password
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (isMatch) {
//       // If password matches, create and send JWT token
//       const token = createToken(user._id);
//       res.cookie('jwt', token, {
//         httpOnly: true, // Security: make the cookie HTTP only
//         maxAge: maxAge * 1000, // Expiration time (milliseconds)
//       });
      
//       // Send success response with token
//       res.status(200).json({ message: "Login successful", token });
//     } else {
//       res.status(401).json({ error: "The password is incorrect." });
//     }
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });


// // Protected Dashboard Route
// app.get('/dashboard', requireAuth, async (req, res) => {
//   try {
//     // Assuming you want to get user information to personalize the dashboard
//     const user = await EmployeeModel.findById(req.userId);
//     if (user) {
//       res.status(200).json({ message: "Welcome to the dashboard!", user });
//     } else {
//       res.status(404).json({ error: "User not found" });
//     }
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });


// // Protected Profile Route
// app.get('/profile', requireAuth, async (req, res) => {
//   try {
//     // Find the user based on the user ID stored in req.userId
//     const user = await EmployeeModel.findById(req.userId);
//     if (user) {
//       res.status(200).json({ user });
//     } else {
//       res.status(404).json({ error: "User not found" });
//     }
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });
// // Start the server
// app.listen(5000, () => {
//   console.log("Server is running on port 5000");
// });
