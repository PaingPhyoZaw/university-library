import React from 'react'

const BookOverview = ({
    title,
    author,
    genre,
    rating,
    total_copies,
    available_copies,
    description,
    color,
    cover,
}: Book) => {
  return (
    <section className="book-overview">
        <div className="flex flex-col gap-5">
            <h1 className="text-4xl font-bold text-center">A long book title</h1>
        </div>
    </section>
  )
}

export default BookOverview