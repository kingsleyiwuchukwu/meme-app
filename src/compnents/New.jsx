import React, {useState, useEffect} from 'react'
import memeData from './memeData';

const New = () => {
 const [message, setIsMessage] = useState(["a", "b"]);


 function toggle() {
    setIsMessage(prevState => !prevState)

 }

 useEffect(()=> {
  console.log("Welcome")
}, [message])





  return (
    <div>
      <pre>{JSON.stringify(message, null, 2)}</pre>
        <button onClick={toggle}>
        {<h2>You have {message.length} unread {
            message.length > 1 ? "message" : "mesages" }</h2>
        }       
        </button>
        

    </div>
  )
}

export default New