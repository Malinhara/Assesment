const express = require('express');
const bookService = require('../Services/bookService'); // import the service

const bookRouter = express.Router();

bookRouter.get('/getall', async (req, res) => {
  const { query, maxResults, startIndex } = req.query;

  try {
    // Call the bookService with the query parameter, defaulting to 'fiction' if empty
    const response = await bookService.getAllBooks({ 
      query: query || 'fiction',  // Default query to 'fiction'
      maxResults: parseInt(maxResults) || 20,  // Default to 20 results per page
      startIndex: parseInt(startIndex) || 0  // Default to 0 if no startIndex
    });

    res.status(200).json(response);  // Send books and totalItems back to the frontend
  } catch (error) {
    console.error('Error fetching books:', error);
    res.status(500).json({ error: 'Error fetching books' });
  }
});

module.exports = bookRouter;
