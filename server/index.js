const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, '.env') });

const requiredEnvVars = ['MONGODB_URI', 'JWT_SECRET'];
const missingEnvVars = requiredEnvVars.filter(envVar => !process.env[envVar]);

if (missingEnvVars.length > 0) {
    console.error('Missing required environment variables:', missingEnvVars.join(', '));
    process.exit(1);
}

const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");

const PORT = process.env.PORT || 3001;
const app = express();

const startServer = async () => {
    try {
        await connectDB();
        console.log('Database connected successfully');

        app.use(helmet());
        app.use(morgan('dev'));
        app.use(cors({
            origin: "http://localhost:3000",
            methods: ['GET', 'POST', 'PUT', 'DELETE'],
            allowedHeaders: ['Content-Type', 'Authorization'],
            credentials: true
        }));
        app.use(express.json());
        app.use(express.urlencoded({ extended: true }));

        app.use("/api/auth", authRoutes);

        app.get('/api/health', (req, res) => {
            res.json({ 
                status: 'ok',
                environment: process.env.NODE_ENV || 'development',
                timestamp: new Date().toISOString()
            });
        });

        app.use((err, req, res, next) => {
            console.error("Error:", err.stack);
            res.status(500).json({ 
                message: "Something went wrong!", 
                error: process.env.NODE_ENV === 'development' ? err.message : 'Internal server error'
            });
        });

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
            console.log('Environment:', process.env.NODE_ENV || 'development');
        });

    } catch (error) {
        console.error('Failed to start server:', error);
        process.exit(1);
    }
};

startServer();

process.on('unhandledRejection', (err) => {
    console.error('Unhandled Promise Rejection:', err);
    process.exit(1);
});