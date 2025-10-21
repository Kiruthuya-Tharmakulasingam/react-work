import React from 'react'

function Footer() {
  return (
    <div style = {style.container}>
        <h1>Footer</h1>
    </div>
  )
}

const style = {
    container : {
        backgroundColor : "#ccc",
        position : "fixed",
        bottom : "0",
        width : "100%",
        textAlign : "center"
    }
}

export default Footer