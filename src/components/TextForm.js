import React, {useState} from 'react'

export default function TextForm(props) {

    const [text, setText] = useState("");
    const onUpClick= () =>{
            let newText;
            newText = text.toUpperCase(); 
            setText(newText);
            props.showAlert("Changed to uppercase","success");
    }
    const onLoClick= () =>{
      let newText;
      newText = text.toLowerCase(); 
      setText(newText);
      props.showAlert("Changed to lowercase","success");
    }
    const onClearClick= () =>{
      let newText;
      newText = ""; 
      setText(newText);
      props.showAlert("Text Cleared","success");
    }
    const onReplaceText= () =>{
     let newText= prompt("Enter to replace");      
      setText(newText);
      props.showAlert("Text Replaced","success");
    }
    const onTextChange= (event) =>{
        setText(event.target.value);
    }
    
  return (
    <>
    <div className="container my-3" style={{color:(props.mode==='light')? 'black':'white'}}> 
        <h3>{props.heading}</h3>  
        <div className='mb-3'>  
        <textarea className="form-control"  rows='6' value={text} style={{backgroundColor:(props.mode==='light')? 'white':'grey', color:(props.mode==='light')? 'black':'white'}} onChange={onTextChange}></textarea>
        </div>
        
        <button className="btn btn-primary mx-2" onClick={onUpClick}>ToUppercase</button>
        <button className="btn btn-primary mx-2" onClick={onLoClick}>ToLowercase</button>
        <button className="btn btn-primary mx-2" onClick={onClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={onReplaceText}>Replace </button>
        </div>
        <div className='container my-3'style={{color:(props.mode==='light')? 'black':'white'}}>
        <h3> Your Text Summary</h3>
        <p>{text.split(" ").length} Word and {text.length} Characters</p>
        <p>{0.08 * text.split(" ").length} Minutes Read </p>
        <h3>Preview</h3>
        <p>{text}</p>
        </div>
        </> 
         )
}
