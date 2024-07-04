import { React, useState, useEffect } from 'react'
import Books from '../../components/books/Books'
import { Container, Typography, Button, Select, MenuItem } from '@mui/material'

const Authors = () => {
  const [book, setBook] = useState([])
  const [loading, setLoading] = useState(false)
  const [author, setAuthor] = useState('');

  const [authorList, setAuthorList] = useState([]);

  useEffect(() => {
    getAuthorList()
  }, [])
  const getAuthorList = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_LINK}/get_authors`);
      const data = await response.json();
      console.log("Fetched data:", data);
      setAuthorList(data.unique_authors);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  const getAuthorBooks = async () => {
    try {
      setLoading(true)
      const response = await fetch(`${process.env.REACT_APP_API_LINK}/get_top_books?author=${author}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
      });
      const data = await response.json();
      if (data.error) {
        setLoading(false)
      } else {
        setLoading(false)
        setBook(data.top_books);
      }
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };
  const clearData = async () => {
    setAuthor('')
    setBook([]);
    setLoading(false)
  }

  return (
    <>
      <div>
        <Container>
          <Typography variant='h3' align='center' sx={{
            marginTop: 4,
            marginBottom: 2,
          }} color="textPrimary" gutterBottom>
            Authors who made it to the top 100
          </Typography>
          <Typography variant='h6' align='center' color="textPrimary" gutterBottom>
            Select your favourite author and enjoy their writings
          </Typography>
          <Select
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            sx={{
              marginBottom: 2,
            }}
            fullWidth
            displayEmpty
          >
            <MenuItem value="" disabled>Select An Author</MenuItem>
            {authorList.map((author, index) => (
              <MenuItem key={index} value={author}>{author}</MenuItem>
            ))}
          </Select>
          <Button variant="contained" sx={{
            marginRight: 2,
          }} color="primary" onClick={getAuthorBooks}>
            Get Books
          </Button>
          <Button variant="contained" color="error" onClick={clearData}>
            Reset
          </Button>
        </Container>
      </div>
      {!loading ? <Books books={book} /> : <Typography variant='h6' align='center' color="textPrimary">Loading...</Typography>}
    </>
  )
}

export default Authors
