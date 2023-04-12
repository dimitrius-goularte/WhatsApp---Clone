import React from "react";
import './ChatListItem.css'

export default ({onClick, active, data}) => {
    return (
        <div 
            className={`chatListItem ${active?'active':''}`} 
            onClick={onClick}
        >
            <img className="chatListItem-avatar" src={data.avatar}/>
            <div className="chatListItem-lines">
                <div className="chatListItem-line">
                    <div className="chatListItem-name">{data.title}</div>
                    <div className="chatListItem-date">19:00</div>
                </div>

                <div className="chatListItem-line">
                    <div className="chatListItem-lastMsg">
                        <p> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
                    </div>
                </div>

            </div>

        </div>
    )
}