import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import bannerImg from "../../assets/banner.png"
import SubscribeForm from '../../components/Subscribe'
import '../../App.css'



const Banner = () => {
    return (
        <>
            <Container className="d-flex flex-column about">
                <Row className="justify-content-between">
                    <h2 className="head2"><i className="fa-solid fa-book-open-reader"/> Find your next great read...</h2>     
                    <Col className="col-6">
                        <p className="about2">It is time to update your reading list with some of the latest and greatest releases in the literary world!</p>
                        <p className="about2"> Get weekly new release info straight to your inbox.</p>
                        <SubscribeForm />
                    </Col>

                    <Col className="col-6">
                        <img src={bannerImg} className="bannerImg" alt="" />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Banner