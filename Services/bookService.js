const axios = require("axios");

const bookService = {
    async getAllBooks(data) {
      const { query = 'fiction', maxResults = 20, startIndex = 0 } = data;  // Default query to 'fiction'
      
      try {
        const response = await axios.get(`${process.env.GOOGLEAPI}`, {
          params: { q: query, maxResults, startIndex },
        });
  
        return { items: response.data.items, totalItems: response.data.totalItems };
      } catch (error) {
        console.error('Error fetching books:', error);
        throw new Error(`Error fetching books: ${error.message}`);
      }
    }
  };
  
module.exports = bookService;
