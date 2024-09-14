import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";


import postRoutes from "./routes/posts.js";


const app = express();

app.use('/posts', postRoutes);

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

// MongoDB Connection kr rhe!!

const CONNECTION_URL = 'mongodb+srv://Gandhi:Gandhi123@gandhidatabase.ephtqp9.mongodb.net/?retryWrites=true&w=majority&appName=GandhiDatabase';

const PORT = process.env.PORT || 5000;

mongoose
    .connect(CONNECTION_URL)
    .then(() =>
        app.listen(PORT, () => console.log(`Server running on port: ${PORT}!`)))
    .catch((error) => console.log(error.message));







