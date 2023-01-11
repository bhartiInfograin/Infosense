import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { IoIosAnalytics } from 'react-icons/io'

export default function BoxSection() {
    return (
        <>
            <section className='aboutboxSection'>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="head">
                                <h2>Our Approach</h2>
                                <p>Infosense handles clients' business as if it were our own. To contribute to the success of our client's businesses, we put ourselves in their position, match our objectives with their goals, and work together. It builds lasting relationships that are enjoyable and generates actual results.</p>
                            </div>
                        </Col>
                        {Array(4).fill('').map((e, key) => {
                            return <Col lg={3} key={key}>
                                <div className="content_wrapper">
                                    <div className="content">
                                        <h4><small className='content_icon'><IoIosAnalytics /></small>Analysis</h4>
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
