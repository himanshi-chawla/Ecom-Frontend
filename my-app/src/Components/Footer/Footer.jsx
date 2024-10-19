import React from 'react'
import './Footer.css'
import footer_logo from '../Assests/logo_big.png'
import  Instagram_icon  from '../Assests/instagram_icon.png'
import Pinterest from '../Assests/pintester_icon.png'
import WhatsApp from '../Assests/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="" />
            <p>E-com</p>
        </div>
        <div>
            <ul className="footer-links">
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="footer-social-icon">
                <div className="footer-icon-container">
                    <img src={Instagram_icon} alt="" />

                </div>
                <div className="footer-icon-container">
                    <img src={Pinterest} alt="" />

                </div>
                <div className="footer-icon-container">
                    <img src={WhatsApp} alt="" />

                </div>
            </div>
            <div className="footer-copyright">
                <hr />
                <p>Copyright @ 2023 All Right reserved</p>
            </div>

        </div>
      
    </div>
  )
}

export default Footer
