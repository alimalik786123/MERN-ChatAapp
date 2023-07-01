import React from 'react'
import 'animate.css'
function Chatright(props) {
  return (
    <>
    {/* <div style={{marginBottom:"80px",width:"100%"}}><span className="con clear">{props.content}</span></div> */}
    <div className="message1 right1 con animate__slideInUp">{props.content}</div>
    

    </>
  )
}

export default Chatright