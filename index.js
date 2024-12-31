const express = require('express');
require('dotenv').config(); 
const cors = require('cors');
const helmet = require('helmet');
const bookRouter = require('./Router/book'); // import book routes

const app = express();
const PORT = process.env.PORT 

// Middleware
app.use(express.json()); // Parse incoming JSON requests


app.use(cors({
  origin: 'http://localhost:3000', // Allow frontend requests
  credentials: true,
}));


app.use(helmet());

//for better security
app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'self'"],
    scriptSrc: ["'self'", "'unsafe-inline'"],
    objectSrc: ["'none'"],
    upgradeInsecureRequests: [],
  },
}));

// Routes
app.use('/book', bookRouter);


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
