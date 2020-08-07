const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();


const app = express();

// import routes

const authRoutes = require('./routes/auth');

// app midllewares
app.use(morgan('dev'));
app.use(bodyParser.json());
// app.use(cors());
app.use(cors({origin:process.env.CLIENT_URL}));
// middleware
app.use('/api', authRoutes);

const PORT = process.env.PORT || 8000;

app.listen(PORT,()=> console.log(`Server is running on: ${PORT}`));
