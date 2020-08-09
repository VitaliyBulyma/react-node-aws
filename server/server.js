const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();


const app = express();

// db
mongoose.connect(process.env.DATABASE_CLOUD, {
    useNewUrlParser: true,
    useUnifiedTopology: true  
})
.then(()=>console.log("Database is connected!"))
.catch(err=> console.log(err));
// import routes
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');

// app midllewares
app.use(morgan('dev'));
app.use(bodyParser.json());
// app.use(cors());
app.use(cors({origin:process.env.CLIENT_URL}));
// middleware
app.use('/api', authRoutes);
app.use('/api', userRoutes);

const PORT = process.env.PORT || 8000;

app.listen(PORT,()=> console.log(`Server is running on: ${PORT}`));
