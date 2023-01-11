import React,{useEffect}from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import background from '../../../public/images/hero_BG.png';
import Axios from 'axios'

export default function HeroSection() {



    // useEffect(() => {
    //     Axios.get('http://infosense.tech:3000/v2/get-header/63be8fae160f04c4450ee61f')
    //         .then((data) => {
    //             console.log(data.data.data)
    //         })
    //         .catch((error) => {
    //             // const errormsg = error.response.data.message;
    //             console.log("error", error)
    //         })
    // }, [])




    return (
        <>
            <section className='heroSection'>
                <Container fluid>
                    <Row>
                        <Col lg={12} className="g-0">
                            <div className='hero_wrapper' style={{ "backgroundImage": `url(${background.src})` }}>
                                <div className='hero_content'>
                                    <h1>Big on Data Science & AI</h1>
                                    <p>Empowering Your Business With Data Science and AI Technology</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
