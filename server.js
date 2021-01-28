require('dotenv').config();
const { MONGODB_URI, PORT = 8080 } = process.env;
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

// Enter app routes
app.use('/api', authRoutes);

// Auth middleware
app.use(userAuthMiddleware);

// Admin routes
app.use('/api/admin', adminRoutes);


//----------------------------------Run Server---------------------------------------------

app.listen(PORT, () => {
    console.log("server is running! =>", { PORT });
});

