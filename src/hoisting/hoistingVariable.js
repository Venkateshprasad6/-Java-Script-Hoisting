import React from 'react'

const hoistingVariable = () => {
    console.log(x);
    console.log(y);
    console.log(z);
    var x = "venkatesh";
    let y = "prasad";
    let z = "sakthi";
  return (
    <div>hoistingVariable</div>
  )
}

export default hoistingVariable