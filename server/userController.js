const User = require('./User');  
const bcrypt = require('bcryptjs');  
const jwt = require('jsonwebtoken');  
const nodemailer = require('nodemailer');

// Register a new user  
const transporter = nodemailer.createTransport({
  service: "Gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "luka.forsure@gmail.com",
    pass: "iwpjjjzygfgionif",
  },
  tls: {
    rejectUnauthorized: false // Add this to ignore self-signed certificates
  }
});

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
      pwd: hashedpwd,
      isVerified: false // add a verification field
    });

    const token = jwt.sign({ email: req.body.email }, 'lol', { expiresIn: '1h' }); // generate verification token

    // Send verification email
    const verificationLink = `http://localhost:8080/verify-email?token=${token}`;
    const mailOptions = {
      from: 'luka.forsure@gmail.com',
      to: req.body.email,
      subject: 'Verify your email',
      text: `Click on the link to verify your email: ${verificationLink}`
    };

    await transporter.sendMail(mailOptions);

    await newUser.save();
    res.status(201).send("Success! Please check your email to verify your account.");
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Internal server error', details: error.message });
  }
};
const verifyEmail = async (req, res) => {
  try {
    const { token } = req.query;
    if (!token) {
      return res.status(400).json({ error: 'Invalid or missing token' });
    }

    // Verify token
    const decoded = jwt.verify(token, 'lol');
    const user = await User.findOne({ email: decoded.email });

    if (!user) {
      return res.status(400).json({ error: 'Invalid token or user does not exist' });
    }

    // Mark user as verified
    user.isVerified = true;
    await user.save();

    res.send('Email verified successfully!');
  } catch (error) {
    res.status(500).json({ error: 'Failed to verify email', details: error.message });
  }
};

// Login a user  
const loginUser = async (req, res) => {  
  try {  
    const user = await User.findOne({ email: req.body.email });  
    if (!user) {  
      return res.status(401).json({ error: 'Invalid credentials' });  
    }  
    if (user.isVerified === false) {  
      return res.status(401).json({ error: 'email not verified yet' });  
    }

    const pwdMatch = await bcrypt.compare(req.body.pwd, user.pwd);  
    if (!pwdMatch) {  
      return res.status(401).json({ error: 'Invalid credentials' });  
    }  

    // const token = jwt.sign({ email: user.email }, 'secret', { expiresIn: '1h' });  
    res.status(200).send("Success");  
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

module.exports = { registerUser, loginUser, getUserDetails, verifyEmail };  
