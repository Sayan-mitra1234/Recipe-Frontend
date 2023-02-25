import React from "react"
import "./out.css"
function Logout(){
    const handleLogout = () => {
        localStorage.removeItem("token")
        window.location.reload()
    }

    return(
        <>
        
        <button className="out">
                    Logout
                </button>
        </>
    )
}
export default Logout