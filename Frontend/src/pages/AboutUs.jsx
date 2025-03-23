import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../App.css'

function AboutUs () {
    return (
        <>
            <Container className="about">
                <Row className="justify-content-md-center">
                    <div className="section">  
                        <h2 className='head2'><i className='fa-solid fa-people-roof'></i> About</h2>
                            <p className='about'>We are a boutique bookshop.<br/>
                            Think of "You've Got Mail". </p>
                            <p>Yep, that's us. </p>
                            <p>Except we are tucked away off <br/> the main road of small town U.S.A.<br/>
                            Come in, find a book, have a chat.</p>  
                    </div>
                    
                    <div className="section">   
                        <h2 className='head2'><i className='fa-solid fa-map-location-dot'></i> Location</h2>
                            <address className='address'>
                            123 Around the Corner Lane<br/>
                            Smalltown, US<br/>
                            12345-9876<br/>
                            </address>
                    </div>
                   
                    <div className="section">
                        <h2 className='head2'><i className='fa-solid fa-comment-dots'></i> Connect</h2>
                            <p className='about'> Call: (987) 654-3210<br/>
                            Email:<a className="about" href="mailto:thebooknook@booknook.com"> thebooknook@booknook.net</a></p>
                            <p className='head2'> <i className="fa-brands fa-square-facebook"></i> <i className="fa-brands fa-square-instagram"></i> <i class="fa-brands fa-square-x-twitter"></i> </p>
                    </div>
                </Row>
            </Container>       
    
        </>

    )
}

export default AboutUs