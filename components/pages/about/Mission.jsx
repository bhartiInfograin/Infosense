import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export default function Mission() {
    return (
        <>
            <section className='mission'>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="content_area">
                                <h2>Why are we different?</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, necessitatibus!</p>
                            </div>
                        </Col>
                        {Array(4).fill('').map((e, key) => {
                            return <Col lg={3} key={key}>
                                <div className="content_wrapper">
                                    <div className="content">
                                        <h4><small className='content_icon'></small>AI Empowered</h4>
                                        <p>The project's scope is defined after determining all needs and specifications for the required AI solution. During this phase, our primary responsibility is to listen and lead the discussion as our clients describe the constraints and issues they have been running into in their current operations.
                                        </p>
                                    </div>
                                </div>
                            </Col>
                        })}
                    </Row>
                </Container>
            </section>
        </>
    )
}
