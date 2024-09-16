const mongoose = require('mongoose');  

// Define a schema for the User collection  
const userSchema = new mongoose.Schema({  
  name: { type: String, required: true },  
  email: { type: String, unique: true, required: true },  
  pwd: { type: String, required: true },  
});  

// Create a User model based on the schema  
const User = mongoose.model('User', userSchema);  

module.exports = User;  
