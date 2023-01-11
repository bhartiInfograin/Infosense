import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import circle from '../../../public/images/circle.png';
import Ballistic from '../../../public/images/ballistic.png';
import Foxhum from '../../../public/images/foxhum.png';
import Humanetics from '../../../public/images/humanetics.png'

export default function TrustedBy() {
    return (
        <>
            <section className='trustedBy'>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <h4 className='text-center'>Trusted by Innovative Companies</h4>
                        </Col>
                        <Col lg={12}>
                                <div className="trusted_wrapper">
                                    <div className="company_image">
                                        <Image src={circle.src} fluid />
                                    </div>
                                    <div className="company_image">
                                        <Image src={Ballistic.src} fluid />
                                    </div>
                                    <div className="company_image">
                                        <Image src={Foxhum.src} fluid />
                                    </div>
                                    <div className="company_image">
                                        <Image src={Humanetics.src} fluid />
                                    </div>
                                    {/* <div className="company_image">
                                        <Image src={'https://www.monalabs.io/hubfs/mona%20logo.svg'} fluid />
                                    </div>
                                    <div className="company_image">
                                        <Image src={'https://www.monalabs.io/hubfs/mona%20logo.svg'} fluid />
                                    </div>
                                    <div className="company_image">
                                        <Image src={'https://www.monalabs.io/hubfs/mona%20logo.svg'} fluid />
                                    </div>
                                    <div className="company_image">
                                        <Image src={'https://www.monalabs.io/hubfs/mona%20logo.svg'} fluid />
                                    </div>
                                    <div className="company_image">
                                        <Image src={'https://www.monalabs.io/hubfs/mona%20logo.svg'} fluid />
                                    </div> */}
                                </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
