
const express = require('express');
const app = express();

require('dotenv').config();

const PORT = process.env.PORT || 4001

const dbConnect = require('./config/database')
dbConnect()
const userRoutes    = require('./routes/User')
const profileRoutes = require('./routes/Profile');

const cookieParser = require("cookie-parser");
const cors = require("cors");
const { cloudinaryConnect } = require("./config/cloudinary");
const fileUpload = require("express-fileupload");

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin : "https://badakar-assignment-app.vercel.app",
    // origin : "https://task-manager-assignment-application.vercel.app",
    credentials : true
}));
app.use(fileUpload({ useTempFiles: true, tempFileDir: "/tmp/", }));
cloudinaryConnect();


app.use("/api/v1/auth",userRoutes);
app.use("/api/v1/profile",profileRoutes);



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
