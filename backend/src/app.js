import "dotenv/config";
import cors from 'cors';
import express from 'express';

import authRoutes from './routes/auth.route.js';
import { generalLimiter } from './middlewares/rateLimiter.js';

// Initialize express app
const app = express();
app.use(generalLimiter); // Apply general rate limiting

// Middleware
app.use(cors());
app.use(express.json());

// Import routes
app.use('/api/auth', authRoutes); 

export default app;