import React from "react";

function Main(props)
{
    console.log(props);
    return <h1>{props.greet}, This the Main component </h1>
}
export default Main;