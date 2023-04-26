import React from 'react'

export default function Textform(props) {
  return (
    <div>
<div className="mb-3">
<label htmlFor="exampleFormControlTextarea1" className="form-label"> {props.title}</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="9"></textarea>
</div>
<button className="btn btnprimary">COnvert to Uppercase</button>
    </div>
  )
}
