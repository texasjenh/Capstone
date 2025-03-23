import React from "react";
import { getImgUrl } from "../../hooks/getImgUrl";
import { Link } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/cart/cartSlice";
import './books.css'


const BookCard = ({book}) => {
    const dispatch = useDispatch();

    const handleAddToCart = (book) => {
        dispatch(addToCart(book))
    }
    
    return (
        <div className="row no-gutter">
        <div className="image-row">
            <div className="card">
                <Link to={`/books/${book.id}`}>
                    <img
                        src={`${getImgUrl(book?.coverImage)}`}
                        alt=""
                        className="card-img-top"
                    />
                </Link>
                <h3 className="title4"><Link className="title4" to='/books/'>{book?.title}</Link></h3>
                <p className="cat4"> <strong>Author: </strong>${book?.author}</p>
                <p className="price4"> <strong>Price: </strong>${book?.newPrice}</p>
                <Link to={`/books/${book.id}`}></Link>
                <button
                onClick={() => handleAddToCart(book)} 
                type="button" className="btn btn-outline-warning">Add to cart</button>
            </div>
        </div>
        </div>
    )
}

export default BookCard