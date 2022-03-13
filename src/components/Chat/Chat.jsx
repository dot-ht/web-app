import React, { useState, useEffect } from 'react';
import ChatMessage from "./ChatMessage";

const Chat = () => {
  const [messages, setMessages] = useState([{index: 0, sender: false, msg: "Welcome to the chat!"}]);
  const [bot, setBot] = useState([]);
  const [name, setName] = useState("");

  const getData = (state, json) =>{
    fetch(json, {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
      .then(function(response){
        return response.json();
      })
      .then(function(myJson) {
        state(myJson)
      });
  }

  const postMessage = (url, inp) =>{
    fetch(url, {
      'method': 'POST',
      'headers': { 'Content-Type': 'application/json' },
      'body': JSON.stringify({ input: inp })
    })
      .then(function(response){
        return response.json();
      })
      .then(function(response){
        console.log(response)
        setMessages(messages => [...messages, {
          index: messages[messages.length - 1].index + 1,
          sender: false,
          msg: response.msg
        }]);
      });
  }

/*   useEffect(()=>{
    getData(setMessages, 'chat_log.json')
  },[]) */

  useEffect(()=>{
    getData(setBot, 'bot.json')
  },[]
  )


  const handleSubmit = async (event) => {
    messages.push(
      {
        index: messages[messages.length - 1].index + 1,
        sender: true,
        msg: name
      }
    )
    
    postMessage('http://137.184.227.30:5000/chat/', name);
    setName("");
    event.preventDefault();
  }

  const handleKeypress = e => {
    if (e.keyCode === 13) {
      handleSubmit();
    }
  };

    return  (
      <div className="flex w-full justify-center p-5">
        <div className="flex flex-col justify-space-a lg:w-2/5 md:w4/6 s w-full h-full p-5 rounded-xl divide-y divide-slate-600 dark:bg-slate-800">
          <div className="flex justify-self-start justify-start items-center pb-5">
            <img className="object-cover w-10 h-10 rounded-full mr-1"
              src={bot.bot_pic} alt={bot.bot_name} />
            <span className="block ml-2 font-bold text-gray-600 dark:text-white">{bot.bot_name}</span>
          </div>
          <div className="flex flex-col bg-scroll h-full pt-5 pb-5">
            <ul className="space-y-3 w-full h-full h-max-screen overflow-auto">
              {console.log(messages)}
              {messages.map((message) => (
                  <ChatMessage key={message.index} sender={message.sender} message={message.msg} />
              ))}
            </ul>
          </div>
          <div className="flex justify-self-end justify-center pt-5">
            <form onSubmit={handleSubmit} className="flex w-full">
              <input type="text" placeholder="type your message" className="block py-2 pl-4 mx-3 bg-gray-100 rounded-xl outline-none focus:text-gray-700 w-full" name="message" value={name} onChange={(e) => setName(e.target.value)} onKeyPress={handleKeypress} required />
                <button type="submit">
                  <svg className="w-5 h-5 text-gray-500 origin-center transform rotate-90 hover:fill-white" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                  </svg>
                </button>
            </form>
          </div>
        </div>
      </div>
    );
}

export default Chat;
