import React from 'react'
import {Col, Button, Container, Image, Row } from 'react-bootstrap';
import Al from '../../../public/images/Al.png';

export default function Section2() {
    return (
        <>
            <section className='section2'>
                <Container fluid>
                    <Row>
                        <Col lg={7}>
                            <div className='img_wrapper'>
                                <div className="content">
                                    <Image src={Al.src} fluid />
                                </div>
                            </div>
                        </Col>
                        <Col lg={5}>
                            <div className='content_wrapper'>
                                <div className="content">
                                    <h4>Result-Driven Development Process</h4>
                                    <p>Infosense believes in transparent and trustworthy communication. We have faith in our skills and knowledge. Our attention to detail helps us in the initiatives we undertake. We work to primarily benefit the people to whom we have pledged our services.</p>
                                    <button className='LearnMoreBtn'>Learn More</button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
