import React from 'react'
import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import defaultImage from '../../assets/book.jpg'

const Book = (props) => {
    const { book } = props;

    const imageUrl = props.book['Image-URL-M'];

    if (!book) {
        return <div>No book data available.</div>;
    }

    console.log("book=>", book["num_ratings"]);
    return (
        <>
            <Card sx={{
                height: '400px',
                width: '200px',
                display: 'flex',
                flexDirection: 'column'
            }}>
                <CardMedia
                    sx={{
                        // 16:9,
                        height: "300px",
                        pt: '56.25%',
                    }}
                    image={imageUrl ? imageUrl : defaultImage}
                    title="image"
                />
                <CardContent>
                    <Typography variant='h6' gutterBottom>
                        {props.book['Book-Title']}
                    </Typography>
                    <Typography>
                        {props.book['Book-Author']}
                    </Typography>
                </CardContent>
            </Card></>
    )
}

export default Book
