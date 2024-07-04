import { React, useState } from 'react'
import Books from '../../components/books/Books'
import { Container, Typography, TextField, Button } from '@mui/material'

const Recs = () => {
    const [book, setBook] = useState([])
    const [loading, setLoading] = useState(false)
    const [userInput, setUserInput] = useState('');

    const [datafound, setDataFound] = useState(true)
    const getRecommendations = async () => {
        try {
            setLoading(true)
            const response = await fetch(`${process.env.REACT_APP_API_LINK}/recommend_books?user_input=${userInput}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            const data = await response.json();
            console.log("Fetched recommendations:", data.Recommendations);
            if (data.error) {
                setLoading(false)
                setDataFound(false)
            } else {
                setLoading(false)
                setBook(data.recommendations);
            }
        } catch (error) {
            console.error("Error fetching recommendations:", error);
        }
    };
    const clearData = async () => {
        setBook([]);
        setUserInput('')
        setDataFound(true)
        setLoading(false)
    }

    const changeInput = async (e) => {
        setBook([]);
        setDataFound(true)
        setUserInput(e.target.value)
    }
    return (
        <>
            <div>
                <Container>
                    <Typography
                        variant='h3'
                        align='center'
                        color="textPrimary"
                        sx={{
                            marginTop: 4,
                            marginBottom: 2,
                        }}
                        gutterBottom>
                        Discover Your Next Great Read
                    </Typography>
                    <Typography variant='h6' align='center' color="textPrimary" gutterBottom>
                        Tell Us About Your Last Book, We'll Recommend What's Next
                    </Typography>
                    <TextField
                        label="Enter Book Title"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={userInput}
                        onChange={changeInput}
                        sx={{
                            marginBottom: 2,
                        }}
                        InputProps={{
                            autoComplete: 'off',
                        }}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        sx={{
                            marginRight: 2,
                        }}
                        onClick={getRecommendations}>
                        Get Recommendations
                    </Button>
                    <Button variant="contained" color="error" onClick={clearData}>
                        Reset
                    </Button>
                </Container>
            </div>
            {!loading ? <Books books={book} /> : <Typography variant='h6' align='center' color="textPrimary">Loading...</Typography>}
            {!datafound ? <Typography variant='h6' align='left' color="textPrimary" sx={{ ml: 10 }}>No recommendations found</Typography> : ""}

        </>
    )
}

export default Recs
