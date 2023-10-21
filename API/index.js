const express = require("express");
const cors = require("cors");
const dotenv = require('dotenv').config();
const cookieParser = require('cookie-parser')

const app = express();

//Middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser())

const authRoutes = require('./routes/authRoutes')

app.use('/api/auth',authRoutes)

//DB connection
require('./config/connectDB')

//Server
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`server is runnig on ${PORT}`);
});


