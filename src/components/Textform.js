
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
    
<>    
    <div>
<div className="my-3">
<label htmlFor="exampleFormControlTextarea1" className="form-label my-3" > {props.title}</label>
  <textarea className="form-control my-3" value= {text} onChange={handleOnchange} id="exampleFormControlTextarea1" rows="9" ></textarea>
</div>
<button className="btn btnprimary mx-2" onClick={handleUpclick}>Convert to Uppercase</button>
   
   <button className='btn 2ndary mx-2' onClick={handleLowCLlick}>Convert to Lowercase</button>
    </div>

    <div className="container my-3">

    <h1>Your text Summary</h1>
    
    <p>
    {text.length} number of characters written and {text.split(" ").length} number of words typed
    </p>
    <p>
        Average words read in {text.split(" ").length*0.0042 }mins
    </p>
    <br/>
    
    <h3> Preview </h3>
    <p>
        {text}
</p>
    </div>
    </>
)
}
