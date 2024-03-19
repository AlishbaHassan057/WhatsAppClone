const express = require('express')
const app = express();
require('dotenv').config();
require('colors');


app.use('/api/user/', require('./routes/userRoutes'))
app.listen(process.env.PORT,() => console.log(`Your Server has been started at: ${process.env.PORT.blue}`))