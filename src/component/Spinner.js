import React from 'react'
import loading from "../../src/spinner.gif"
const Spinner = ()=>{
    return (
      <div className='text-center'>
        <img src={loading} alt="spinner"  className='my-3'/>
      </div>
    )
  }

  export default Spinner
