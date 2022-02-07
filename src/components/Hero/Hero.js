import React from 'react'
import {Row, Col} from 'react-bootstrap'
import image from "../../assets/hero.png"
import { Button } from '../Button/Button'

export default function Hero() {
    return (
        <>
        <section className="hero d-flex align-items-center">

        <div className="container">
            <Row>
                <Col md={6} >
                    <h3 className='pt-5'>BEST WEB & MOBILE APP</h3>
                    <h4>DEVELOPMENT COMPANY</h4>
                    <p className="py-md-3 py-sm-3">High Quality Web & Mobile Application Design & Development Solution, that will help you to achieve new heights in your business.</p>
                    
                    <Row className="d-flex" sm={10}>
                        
                        <Col md={4} sm={4} xs={4}>
                            <Button onClick={() => {console.log("you clicked on me !");}}
                                type="button"
                                buttonStyle="btn--primary-solid"
                                buttonSize="btn--large"
                                className=""
                            >Our projects</Button>
                        </Col>

                        <Col md={4} sm={4} xs={4}>
                            <Button onClick={() => {console.log("you clicked on me !");}}
                                type="button"
                                buttonStyle="btn--primary-outline"
                                buttonSize="btn--large"
                                className=""
                            >Get Qoute</Button>
                        </Col>

                    </Row>
                </Col>

                <Col md={6} sm={10}>
                    <img className="pt-sm-4" src={image} alt="Hero" />
                </Col>
            </Row>
        </div>
        </section>
        </>
    )
}
