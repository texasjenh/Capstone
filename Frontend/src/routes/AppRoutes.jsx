import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/home/Home"
import AboutUs from "../pages/AboutUs";
import AllBooks from "../pages/AllBooks";
import PageNotFound from "../pages/PageNotFound";
import ShoppingCart from "../pages/Cart";
import LoginSignup from "../components/LoginSignup/LoginSignup";
import CartPage from "../pages/books/CartPage";
import CheckoutPage from "../pages/books/CheckoutPage";
import SingleBook from "../pages/books/singleBook";


function AppRoutes(props) {
    
    return (
        <Routes>
    
            <Route index element={<HomePage {...props} />} />

            <Route path="allbooks" element={<AllBooks {...props} />} >

            </Route>
   
            <Route path="aboutus" element={<AboutUs />} /> 

            <Route path="login" element={<LoginSignup />} />

            <Route path="cart" element={<CartPage />} />

            {/* <Route path="checkout" element={<CheckoutPage />} /> */}

            <Route path="/books/:id" element={<SingleBook />} />
   
            <Route path="*" element={<PageNotFound />} /> 

        </Routes>
    )
}
export default AppRoutes;