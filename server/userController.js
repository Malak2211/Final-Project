const User = require('../models/User');  
    const bcrypt = require('bcryptjs');  
    const jwt = require('jsonwebtoken');  

    // Register a new user  
    const registerUser = async (req, res) => {  
      try {  
        const existingUser = await User.findOne({ email: req.body.email });  
        if (existingUser) {  
          return res.status(400).json({ error: 'Email already exists' });  
        }  

        const hashedpwd = await bcrypt.hash(req.body.pwd, 10);  
        const newUser = new User({  
          name: req.body.name,  
          email: req.body.email,  
          pwd: hashedpwd  
        });  

        await newUser.save();  
        res.status(201).json({ message: 'User registered successfully' });  
      } catch (error) {  
        res.status(500).json({ error: 'Internal server error', details: error.message });  
      }  
    };  

    // Login a user  
    const loginUser = async (req, res) => {  
      try {  
        const user = await User.findOne({ email: req.body.email });  
        if (!user) {  
          return res.status(401).json({ error: 'Invalid credentials' });  
        }  

        const pwdMatch = await bcrypt.compare(req.body.pwd, user.pwd);  
        if (!pwdMatch) {  
          return res.status(401).json({ error: 'Invalid credentials' });  
        }  

        const token = jwt.sign({ email: user.email }, 'secret', { expiresIn: '1h' });  
        res.status(200).json({ token });  
      } catch (error) {  
        res.status(500).json({ error: 'Internal server error' });  
      }  
    };  

    // Get user details  
    const getUserDetails = async (req, res) => {  
      try {  
        const user = await User.findOne({ email: req.user.email });  
        if (!user) {  
          return res.status(404).json({ error: 'User not found' });  
        }  
        res.status(200).json({ email: user.email });  
      } catch (error) {  
        res.status(500).json({ error: 'Internal server error' });  
      }  
    };  

    module.exports = { registerUser, loginUser, getUserDetails };  
