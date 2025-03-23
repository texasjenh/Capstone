import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getImgUrl } from '../../hooks/getImgUrl';
import { removeFromCart, clearCart } from '../../redux/features/cart/cartSlice';
import './books.css'


const CartPage = () => {
    const cartItems = useSelector(state => state.cart.cartItems);
    const dispatch = useDispatch()

    const totalPrice = cartItems.reduce((acc, item) => acc + item.newPrice, 0).toFixed(2);
    
    const handleRemoveFromCart = (book) => {
        dispatch(removeFromCart(book))
    }

    const handleClearCart = () => {
        dispatch(clearCart())
    }

    return (

        <>
            <section class="h-100">
                <div class="container h-100 py-5">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col-10">
        
                            <div className="d-flex justify-content-center align-items-center mb-4">
                                <h3 className="mb-0 head2"><i className="fa-solid fa-bag-shopping"></i>  Shopping Cart</h3>
                            </div>
                                <div className="mn-0">
                                    <button type="button" 
                                    onClick={() => handleClearCart()}
                                    className="btn btn-dark">
                                    <span>Clear Cart</span>
                                    </button>
                                </div>
                            
                
                            <div className="card rounded-3 mb-4">
                                <div className="card-body p-4">

                                    {
                                        cartItems.length > 0 ? (
                                            <div className="row d-flex justify-content-between align-items-center">
                                                {
                                                    cartItems.map((book) => (
                                                        <>
                                                        <div key={book?.id} className="col-md-2 col-lg-2 col-xl-2">
                                                            <img src={`${getImgUrl(book?.coverImage)}`} 
                                                            className="card-img-top">
                                                            </img>
                                                        </div>
                                                        <div className="col-md-3 col-lg-3 col-xl-3">
                                                            <p className="mb-2 title4">{book?.title}</p>
                                                            <p className="cat4"><span className="cat4">Author: </span>{book?.author}</p>
                                                            <p className="cat4"><span className="cat4">Format: </span>{book?.format}</p> 
                                                        </div>
                                                        <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                                                            <button className="btn btn-link px-2"
                                                                onClick="this.parentNode.querySelector('input[type=number]').stepDown()">
                                                                <i className="fas fa-minus"></i>
                                                            </button>
        
                                                            <input id="form1" min="0" name="quantity" value="1" type="number" className="form-control from-control-sm"/>
        
                                                            <button className="btn btn-link px-2"
                                                                onClick="this.parentNode.querySelector('input[type=number]').stepUp()">
                                                                <i className="fas fa-plus"></i>
                                                            </button>
                                                        </div>
                                                        <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                                            <h5 className="mb-0 price4">${book?.newPrice}</h5>
                                                        </div>
                                                        <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                                            <button onClick={() => handleRemoveFromCart(book)} 
                                                            type="button" className="text-danger"><i className="fa-solid fa-trash"></i>
                                                            </button>
                                                        </div>
                                                        </>
                                                    ))
                                                }                                        
                                            </div>
                                        ) : (<p className="title4">No books in your cart!</p>)
                                    }
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-4 offset-md-4">
                                <p className="total">Subtotal: ${totalPrice ? totalPrice : 0}</p>
                            </div>
                        </div>

                        <div className="card mb-4">
                            <div className="card body p-4 d-flex flex-row">
                                <div className="form-outline flex-fill">
                                    <input type="text" id="form1" className="form-control form-control-lg"/>
                                    <label className="form-label" for="form1">Discount Code</label>
                                </div>
                                <button type="button" className="btn btn-outline-warning btn-lg ms-3">Apply</button>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-body">
                                <Link to="/checkout" className="btn btn2 btn-block btn-lg">
                                    Proceed to Checkout
                               </Link>
                            </div>
                        </div>


                    </div>
                </div>
            </section>

            
        </>
        
    )
}

export default CartPage
