import React, {useState} from 'react'

export default function TextArea(prop) {
    const [Text , setText] = useState("Welcome!");
    const updateLowercase = () =>{
       let newText = Text.toLowerCase();
        setText(newText);
    }
    const updateUppercase = () =>{
        let newUptext = Text.toUpperCase();
        setText(newUptext);
    }
    const clearText = () =>{
        let clear = " ";
        setText(clear);
    }
    const copyText = () =>{
       let content = document.getElementById("exampleFormControlTextarea1");
       content.select();
       navigator.clipboard.writeText(Text);
    }
    const changefun = (event) =>{
        setText(event.target.value);
    }//this function allows the user to write random text in the textbox. 
        return ( 
        <>
        <h1 style={{margin:"0 10px 10px 80px"}}>{prop.caption}</h1>
<div className="form-floating" style={{margin:"0 10px 10px 80px"}}>
<textarea className="textbox" id="exampleFormControlTextarea1" style={{height
: "250px", width : "900px" }}  value={Text} onChange={changefun}>
</textarea>

  {/* <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: "250px",padding:"10px"}} value={Text}></textarea>
  <label for="floatingTextarea2"></label> */}
</div>
<div style={{margin:"0 10px 10px 80px"}}>
<button type="button" class="btn btn-primary mx-2 my-4" onClick={updateLowercase}>LowerCase</button>
<button type="button" class="btn btn-primary mx-2 my-4" onClick={updateUppercase}>UpperCase</button>
<button type="button" class="btn btn-primary mx-2 my-4" onClick={clearText}>ClearText</button>
<button type="button" class="btn btn-primary mx-2 my-4" onClick={copyText}>CopyText</button>
</div>
</>
    )
}