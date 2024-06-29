import React from 'react'
import './Cources_category.css'
import SmallButton from '../smallbtn/SmallButton'
import Cources_box from './Cources_box'
import courcesdata from './Cources_data'

function Cources_category() {
  console.log(courcesdata)
  return (
    <>
    <div className='col-12'><SmallButton data="All Cources Categories"/></div>
    <div className="col-12 cources-heading mt-4 "><h2 className='fw-bold' data-aos="fade-up">Courses categories</h2></div>
    <div className="row  mx-auto">
      {courcesdata.map((ele)=>{
        return(
          <>
          <div className="col-md-3"><Cources_box data={ele}/></div>
          </>
        )
      })}
        
        
    </div>
    
    </>
  )
}

export default Cources_category