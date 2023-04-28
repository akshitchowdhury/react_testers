
import React, {useState} from 'react'

export default function Textform(props) {

    const [text, setText] = useState('Enter text here')
    const handleUpclick = () =>{

        

        let newText = text.toUpperCase()
        
        setText( newText)
        
    }

    const handleLowCLlick = ()=>{

        let lowtext = text.toLowerCase()

        setText(lowtext)

        console.log("low case clicked"
        )
    }

const handleOnchange = (event)=> {
    setText(event.target.value);
    console.log("On change fired")
}

    return (
    
   
    
    <div>
<div className="my-3">
<label htmlFor="exampleFormControlTextarea1" className="form-label my-3" > {props.title}</label>
  <textarea className="form-control my-3" value= {text} onChange={handleOnchange} id="exampleFormControlTextarea1" rows="9" ></textarea>
</div>
<button className="btn btnprimary mx-2" onClick={handleUpclick}>Convert to Uppercase</button>
   
   <button className='btn 2ndary mx-2' onClick={handleLowCLlick}>Convert to Lowercase</button>
    </div>
  )
}
