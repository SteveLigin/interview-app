import React from 'react'
import './footer.css'
import { IoLogoWhatsapp } from "react-icons/io";
import imgg from "../../assets/12.PNG"
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";

const Footer = () => {
  return (
    <div className='FooterAll'>

        <div className='FooterMain'>

            <img src={imgg} alt="logo" className='Footerlogo'/>

            <div className='Footernews'>
                <h4 className='Footerheader foodernewslet'>Newsletter</h4>

                <input type="email" className='Footerinpu' placeholder='Enter Your Email'/> 

                <button className='FootBut'>Subscribe</button>
            </div>
        </div>

        <div className='FooterSecond'>
            <p className='Footerpara'>
            With an impressive record spanning over three decades, across two family generations, Al Habib's success has been fueled by the sound reputation it has established over the years.
            <br /> <br />
            As the largest and only integrated realty company in Oman, offering a complete range of products and services - in property management, valuation, brokering, feasibility studies, contracting and property development – the Company has earned the confidence of the business community in Oman. They recognize that Al Habib's extensive experience and knowhow assures them greater value and unmatched expertise.
            </p>

            <div className='footerSiteCon'>
                <div className='FooterSitemap'>
                    <h4 className='Footerheader'> Sitemap </h4>

                    <div className='Footerpara'>Who We Are &nbsp;&nbsp;&nbsp;&nbsp; <span className='FooterBlog'>Medio center</span></div>

                    <div className='Footerpara'>What We Do &nbsp;&nbsp;&nbsp;&nbsp; <span className='FooterBlog'>Blogs</span></div>

                    <div className='Footerpara'>Properties</div>

                    <div className='Footerpara'>CSR</div>
                </div>

                <div className='FooterContact'>
                        <h4 className='Footerheader'>Contact Info</h4>

                        <div className='Footerpara'> <span className='foot '>Location </span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;P.O Box: 2663, Ruwi 112</div>

                        <div className='Footerpara'><span className='foot'>phone</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(+968)24702666</div>
                        
                        <div className='Footerpara'><span className='foot'>Fax </span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(+968)24702666</div>

                        <div className='Footerpara'><span className='foot'>Mail </span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;info@alhabib.om</div>
                        <br /><br />
                    </div>
                </div>
                </div>
                <div className='footerCopyR'>
                    <p className='FooterCopy'>&copy; AI Habib 1978 - 2023, All Rights Reserved</p>
                    <div className=''>
                    <IoLogoWhatsapp className='FooterWhats' />
                    <FaFacebookF className='FooterWhats' />
                    <FaTwitter className='FooterWhats' />
                    <FaLinkedinIn className='FooterWhats' />
                    <PiInstagramLogoFill className='FooterWhats footInsta' />
                    </div>
                </div>
           
        
    </div>
  )
}

export default Footer