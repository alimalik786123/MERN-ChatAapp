import React from 'react'

function Chatleft(props) {
  console.log(props.content,"content of props");
  return (
    <>
    <div className="content">{props.content}</div>
    </>
  )
}

export default Chatleft