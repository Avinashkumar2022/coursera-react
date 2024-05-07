import React from "react";

function Sidebar(props)
{
    console.log(props);
    return <h1> {props.greet}, This the Sidebar component </h1>
}
export default Sidebar;