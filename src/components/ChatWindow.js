import React, {useState, useEffect, useRef} from "react";
import EmojiPicker from "emoji-picker-react";
import './ChatWindow.css';


import MessageItem from "./MessageItem";


import SearchIcon from '@mui/icons-material/Search';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CloseIcon from '@mui/icons-material/Close';
import MoodIcon from '@mui/icons-material/Mood';
import SendIcon from '@mui/icons-material/Send';
import MicIcon from '@mui/icons-material/Mic';




export default ({user}) => {

    const body = useRef()

    const [emojiOpen, setEmojiOpen] = useState(false)
    const [text, setText] = useState('')
    const [list, setList] = useState([
        {author:123, body: 'bla bla vla'},
        {author:123, body: 'bla bla tla'},
        {author:1234, body: 'bla bla bla'},
        {author:123, body: 'bla bla vla'},
        {author:123, body: 'bla bla tla'},
        {author:1234, body: 'bla bla bla'},
        {author:123, body: 'bla bla vla'},
        {author:123, body: 'bla bla tla'},
        {author:1234, body: 'bla bla bla'},
        {author:123, body: 'bla bla vla'},
        {author:123, body: 'bla bla tla'},
        {author:1234, body: 'bla bla bla'},
        {author:123, body: 'bla bla vla'},
        {author:123, body: 'bla bla tla'},
        {author:1234, body: 'bla bla bla'},
    ])

    useEffect(()=> {
        if(body.current.scrollHeight > body.current.offsetHeight) {
            body.current.scrollTop = body.current.scrollHeight - body.current.offsetHeight
        }
    }, [list])


    const handleEmojiClick = (emojiData, e) => {
        setText(text + emojiData.emoji)
    }

    const handleOpenEmoji = () => {
        setEmojiOpen(true);
    }
    
    const handleCloseEmoji = () => {
        setEmojiOpen(false)
    }

    const handleMicClick = () => {

    }

    const handleSendClick = () => {
        
    }




        return (
        <div className="chatWindow"> 
            <div className="chatWindow-header"> 
                <div className="chatWindow-headerinfo">
                    <img className="chatWindow-avatar" src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png"/>
                    <div className="chatWindow-name">Dimitrius Castro</div>
                </div>

                <div className="chatWindow-headerbuttons">
                    <div className="chatWindow-btn">
                        <SearchIcon style={{color: '#919191'}}/>
                    </div>
                    <div className="chatWindow-btn">
                        <AttachFileIcon style={{color: '#919191'}}/>
                    </div>
                    <div className="chatWindow-btn">
                        <MoreVertIcon style={{color: '#919191'}}/>
                    </div>
                </div>
            </div>
            <div ref={body} className="chatWindow-body"> 
                {list.map((item, key)=>(
                    <MessageItem 
                        key ={key}
                        data = {item}
                        user= {user}
                    />
                ))}
            </div>
            <div 
                className="chatWindow-emojiarea" 
                style={{height: emojiOpen ? '300px' : '0px'}}
                >
                <EmojiPicker
                    searchDisabled
                    skinTonesDisabled
                    onEmojiClick={handleEmojiClick}
                    width="100%"
                    
                />
            </div>

            <div className="chatWindow-footer"> 
                <div className="chatWindow-pre">
                    <div 
                        className="chatWindow-btn"
                        onClick={handleCloseEmoji}
                        style={{width: emojiOpen?40:0}}
                        >
                        <CloseIcon style={{color: '#919191'}}/>
                    </div>
                    <div 
                        className="chatWindow-btn"
                        onClick= {handleOpenEmoji}
                        >
                        <MoodIcon style={{color: emojiOpen?'#009688':'#919191'}}/>
                    </div>
                </div>
                <div className="chatWindow-inputarea">
                    <input 
                        className="chatWindow-input" 
                        type="text"
                        placeholder="Digite uma Mensagem"
                        value={text}
                        onChange= {e=>setText(e.target.value)}
                    />
                </div>
                <div className="chatWindow-pos">
                    
                    {text === '' &&
                        <div onClick={handleMicClick} className="chatWindow-btn">
                            <MicIcon style={{color: '#919191'}}/>
                        </div>
                    }
                    
                    {text !== '' &&
                        <div onClick={handleSendClick} className="chatWindow-btn">
                            <SendIcon style={{color: '#919191'}}/>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}