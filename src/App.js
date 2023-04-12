import React, { useEffect, useState } from "react";
import './App.css'
import ChatListItem from "./components/ChatListItem";
import ChatIntro from "./components/ChatIntro";
import ChatWindow from "./components/ChatWindow";
import NewChat from "./components/NewChat";
import Login from "./components/Login";


import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';


export default () => {

  const [chatlist, setChatList] = useState([
    {chatId: 1, title: "Dimitrius Castro", avatar: "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png"},
    {chatId: 2, title: "Ramellis Lopes", avatar: "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png"},
    {chatId: 3, title: "Vilsinho Junior", avatar: "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png"},
    {chatId: 4, title: "Teodoro Koppe", avatar: "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png"},
  ]);
  const [activeChat, setActiveChat] = useState([{}])
  const [user, setUser] = useState(null)
  const [showNewChat, setShowNewChat] = useState(false)
  const handleNewChat = () => {
    setShowNewChat (true)
  }
  const handleLoginData = async (u) => {
    let newUser = {
      id: u.uid,
      name: u.displayName,
      avatar: u.photoURL
    }
    //
    setUser(newUser)
  }
  if (user===null) {
    return (<Login onReceive={handleLoginData}/>)
  }

  return (
    <div className="app-window">
      <div className="sidebar">
        <NewChat
          chatlist = {chatlist}
          user = {user}
          show= {showNewChat}
          setShow= {setShowNewChat}
        />
        <header>
          <img className="header-avatar" src={user.avatar}/>
          <div className="header-buttons">
            <div className="header-btn">
              <DonutLargeIcon style={{color: '#919191'}} />
            </div>

            <div onClick={handleNewChat} className="header-btn">
              <ChatIcon style={{color: '#919191'}} />
            </div>

            <div className="header-btn">
              <MoreVertIcon style={{color: '#919191'}} />
            </div>
          </div>
        </header>

        <div className="search">
          <div className="search-input">
            <SearchIcon fontSize="small" style={{color: '#919191'}}/>
            <input type="search" placeholder="Procurar ou começar uma nova conversa"/>
          </div>
        </div>

        <div className="chatlist">
          {chatlist.map((item, key, active)=>(
            <ChatListItem
              key={key}
              active= {activeChat.chatId === chatlist[key].chatId}
              data = {item}
              onClick={()=>setActiveChat(chatlist[key])}
            />
          ))}
        </div>
      </div>
      <div className="contentarea">
        {activeChat.chatId !== undefined && 
          <ChatWindow 
            user={user}  
          />
        }
        {activeChat.chatId === undefined && 
          <ChatIntro />
        }

      </div>
    </div>
  )
}