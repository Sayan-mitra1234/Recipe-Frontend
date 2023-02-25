import React from "react";

function Card(props){
    return(
        <>
         <div style={{display:props.display}}>{JSON.stringify(props)}</div>
        </>
    )
}
export default Card
