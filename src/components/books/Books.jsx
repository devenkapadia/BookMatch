import { React } from 'react'
import { Grid } from '@mui/material'
import Book from '../book/Book';
import './books.css'

const Books = (props) => {
    const { books } = props
    console.log(books);
    return <>
        <div className="bookGrid">
            <Grid container spacing={6}>
                {books.map((b) => (
                    <Grid item key={b}>
                        <Book book={b} />
                    </Grid>
                ))}
            </Grid>
        </div>
    </>
}

export default Books
