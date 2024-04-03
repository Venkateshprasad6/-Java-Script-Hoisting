
import React from 'react'

const hoistingVariables = () => {
    myFunction();
   function  myFunction(){
             console.log("React")
        }
  return (
    <div>hoistingVariables</div>
  )
}

export default hoistingVariables