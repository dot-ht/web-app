const Chat = ({key, sender, message}) => {
    let classN = "flex justify-"
    classN += (sender) ? "end" : "start";
    return(
        <li className={classN}>
        <div className="relative max-w-xl px-4 py-2 rounded shadow text-gray-700 dark:text-white bg-slate-800">
          <span className="block">{message}</span>
        </div>
      </li>
    )
}

export default Chat;