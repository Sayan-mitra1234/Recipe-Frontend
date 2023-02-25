import { useState } from "react"
import { Link } from "react-router-dom"
import data from "../../data"
import Card from "../card"
import './stylemain.css'
const Main = () => {
    const handleLogout = () => {
        localStorage.removeItem("token")
        window.location.reload()
    }
    const [display,setDisplay]=useState("none")
    
    function handleClick(){
        setDisplay("block")
        
    } 
    

    return (
        <>
            <div className="head">
                <div><h1 className="Recipe"><Link to="/logout">Recipe Book</Link></h1>
                <button onClick={handleLogout} className="logout">
                    Logout
                </button>
                </div>
                <input type="text" placeholder="search recipe name" />
                <div>
                    <Link to="/form">
                        <button className="new">new</button>
                    </Link>
                    
                </div>
    
                {
                    data.map((item)=>{
                        return(
                            <>
                            <img src={item.image.url} onClick={handleClick} height="300" width="300"/>
                            <p>{item.ingredients}</p>
                            <Card item={item} display={display}/>
                             {/* <h1>{    JSON.stringify(item)}</h1> */}
                            </>
                        )
                        

                    })
                }
                

            
                

            </div>
        </>
    )
}

export default Main