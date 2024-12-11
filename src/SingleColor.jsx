import React, { useState } from 'react'
import { MdContentCopy } from "react-icons/md";
import { IoCheckmarkDoneOutline } from "react-icons/io5";

const SingleColor = ({rgb,hex}) => {
    const [copy, setCopy] = useState(false)
    const handleCopy = ()=>{
        setCopy(true)
        navigator.clipboard.writeText(`#${hex}`)

    }
  return (
    <div className="col-lg-3 col-md-4">
        <div style={{
            background: `rgb(${rgb})`
        }} className="card shadow border-0 p-2 my-3">

            {copy ? (
            <IoCheckmarkDoneOutline/> 

            ) : (
             <MdContentCopy onClick={handleCopy}/> 

            )}
            

            
            <h5 className='p-2'>#{hex}</h5>

        </div>
    </div>
  )
}

export default SingleColor