import React from "react";
import { Link, useParams } from "react-router-dom"
import { useFetchBookByIdQuery } from "../../redux/features/books/booksApi";
import { getImgUrl } from "../../hooks/getImgUrl";
import { useDispatch } from "react-redux";

const SingleBook = () => {
    const {id} = useParams();
    const {data: book, isLoading, isError} = useFetchBookByIdQuery(id);

    const dispatch = useDispatch();

    const handleAddToCart = (book) => {
        dispatch(addToCart(book))
    }    

    if(isLoading) return <div>Loading...</div>
    if(isError) return <div>Error loading book</div>

    return (
        <div className="row no-gutter">
        <div className="image-row">
            <div className="card">
                <Link to={`/${id}`}>
                    <img
                        src={`${getImgUrl(book?.coverImage)}`}
                        alt={book?.title}
                        className="card-img-top"
                    />
                </Link>
                <h3 className="title4"><Link className="title4" to='/'>{book?.title}</Link></h3>
                <p className="cat4"> <strong>Author: </strong>${book?.author}</p>
                <p className="price4"> <strong>Price: </strong>${book?.newPrice}</p>
                <Link to={`/${book?.id}`}></Link>
                <button
                onClick={() => handleAddToCart(book)} 
                type="button" className="btn btn-outline-warning">Add to cart</button>
            </div>
        </div>
        </div>
    )
}

export default SingleBook