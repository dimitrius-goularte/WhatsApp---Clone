import React, { useState } from "react";
import './NewChat.css'

import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default ({user, chatlist, show, setShow}) => {

    const [list, setList] = useState([
        {id: 123, avatar: 'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png', name: "Cone Mitrio"},
        {id: 123, avatar: 'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png', name: "Cone Mitrio"},
        {id: 123, avatar: 'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png', name: "Cone Mitrio"},
        {id: 123, avatar: 'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png', name: "Cone Mitrio"},
    ])

    const handleClose = () => {
        setShow (false)
    }

    return (
        <div className="newChat" style={{left: show? 0 : -415}}>
            <div className="newChat-head">
                <div onClick={handleClose} className="newChat-backbutton">
                    <ArrowBackIcon style={{color: "#ffffff"}}/>
                </div>
                <div className="newChat-headtitle">Nova Conversa</div>
            </div>
            <div className="newChat-list">
                {list.map((item, key) => (
                    <div className="newChat-item" key={key}>
                        <img className="newChat-itemavatar" src={item.avatar} />
                        <div className="newChat-itemname">{item.name}</div>
                    </div>
                ))}
            </div>


        </div>
    )
}