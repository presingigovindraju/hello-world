import React from "react";

const App =()=>{

    let a = 20;
    let paraOne = {border:"2px solid gray"}

    return (
       <div className="hello">
        <h1 style={{textAlign:"center",border:"2px solid green"}}>Hello World , {a}</h1>
        <p style={paraOne}> the man</p>
        <p> {1+2+3}</p>
       </div>
    )
}

export default App