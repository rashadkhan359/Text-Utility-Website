import React, {useState} from 'react'


export default function TextForm(props) {
    const [text, setText] = useState('');
    //text = "new Text"  //Wrong way to change the state
    //setText("Rashad"); //Right way

    //UPPERCASE
    const handleUpperCaseOnClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case", "success");
    }
    //lowercase
    const handleLowerCaseOnClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case", "success");
    }
    //aLtErNaTeCaSe
    const handleAlternateCaseOnClick = ()=>{
        let newText = '';
        for(let i=0; i<text.length; i++){
            if(i%2===0){
                newText += text.charAt(i).toLowerCase();
            }else{
                newText += text.charAt(i).toUpperCase();
            }
        }
        setText(newText);
        props.showAlert("Converted to Alternate Case", "success");
    }
    //Sentence case
    const handleSentenceCaseOnClick = ()=>{
        let newText = '';
        for(let i=0; i<text.length; i++){
            if(i===0){
                newText += text.charAt(i).toUpperCase();
            }else if(text.charAt(i)==='.'){
                if (text.charAt(i+1)===' '){
                    newText = newText+'.'+ text.charAt(i+1) + text.charAt(i+2).toUpperCase();
                    i=i+2;
                }else{
                    newText = newText + '. ' +  text.charAt(i+1).toUpperCase();
                    i=i+1;
                }
            }else{
                newText += text.charAt(i).toLowerCase();
            }
        }
        setText(newText);
        props.showAlert("Converted to Sentence Case", "success");
    }

    const handleOnChange = (event)=>{        //If you don't listen to event, you can't type in textarea.
                                            //when you try to type it just puts the value{text} again and again without adding your typed characters.
        setText(event.target.value);        //This will help add your text and value{text} both!!!!
    }

    let words = text.split(" ").length;
    //This below code stops length from showing 1 if nothing is written in textarea and if word ends with space.
    if (text === "" || text.endsWith(" ")){
        words -= 1;
    }

  return (
    <div style={{color: props.mode===`dark`?`white`:`black`}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" style={{backgroundColor: props.mode===`dark`?`black`:`white`, color: props.mode===`dark`?`white`:`#262727` }} value={text} onChange={handleOnChange} id="textArea" rows="3"></textarea>
        {/* THIS IS AN OBJECT =>  {backgroundColor: props.mode===`dark`?`black`:`white`, color: props.mode===`dark`?`white`:`#262727` } */}
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpperCaseOnClick}>UPPERCASE</button>
        <button className="btn btn-primary mx-2" onClick={handleLowerCaseOnClick}>lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleAlternateCaseOnClick}>aLtErNaTeCaSe</button>
        <button className="btn btn-primary mx-2" onClick={handleSentenceCaseOnClick}>Sentence case</button>
        <div className="container my-5">
            <h3>Text Stats</h3>
            <p>Words: {words} | Characters: {text.length}</p>
            <p>Time in seconds to read: {(words*0.2).toFixed(2)}s</p> {/*toFixed(2) is used here to round to 2 digits*/}
        </div>
    </div>
  )
}
