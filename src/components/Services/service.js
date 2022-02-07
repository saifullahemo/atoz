import React from 'react'
import {Row, Col, Card} from 'react-bootstrap'
import images from '../../assets/web_design.png'
import devimage from '../../assets/dev_1.png'

export default function service() {
    return (
        <>
        <section className='service'>

            <div className="container">
                <div className="services container px-5">
                    <h6 className='pt-5 pb-2 text-center'>Services</h6>
                    <h3 className='py-3'>What does our organization do?</h3>
                    <p className="px-5">Lorem, ipsum dolor sit Blanditiis, dicta! Cumque delectus laudantium aspernatur placeat voluptate eveniet eligendi? Hic aliquid possimus fugiat minima perferendis magnam minus? Nemo iure earum aliquam.</p>
                    <img src={devimage} alt="service" />
                </div>

            <Row xs={2} sm={2} md={4} className="g-4 web_design">
                <Col>
                    <Card className='border-0 shadow p-4 rounded'>
                        <Card.Img variant="top" src={images} />
                        <Card.Body >
                            <p className='p-0 m-0'>Web Design</p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className='border-0 shadow p-4 rounded'>
                        <Card.Img variant="top" src={images} />
                        <Card.Body>
                            <p className='p-0 m-0'>Web Development</p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className='border-0 shadow p-4 rounded'>
                        <Card.Img variant="top" src={images} />
                        <Card.Body>
                            <p className='p-0 m-0'>Digital Marketing</p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className='border-0 shadow p-4 rounded'>
                        <Card.Img variant="top" src={images} />
                        <Card.Body>
                            <p className='p-0 m-0'>Domain Hosting</p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row xs={2} sm={2} md={4} className="g-4 pt-md-4 pt-sm-4 pt-4 web_design">
                <Col>
                    <Card className='border-0 shadow p-4 rounded'>
                        <Card.Img variant="top" src={images} />
                        <Card.Body >
                            <p className='p-0 m-0'>Web Design</p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className='border-0 shadow p-4 rounded'>
                        <Card.Img variant="top" src={images} />
                        <Card.Body>
                            <p className='p-0 m-0'>Web Development</p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className='border-0 shadow p-4 rounded'>
                        <Card.Img variant="top" src={images} />
                        <Card.Body>
                            <p className='p-0 m-0'>Digital Marketing</p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className='border-0 shadow p-4 rounded'>
                        <Card.Img variant="top" src={images} />
                        <Card.Body>
                            <p className='p-0 m-0'>Domain Hosting</p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            </div>
        </section>
        </>
    )
}
