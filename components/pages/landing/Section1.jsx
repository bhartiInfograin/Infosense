import React from 'react'
import { Col, Button, Container, Image, Row } from 'react-bootstrap';
import Group from '../../../public/images/Group.png';

export default function Section1() {
    return (
        <>
            <section className='section1'>
                <Container>
                    <Row>
                        <Col lg={6} md={6} sm={6}>
                            <div className='content_wrapper'>
                                <div className="content">
                                    <h4>Settle For Nothing But The Best</h4>
                                    <p>Our Data and AI engineers can solve complex problems by leveraging different AI and Data Science Models. Unlock the possibilities to gain new insights and generate business revenues by the best use of the data.</p>
                                    <button className='LearnMore'>Learn More</button>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} md={6} sm={6}>
                            <div className='img_wrapper'>
                                <div className="content">
                                    <Image src={Group.src} />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
