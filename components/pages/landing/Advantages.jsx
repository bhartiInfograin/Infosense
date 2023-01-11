import Link from 'next/link';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import {FcCollaboration} from 'react-icons/fc';
import {IoIosArrowDropright} from 'react-icons/io'

export default function Advantages() {
    return (
        <>
            <section className="advantages">
                <Container>
                    <Row className='justify-content-center'>
                        <Col lg={12} md={12} sm={12}>
                            <div className="head">
                                <h4>Transforming The Ways Businesses Work</h4>
                                <p className='headText'>A shared interest in science and technology and its capacity to significantly alter the lives of actual people gave rise to Infosense. Our employees build our brand and its ideals, and our clients direct our actions. </p>
                            </div>
                        </Col>
                        {
                            Array(5).fill('').map((e, key) => {
                                return <Col lg={4}  md={4} sm={4} key={key}>
                                    <div className="advantage_box_wrapper">
                                        <div className="content">
                                            <span className='content_Icon'><FcCollaboration/></span>
                                            <h4 className='content_heading'>Collaboration</h4>
                                            <p className='content_para'>Blending innovation with creativity to match your requirements.</p>
                                            <Link href={'/'}>learn more<small><IoIosArrowDropright/></small></Link>
                                        </div>
                                    </div>
                                </Col>
                            })
                        }
                    </Row>
                </Container>
            </section>
        </>
    )
}
