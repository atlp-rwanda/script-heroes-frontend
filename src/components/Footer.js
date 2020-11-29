import React from 'react'
import facebook from '../assets/fb.png'
import twitter from '../assets/twitter.png'
import linkedin from '../assets/linkedin.png'
import instagram from '../assets/insta.gif'

export default function Footer() {
    return (
        <div className='footer-containter d-flex'>
            <div className='social'>
                <a href='https://www.facebook.com/' target='_blank'><img src={facebook}/></a>
                <a href='http://instagram.com/' target='_blank'><img src={instagram}/></a>
                <a href='http://linkedin.com/' target='_blank'><img src={linkedin}/></a>
                <a href='https://twitter.com/' target='_blank'><img src={twitter}/></a>                  
            </div>
            <p>&copy; 2020 Barefoot Nomad</p> 
        </div>
    )
}
