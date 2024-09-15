const express = require('express');  
    const mongoose = require('mongoose');  
    const { registerUser, loginUser, getUserDetails } = require('./controllers/userController');  
    const verifyToken = require('./middleware/verifyToken');  

    const app = express();  
    const PORT = 5000;  

    mongoose.connect('mongodb://localhost:27017/mydatabase')  
      .then(() => {  
        console.log('Connected to MongoDB');  
      })  
      .catch((error) => {  
        console.error('Error connecting to MongoDB:', error);  
      });  

    app.use(express.json());  

    // Routes  
    app.post('/api/register', registerUser);  
    app.post('/api/login', loginUser);  
    app.get('/api/user', verifyToken, getUserDetails);  

    app.get('/', (_req, res) => {  
      res.send('Welcome to my User Registration and Login API!');  
    });  

    app.listen(PORT, () => {  
      console.log(`Server is running on port ${PORT}`);  
    });  
