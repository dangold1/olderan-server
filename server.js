require('dotenv').config();
const PORT = process.env.PORT;
const MONGODB_URI = process.env.MONGODB_URI;
const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const authRoutes = require('./routes/auth.routes');
const adminRoutes = require('./routes/admin.routes');
const userAuthMiddleware = require('./middlewares/userAuth.middleware');

//----------------------------------DB Connection-------------------------------------
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
    .then(() => { console.log("Connected to database!"); })
    .catch((err) => { console.error(`Error connecting to the database. \n${err}`); })

//----------------------------------Middlewares Router-------------------------------------
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Users routes
app.use('/api', authRoutes);

// Auth Middleware
app.use(userAuthMiddleware);

// Admin routes
app.use('/api/admin', adminRoutes);


//----------------------------------Run Server---------------------------------------------

app.listen(PORT, () => {
    console.log("server is running! =>", { PORT });
});

