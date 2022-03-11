const Chat = ({key, sender, message}) => {
    let classN = "flex justify-"
    classN += sender ? "end" : "start";
    console.log(message);
    return(
        <li className={classN}>
        <div className="relative max-w-xl px-4 py-2 text-gray-700 rounded shadow">
          <span className="block">{message}</span>
        </div>
      </li>
    )
}

export default Chat;