import React from 'react'
import './Contact.css'
import SmallButton from '../smallbtn/SmallButton'
import contactdata from './Contactdata'
import Contactbox from './Contactbox'
import { NavLink } from 'react-router-dom'


function Contact() {
  return (
    <>
    <NavLink to="/contact">
    <div className='col-12'><SmallButton data="Contact Us"/></div>
    </NavLink>
    <div className="col-12 cources-heading mt-4 "><h2 className='fw-bold' data-aos="fade-up">Connect with us. We are weating <br/> for you message.</h2></div>
    <div className='row contact'>
    {contactdata.map((ele)=>{
        return(
          <>
          <div className="col-md-3 mx-auto"><Contactbox data={ele}/></div>
          
          </>
        )
      })}
    </div>
    </>
  )
}

export default Contact