import './App.css';
import Navbar from  "./components/Navbar";
import TextArea from  "./components/TextArea";
import Alert from  "./components/Alert";
import { useState } from 'react';

function App() {
const [mode , setmode] =  useState("light");
const [alert , setalert] = useState(null);
const showalert = (message , type) =>{
  setalert ({
   msg : message,
   type : type
  })
  setTimeout(()=>{
    setalert(null);
  },2000)
}
let togglemode = ()=>{
 if(mode === "light"){
  setmode("dark");
  document.body.style.backgroundColor ="#212529" ;
  document.body.style.color ="white";
  showalert("dark mode on!!", "success");
}
 else{
  setmode("light");
  document.body.style.backgroundColor = "white";
  document.body.style.color =  "#212529";
  showalert("light mode on!!", "success");
 }
}
  return (
    <>
      <Alert alert = {alert}/>
      <Navbar title="TextUtils" mode = {mode} togglemode={togglemode}/>
      <TextArea  caption = "Enter Text Here!"/>
      </>
  );
}

export default App;
