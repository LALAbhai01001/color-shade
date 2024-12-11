import React, { useState } from 'react'
import Values from 'values.js';
import SingleColor from './SingleColor';

const Color = () => {

    const [colorVal, setColorVal] = useState("");
    const [error, setError] = useState(false)
    const [colorData, SetColorData] = useState()

    // console.log(colorVal)

    const handleChange = (e) => {
    e.preventDefault();
    try {
        setError(false)
         const color = new Values(colorVal).all(10);
         SetColorData(color)
         console.log(color);
    } catch (error) {
        setError(true)
    }
   
    };
    
  return (
    <>
      <div className="container shadow col-lg-5 mx-auto p-4 my-4">
        <h2 className="display-4 m-0 text-center">Color Generate</h2>
        <form>
          <label htmlFor="name">Color Name</label>
          <input
            type="text"
            id="name"
            placeholder="e.g Green"
            className={`form-control ${error && "is-invalid" } `}
            value={colorVal}
            onChange={(e) => setColorVal(e.target.value)}
          />
          <button
            onClick={handleChange}
            className="btn btn-dark w-100 my-2 p-2"
          >
            Generate
          </button>
        </form>
      </div>


    <div className="container mx-auto row">
        {colorData?.map((items, index)=>{
            return <SingleColor key={index} {...items} hex={items.hex}/>
        })}
    </div>
    
    </>
  );
}

export default Color