import React from 'react';
import Container from 'react-bootstrap/Container';
import "./header.css"

function Header() {
    return (
       
            <header className="header">
                <h1 className="h1">~The Book Nook~</h1>
                <img src="/images/bookshelf.jpg" alt="colorful bookshelf"/>
            </header>

            
         
    )
}

export default Header