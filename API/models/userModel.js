const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Name must be there"],
    minLength: [4, "value cannot be less than 4"],
    maxLength: [8, "value cannot be greater than 8"],
  },
  email: {
    type: String,
    required: [true, "Email must be there"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is mandatory"],
  },
  avatar: {
    type: String,
    default:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
  },  
},
{timeStamps:true}
);

const User = mongoose.model('User', userSchema);

module.exports = User;