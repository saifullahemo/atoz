import React from 'react'
import {Row, Col, Card} from 'react-bootstrap'
import images1 from '../../assets/code.png'
import images2 from '../../assets/graph.png'
import images3 from '../../assets/graphic-design.png'
import images4 from '../../assets/test.png'
import images5 from '../../assets/dev3.png'

export default function Development() {
    return (
        <>
        <section className="development py-5">
            <div className="container">
                <article className='container px-5 py-5 text-center'>
                    <h3 className="py-3">Software Development Process</h3>
                    <p className='px-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda pariatur voluptates impedit vel illum quo dolor? Obcaecati velit, tempora dolores sit magnam.</p>
                </article>
            <Row xs={2} sm={2} md={12} className="g-4 py-4">

                <Col md={7}>
                    
                    <article>
                        <Row>

                <Col className='p-0' md={6}>

                    <Card className='border-0 p-4 rounded discover'>
                        <Card.Img variant="top" src={images1} />
                        <Card.Body className='px-0'>
                            <h5 className='m-0 py-2'>Discover</h5>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, vel! Alias sunt rerum voluptatem soluta error!</p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='p-0' md={6}>
                    <Card className='border-0 p-4 rounded discover'>
                        <Card.Img variant="top" src={images2} />
                        <Card.Body className='px-0'>
                            <h5 className='m-0 py-2'>Design</h5>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, vel! Alias sunt rerum voluptatem soluta error!</p>
                        </Card.Body>
                    </Card>
                </Col>

                <Col className='p-0' md={6}>
                    <Card className='border-0 p-4 rounded discover'>
                        <Card.Img variant="top" src={images3} />
                        <Card.Body className='px-0'>
                            <h5 className='m-0 py-2'>Build</h5>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, vel! Alias sunt rerum voluptatem soluta error!</p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='p-0' md={6}>
                    <Card className='border-0 p-4 rounded discover'>
                        <Card.Img variant="top" src={images4} />
                        <Card.Body className='px-0'>
                            <h5 className='m-0 py-2'>Deliver</h5>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, vel! Alias sunt rerum voluptatem soluta error!</p>
                        </Card.Body>
                    </Card>
                </Col>

                        </Row>
                    </article>
            </Col>
            <Col md={5}>

                <article md={6} className='devimg'>
                    <div className='dev'>

                    <img src={images5} alt="" />
                    </div>
                </article>
            </Col>
            </Row>
            </div>
        </section>

        </>
    )
}
