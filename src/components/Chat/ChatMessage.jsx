const Chat = ({ sender, message }) => {
  let classN = "flex w-full"
  classN += (sender) ? " justify-end text-right" : " justify-start text-left";
  let classT = "block "
  classT = + (sender) ? "text-right" : "text-left";
  return (
    <li className={classN}>
      <div className="px-4 py-2 rounded shadow text-gray-700 dark:text-white bg-slate-700" style={{'maxWidth': '75%' }}>
      <p className={classT}>{message}</p>
    </div>
        </li >
    )
}

export default Chat;