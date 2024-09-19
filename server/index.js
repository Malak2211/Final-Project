const express = require('express');  
const mongoose = require('mongoose');  
const bodyParser = require('body-parser');  
const cors = require('cors');  
const bcrypt = require('bcrypt');  
require('dotenv').config(); // Load environment variables  

const app = express();  
const PORT = process.env.PORT || 5000;  

// Middleware  
app.use(cors());  
app.use(bodyParser.json());  

// MongoDB Connection  
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/signupdb', {  
  useNewUrlParser: true,  
  useUnifiedTopology: true,  
})  
.then(() => console.log('MongoDB connected'))  
.catch(err => console.error('MongoDB connection error:', err));  

// User Schema  
const userSchema = new mongoose.Schema({  
  name: { type: String, required: true },  
  email: { type: String, required: true, unique: true },  
  pwd: { type: String, required: true }  
});  

const User = mongoose.model('User', userSchema);  

// Signup Route  
app.post('/api/signup', async (req, res) => {  
  const { name, email, pwd } = req.body;  

  try {  
    const existingUser = await User.findOne({ email });  
    if (existingUser) {  
      return res.status(400).send('User already exists');  
    }  
    
    const hashedPassword = await bcrypt.hash(pwd, 10);  
    const newUser = new User({ name, email, pwd: hashedPassword });  
    await newUser.save();  
    
    res.send('Success');  
  } catch (error) {  
    console.error(error);  
    res.status(500).send('Server error');  
  }  
});  

// Start the server  
app.listen(PORT, () => {  
  console.log(`Server is running on http://localhost:${PORT}`);  
});
