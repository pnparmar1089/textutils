import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked: " +  text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!", "success");
    }

    const handleLoClick = ()=>{ 
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!", "success");
    }

    const handleClearClick = ()=>{ 
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared!", "success");
    }

    const handleOnChange = (event)=>{
        // console.log("On change");
        setText(event.target.value) 
    }

   
    const handleCopy = () => {
        console.log("I am copy");
        var text = document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard!", "success");
    }

    
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }

    const [text, setText] = useState(''); 
   
    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'#212529'}}> 
            <h2>{props.heading}</h2>
            <div className="mb-3"> 
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#495057':'white', color: props.mode==='dark'?'white':'#495057'}} id="myBox" rows="6"></textarea>
            </div>
            <button className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-2" style={{color: props.mode==='dark'?'white':'#212529'}}>
             <h3>Your Text Summary:-</h3>
             <p>words:- {text.length>0?text.split(" ").length:"0"} </p>
             <p>characters:- {text.length}</p>
             <p>Avg.Time To Read:- {text.length>0?0.008 * (text.split(" ").length):"0"} Min.</p>
            <h3>Preview</h3>
            
            <textarea className="form-control" value={text.length>0?text:"Enter something in the textbox above to preview it here"} style={{backgroundColor: props.mode==='dark'?'#495057':'white', color: props.mode==='dark'?'white':'#495057'}} rows="3"></textarea>
        </div>
        
        </>
    )
}
