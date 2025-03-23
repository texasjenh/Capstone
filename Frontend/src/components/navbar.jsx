import { useContext, useState } from 'react'
import { NavLink, Link } from 'react-router-dom';
import './navbar.css'
import avatarImg from "../assets/avatar.png"
import Container from 'react-bootstrap/esm/Container';
import { useSelector } from 'react-redux';

const navigation = [
    {name: "My Dashboard", href:"/dashboard"},
    {name: "My Orders", href:"/orders"},
    {name: "My Books", href:"/books"},
    {name: "My Info", href:"/info"},
    {name: "Logout", href:"/home"}
]
const Navbar = () => {
    
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)

    const cartItems = useSelector(state => state.cart.cartItems);
    console.log(cartItems)
   
    const currentUser = false;

    return (
        <nav expand="lg" className="navbar">
            <Container fluid>
            {/* left side = menu bars & search */}
            <div className="ulleft">
                <ul>
                    <li className="li"><NavLink to="/" className="li"><i className="fa-solid fa-house"></i></NavLink></li>
                    <li className="li"><NavLink to="/allbooks" className="li">All Books</NavLink></li>
                    <li className="li"><NavLink to="/aboutus" className="li">Connect</NavLink></li>
                </ul> 


                <li className="search">
                    <input 
                        type="text" 
                        placeholder="Search..." 
                        className="search-input"
                    />
                    <i className="fa-solid fa-magnifying-glass glass"></i>
                </li>
            </div>

            {/* right side */}
            <div className="ulright">
                <div>         
                    {
                        currentUser ? <>
                        <button className="user" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                        <img src={avatarImg} alt="" className={`xs roundedCircle={true} $ {currentUser ? : ''}`}/>
                        </button>
                                      
                        {/* show dropdowns */}
                        {
                            isDropdownOpen && (
                                <div className="dropdown">
                                    <ul className="uldrop">
                                        {
                                            navigation.map((item) => (
                                                <li key={item.name} onClick>
                                                    <Link to={item.href}>
                                                        {item.name}
                                                    </Link>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            )
                        }
                        </> : <NavLink to="/login"><i className="fa-solid fa-user"></i></NavLink>
                    }
                </div>

                <div>
                    <button className="heart">
                        <i class="fa-solid fa-heart"></i>
                    </button>
                    <NavLink to="/cart"><i className="fa-solid fa-cart-shopping"></i>
                    {
                        cartItems.length > 0 ? <span className="cartCount roundedCircle">{cartItems.length}</span> : <span className="cartCount roundedCircle">0</span>
                    }                    
                    </NavLink>
                    
                </div>                                
            </div>
            </Container>
        </nav>
    )
}
export default Navbar

