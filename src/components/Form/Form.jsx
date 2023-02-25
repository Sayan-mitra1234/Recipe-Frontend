import React from "react";
import "./out.css"
function Form2(){
    
    return(
        <>
            <h1 className="header">Create A Recipe</h1>

            <label>Recipe title</label>
            <br />
            <input type="text" />
            <br />
            <label>Author</label>
            <br />
            <input type="text"/>
            <br />
            <label>Please upload your recipe url link</label>
            <br />
            <input type='text'/>
            <br />
            <label>Ingredience</label>
            <br />
            <input type="text" className="ingredience"/>
            <br />
            <label>Recipe Directions</label>
            <br />

            <input type="text" className="direction"/>

        </>
    )
}

export default Form2