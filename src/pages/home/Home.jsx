import { React, useState, useEffect } from 'react'
import Books from '../../components/books/Books'
import { Container, Typography } from '@mui/material'

const Home = () => {
    const [book, setBook] = useState([])
    useEffect(() => {
        getData()
    }, [])
    const getData = async () => {
        try {
            const link = process.env.REACT_APP_API_LINK
            console.log(link);
            const response = await fetch(`${process.env.REACT_APP_API_LINK}/data`);
            const data = await response.json();
            console.log("Fetched data:", data);
            setBook(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }
    return (
        <>
            <div>
                <Container>
                    <Typography variant='h3' align='center' sx={{
                        marginTop: 4,
                        marginBottom: 2,
                    }} color="textPrimary" gutterBottom>
                        Popular Books
                    </Typography>
                    <Typography variant='h6' align='center' color="textPrimary" gutterBottom>
                        Explore our collection of top-rated books and discover your next captivating read today!
                    </Typography>
                </Container>
            </div>
            {book.length > 0 ? <Books books={book} /> : <Typography variant='h6' align='center' color="textPrimary">Loading...</Typography>}
        </>
    )
}

export default Home
