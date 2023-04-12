import React from "react";
import './Login.css';
import Api from "../Api";

export default (onReceive) => {

    const handleLogin = async () => {
        let result = await Api.fbPopup()
        if(result) {
            onReceive(result.user)
        } else {
            alert('erro!')
        }
    }

    return (
        <div className="login">
            <button onClick={handleLogin}>Logar com o Facebook</button>
        </div>
    )
}