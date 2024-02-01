import React,{useState} from 'react'


export default function Textform(props) {

    const [text,settext] = useState("")
const onclickUPhandle= ()=>{
      let newtext = text.toUpperCase()
      settext(newtext)

}
const lowHandle= ()=>{
    let newtext =text.toLowerCase()
    settext(newtext)
}   

const clearHandle= ()=>{
    settext("")
}

const copyHandle= ()=>{
  console.log("copy karoo")
  var  text = document.getElementById("myBox")
  // text.ariaSelected()
  navigator.clipboard.writeText(text.value)
}
const handleOnchange= (event)=>{
    settext(event.target.value)
    console.log("changed")
} 

  return (
    <>
    <div className='container mt-3' style={{color:props.mode==="light"?"black":"white"}} >
  <div className=" container mb-3">
    <h1>Enter Your Text</h1>
    <textarea className="form-control border border-success" id='myBox' value={text} onChange={handleOnchange} placeholder="Leave a comment here" rows="8" style={{background:props.mode==="light"?"center":"#7e8698", color:props.mode==="light"?"black":"white"}}></textarea>
    <div id="Help" className="form-text">We'll never share your text with anyone.</div>
  </div>
  <button type="submit" disabled={text.length===0} onClick={onclickUPhandle} className="btn btn-primary mx-2 my-1">Capitalise</button>
  <button type="submit" disabled={text.length===0} onClick={lowHandle} className="btn btn-primary mx-1 my-1">LowerCase</button>
  <button type="submit" disabled={text.length===0} onClick={clearHandle} className="btn btn-primary mx-1 my-1">clear</button>
  <button type="submit" disabled={text.length===0} onClick={copyHandle}  className="btn btn-primary mx-1 my-1">Copy</button>
   <div className='container my-3'>
    <h2>Details</h2>
    <p>{text.split(" ").length-1}words and {text.length} characters</p>
   </div>
    </div>
    </>
  )
}
