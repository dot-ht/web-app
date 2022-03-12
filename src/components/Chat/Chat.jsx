import React, { useState, useEffect } from 'react';
import ChatMessage from "./ChatMessage";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [bot, setBot] = useState([]);
  
  const link = 'http://192.168.0.60:5000/chat/';

  const getData = async (state, json) =>{
    await fetch(json
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        //console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        //console.log(myJson);
        state(myJson)
      });
  }

  useEffect(()=>{
    getData(setMessages, 'chat_log.json')
  },[])

  useEffect(()=>{
    getData(setBot, 'bot.json')
  },[]
  )

  const componentDidMount = async (inp) => {
    // POST request using fetch with async/await
    console.log('send request');
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ input: inp })
    };
    const response = await fetch('http://192.168.0.60:5000/chat/', requestOptions);
    const data = await response.json();
    const json = data.parse();
    console.log(data);
    return json;
}

  const [name, setName] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    messages.push(
      {
        index: messages[messages.length - 1].index + 1,
        sender: true,
        msg: name
      }
    )
    const respond = await componentDidMount(name);
    console.log(respond['msg']);
    messages.push(
      {
        index: messages[messages.length - 1].index + 1,
        sender: false,
        msg: respond.msg
      }
    )
  }

    return  (
      <div className="flex w-full max-h-screen justify-center p-5">
        <div className="flex flex-col md:w-2/5 w-full h-full p-5 rounded-xl divide-y dark:bg-slate-800">
          <div className="flex justify-start items-center pb-5">
            <img className="object-cover w-10 h-10 rounded-full mr-1"
              src={bot.bot_pic} alt={bot.bot_name} />
            <span className="block ml-2 font-bold text-gray-600 dark:text-white">{bot.bot_name}</span>
          </div>
          <div className="flex flex-col bg-scroll pt-5 pb-5">
            <ul className="space-y-2 w-full h-screen overflow-auto">
              {console.log(messages)}
              {messages.map((message) => (
                  <ChatMessage key={message.index} sender={message.sender} message={message.msg} />
              ))}
            </ul>
          </div>
          <div className="flex justify-center pt-5">
            <form onSubmit={handleSubmit} className="flex w-full">
              <input type="text" placeholder="type your message" className="block py-2 pl-4 mx-3 bg-gray-100 rounded-xl outline-none focus:text-gray-700 w-full" name="message" value={name} onChange={(e) => setName(e.target.value)} required />
                <button type="submit">
                  <svg className="w-5 h-5 text-gray-500 origin-center transform rotate-90" xmlns="http://www.w3.org/2000/svg"
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
