import React from 'react'
export default function Alert(prop){
  const Capitalize =(word)=>{
   const lower = word.toLowerCase();//indicates that complete word to be in lower case 1st.
   return lower.charAt(0).toUpperCase()+lower.slice(1)//indicates that the 0th letter should be in uppercase and rest in lowercase.
  }
    return(
  prop.alert&&<div class="alert alert-success" role="alert">
  <strong>{Capitalize(prop.alert.type)}</strong> : <strong>{Capitalize(prop.alert.msg)}</strong>
</div>
)
}