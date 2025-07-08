import express from 'express';
import { app, server } from "./lib/socket.js";

import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';

dotenv.config();

import authRoutes from './routes/auth.route.js';
import messageRoutes from './routes/message.route.js';
import {connectDB} from "./lib/db.js";

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}))

app.use('/api/auth', authRoutes);
app.use('/api/message', messageRoutes);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log('Express serdfver listening on port:' + PORT);
    connectDB()
})