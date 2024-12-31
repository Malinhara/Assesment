import axios from 'axios';
import { useEffect, useState } from 'react';

const useBooks = (query = 'fiction', maxResults = 20, currentPage = 1) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      try {
        const startIndex = (currentPage - 1) * maxResults; // Calculate startIndex for pagination
        const response = await axios.get('http://localhost:3001/book/getall', {
          params: { query, maxResults, startIndex },  // Pass parameters to the API
        });

        if (response.data && response.data.items) {
          setBooks(response.data.items);
          setTotalItems(response.data.totalItems);
        } else {
          setBooks([]);
          setTotalItems(0);
        }
      } catch (error) {
        setError('Error fetching books');
        console.error('Error fetching books:', error.message);
      }
      setLoading(false);
    };

    fetchBooks();
  }, [query, maxResults, currentPage]); // Fetch when query, maxResults, or currentPage changes

  return { books, loading, error, totalItems };
};

export default useBooks;
