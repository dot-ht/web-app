const Chat = ({sender, message}) => {
    let classN = "flex w-full"
    classN += (sender) ? " justify-end text-right" : " justify-start text-left";
    return(
        <li className={classN}>
          <div className="max-w-xl px-4 py-2 rounded shadow text-gray-700 dark:text-white bg-slate-700">
            <span className="block">{message}</span>
          </div>
        </li>
    )
}

export default Chat;