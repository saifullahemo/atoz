import React from 'react'
import {Row, Col} from 'react-bootstrap'
import Tilt from 'react-tilt'
import image from '../../assets/Vector.png'
import icon1 from '../../assets/android.png'
import icon2 from '../../assets/react.png'
import icon3 from '../../assets/ios.png'
import icon4 from '../../assets/flutter.png'



export default function Tech() {
    return (
        <>
            <section className='py-5 tech'>
                <Tilt className='Tilt' 
                options= {{ 
                    max:5,
                    }}>

                <div className="mobile">
                    <div className='container py-4 ps-50 mobiles_card'>

                    <Row>
                        <Col md={6}>
                            <h3>Mobile Application Development</h3>
                        </Col>
                        <Col md={6}>
                            <article className='d-flex apps_list py-1 ps-4'>
                                <img src={icon1} alt="" />
                                {/* <span> <h6>IOS App</h6></span>                                 */}
                            </article>
                            <article className='d-flex apps_list py-1 ps-4'>
                                <img src={icon4} alt="" />
                                {/* <span> <h6>Android App</h6></span>                                 */}
                            </article>
                            <article className='d-flex apps_list py-1 ps-4'>
                                <img src={icon2} alt="" />
                                {/* <span> <h6>Flutter</h6></span>                                 */}
                            </article>
                            <article className='d-flex apps_list py-1 ps-4'>
                                <img src={icon3} alt="" />
                                {/* <span> <h6>React Native</h6></span>                                 */}
                            </article>
                            
                        </Col>
                    </Row>
                    </div>
                </div>
                </Tilt>
                <Tilt className='Tilt' 
                options= {{ 
                    max:5,
                    }}>

                <div className="frontend">
                    <div className='container py-4 ps-50 mobiles_card'>

                    <Row>
                        <Col md={6}>
                            <h3>Mobile Application Development</h3>
                        </Col>
                        <Col md={6}>
                            <article className='d-flex apps_list py-1 ps-4'>
                                <img src={image} alt="" />
                                {/* <span> <h6>IOS App</h6></span>                                 */}
                            </article>
                            <article className='d-flex apps_list py-1 ps-4'>
                                <img src={image} alt="" />
                                {/* <span> <h6>Android App</h6></span>                                 */}
                            </article>
                            <article className='d-flex apps_list py-1 ps-4'>
                                <img src={image} alt="" />
                                {/* <span> <h6>Flutter</h6></span>                                 */}
                            </article>
                            <article className='d-flex apps_list py-1 ps-4'>
                                <img src={image} alt="" />
                                {/* <span> <h6>React Native</h6></span>                                 */}
                            </article>
                            
                        </Col>
                    </Row>
                    </div>
                </div>
                </Tilt>
            </section>
        </>
    )
}
