// rfc
import React, { useState } from 'react'

// console.log('Enter your text here2');

export default function TextForm(props) {

    
    const handleUpClick = () => {
        console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = () => {
        console.log("Lowercase was clicked");
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleOnClick = (event) => {
        console.log("On change");
        setText(event.target.value);
    }

    const handleClearClick = () => {
        let newText = '';
        setText(newText);
    }

    // const handleExtraSpace = () => {
    //     let newText = text.split(/[ ]+/);
    //     setText(newText.join(" "));
    // }

    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard", "success");
    }

    const [text, setText] = useState('');
    // text = "new text" // Wrong way to change the state
    // setText = {"new text"} // Right way to change the state
    return (
        <>
            <div className='container' style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
                <h1 >{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnClick} style={{backgroundColor: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'white' : 'black'}} id="myBox" rows="8" ></textarea>
                </div>

                <button className={`btn btn-${props.mode} mx-1`} onClick={handleUpClick}>Convert to Uppercase</button>
                <button className={`btn btn-${props.mode} mx-1`} onClick={handleLoClick}>Convert to Lowercase</button>
                <button className={`btn btn-${props.mode} mx-1`} onClick={handleClearClick}>Clear the text</button>
                <button className={`btn btn-${props.mode} mx-1`} onClick={handleCopy}>Copy to clipboard</button>

                {/* <button className={`btn btn-${props.mode==='light'? 'dark':'light'} mx-1`} onClick={handleUpClick}>Convert to Uppercase</button>
                <button className={`btn btn-${props.mode==='light'? 'dark':'light'} mx-1`} onClick={handleLoClick}>Convert to Lowercase</button>
                <button className={`btn btn-${props.mode==='light'? 'dark':'light'} mx-1`} onClick={handleClearClick}>Clear the text</button>
                <button className={`btn btn-${props.mode==='light'? 'dark':'light'} mx-1`} onClick={handleCopy}>Copy to clipboard</button> */}

                {/* <button className='btn btn-primary mx-1' onClick={handleExtraSpace}>Remove Extra Space</button> */}
            </div>
            <div className='container my-3' style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
                <h2>Yor text Summary</h2>
                <p>{text.split(" ").filter(function(text){return text!=="";}).length} Words {text.length} Characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2>Yor text Summary</h2>
                <p>{text.length>0?text:"Enter something in the textbox above for preview"}</p>
            </div>
        </>
    )
}
