import React from 'react'

function Chatleft(props) {
  console.log(props.content,"content of props");
  return (
    <>
    <div  style={{marginBottom:"20px"}}><span className="content">{props.content}</span></div>
    
    
    
    
    </>
  )
}

export default Chatleft