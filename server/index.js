const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, '.env') });

// Environment variables validation
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

        // Security middleware
        app.use(helmet({
            contentSecurityPolicy: {
                directives: {
                    defaultSrc: ["'self'"],
                    scriptSrc: ["'self'", "'unsafe-inline'"],
                    styleSrc: ["'self'", "'unsafe-inline'"],
                    imgSrc: ["'self'", "data:", "https:"],
                },
            },
        }));
        
        // Logging middleware
        app.use(morgan('dev'));

        // CORS configuration
        app.use(cors({
            origin: "http://localhost:3000",
            methods: ['GET', 'POST', 'PUT', 'DELETE'],
            allowedHeaders: ['Content-Type', 'Authorization'],
            credentials: true,
            exposedHeaders: ['set-cookie']
        }));

        // Body parsing middleware
        app.use(express.json({ limit: '10mb' }));
        app.use(express.urlencoded({ extended: true, limit: '10mb' }));

        // Routes
        app.use("/api/auth", authRoutes);

        // Health check endpoint
        app.get('/api/health', (req, res) => {
            res.json({ 
                status: 'ok',
                environment: process.env.NODE_ENV || 'development',
                timestamp: new Date().toISOString()
            });
        });

        // Global error handler
        app.use((err, req, res, next) => {
            console.error("Error:", err.stack);
            
            // Specific error handling
            if (err.name === 'ValidationError') {
                return res.status(400).json({ 
                    message: "Validation Error", 
                    errors: Object.values(err.errors).map(e => e.message)
                });
            }
            
            if (err.code === 11000) {
                return res.status(400).json({ 
                    message: "Duplicate field value entered",
                    field: Object.keys(err.keyPattern)[0]
                });
            }

            res.status(500).json({ 
                message: "Something went wrong!", 
                error: process.env.NODE_ENV === 'development' ? err.message : 'Internal server error'
            });
        });

        // Handle 404 errors
        app.use((req, res) => {
            res.status(404).json({
                message: "Route not found"
            });
        });

        // Start the server
        app.listen(PORT, () => {
            console.log(`Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
        });

    } catch (error) {
        console.error('Failed to start server:', error);
        process.exit(1);
    }
};

process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception:', err);
    process.exit(1);
});

process.on('unhandledRejection', (err) => {
    console.error('Unhandled Rejection:', err);
    process.exit(1);
});

startServer();

module.exports = app;