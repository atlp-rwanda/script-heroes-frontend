import React from 'react'
import {Container, Row, Col} from 'reactstrap'
import facebook from '../assets/fb.png'
import twitter from '../assets/twitter.png'
import linkedin from '../assets/linkedin.png'
import instagram from '../assets/insta.gif'

export default function Footer() {
    return (
        <Container fluid className='footer'>
            <Row className="just-foot">
                <Row className='social-links'>
                    <Col>
                        <a href='https://www.facebook.com/' target='_blank'><img src={facebook}/></a>
                        <a href='http://instagram.com/' target='_blank'><img src={instagram}/></a>
                        <a href='http://linkedin.com/' target='_blank'><img src={linkedin}/></a>
                        <a href='https://twitter.com/' target='_blank'><img src={twitter}/></a> 
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>&copy; 2020 Barefoot Nomad</p> 
                    </Col>
                </Row>
            </Row>
        </Container>
    )
}
