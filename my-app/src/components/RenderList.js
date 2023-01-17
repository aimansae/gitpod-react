import React from 'react'
import Book from './Book'
function RenderList() {
    const bookList = [
        'book 1',
        'book 2',
        'book 3'

    ]

    const books = [
        {
            title: 'title 1',
            author: 'A',
            pages: '123',
        },

        {
            title: 'title 2',
            author: 'B',
            pages: '222',
        },

        {
            title: 'title 3',
            author: 'c',
            pages: '333',
        }

    ]
    return (
        <div>
            {bookList.map(books => {
                return <h2 key={books}>{books}</h2>

            })} <hr />
        
            {
                books.map(book => {
                    return <Book book={book}/>

                })
            }


        </div>
    )
}

export default RenderList