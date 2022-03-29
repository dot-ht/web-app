const Chat = ({ sender, type, message, img, suggestions}) => {
  let classN = "flex w-full"
  classN += (sender) ? " justify-end text-right" : " justify-start text-left";
  let classT =+ (type === 'mixed' || type === "text") ? "block" : "hidden";
  classT =+ (sender) ? "text-right" : "text-left";
  let classImg = (type === 'mixed' || type === 'image') ? "block" : "hidden";
  classImg += " rounded-xl mt-2 mb-2";

  return (
    <li className={classN}>
      <div className="px-4 py-2 rounded shadow text-gray-700 dark:text-white bg-neutral-100 dark:bg-slate-700" style={{'maxWidth': '75%' }}>
      <p className={classT}>{message}</p>
      <img className={classImg} src={img}/>
      <ul className="flex">
        {Array.isArray(suggestions) && suggestions.length && suggestions.map((suggestion, index) => (
            <li>{suggestion}</li>
        ))}
      </ul>
    </div>
        </li >
    )
}

export default Chat;