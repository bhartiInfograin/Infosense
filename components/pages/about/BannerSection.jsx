import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export default function BannerSection() {
    return (
        <>
            <section className='about_page'>
                <Container >
                    <Row>
                        <Col lg={12}>
                            <div className="mainSection">
                                <div className="content_area">
                                    <h1>About Us</h1>
                                    <p>Infosense is an AI development company based in India.
                                        Our team enjoy challenges that call for innovation and
                                        cutting-edge technology. We use software with advanced
                                        artificial intelligence capabilities that help to transform
                                        the world for the better. Our superpower is an unwavering
                                        passion for technology and client success. Over the years,
                                        our goal has remained the same: exceptional customer success.
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
