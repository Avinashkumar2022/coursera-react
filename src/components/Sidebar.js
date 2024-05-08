import React from "react";

function Sidebar(props)
{
    const asideStyle={
        background:"azure",
        color:"green",
        marginLeft:"10px",
    }

    console.log(props);
    return (
        <aside 
        style={asideStyle}
        className="sidebar-component">

        <h1> {props.greet}, This the Sidebar component </h1>
        </aside>
)
}
export default Sidebar;