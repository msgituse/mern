const express = require('express')
const connectDB = require('./config/db')
const salesRoutes = require('./routes/salesRoutes')
const app = express();

// Connect to MongoDB
connectDB()

// Middleware
app.use(express.json())

// Routes
app.use('/api/sales', salesRoutes)

// Start server
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})