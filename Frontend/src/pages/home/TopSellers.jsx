import React, { useEffect, useState } from 'react'
import { useFetchAllBooksQuery } from '../../redux/features/books/booksApi';

const categories = ["Choose a genre", "Fiction", "Mystery & Thriller", "Nonfiction", "Romance"]

const TopSellers = () => {

    const [selectedCategory, setSelectedCategory] = useState("Choose a genre");

    const {data: books = []} = useFetchAllBooksQuery();
    

    const filteredBooks = selectedCategory === "Choose a genre" ? books : books.filter(book => 
    book.category === selectedCategory.toLowerCase())

   
  return (
    <div className="section">
        <h2 className="head2"><i className="fa-solid fa-sack-dollar"></i>  Top Sellers</h2>
        {/* category filtering */}
        <div className="">
            <select 
            onChange={(e) => setSelectedCategory(e.target.value)}
            name="category" id="category" className="">                
                {
                    categories.map((category, index) => (
                        <option key={index} value={category}>{category}</option>
                    ))
                }
            </select>
        </div>

        {
            filteredBooks.map((book, index) => (
                <div>{book.title}</div>

            ))
        }
       
    </div>
  )
}

export default TopSellers
