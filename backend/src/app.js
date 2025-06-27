import "dotenv/config";
import cors from 'cors';
import express from 'express';

import authRoutes from './routes/auth.route.js';

// Initialize express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Import routes
app.use('/api/auth', authRoutes); 

export default app;