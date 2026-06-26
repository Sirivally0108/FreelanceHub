import { useEffect, useState } from "react";
import axios from "axios";

function Discussion(){

const user=JSON.parse(localStorage.getItem("user"));

const userId=user.user_id;

const receiverId=user.role==="client"?6:1;

const [messages,setMessages]=useState([]);
const [text,setText]=useState("");

const loadMessages=()=>{

axios
.get(
`http://localhost:5000/api/messages/${userId}/${receiverId}`
)
.then(res=>setMessages(res.data.data));

};

useEffect(()=>{

loadMessages();

},[]);

const send=async()=>{

if(text==="") return;

await axios.post(

"http://localhost:5000/api/messages",

{

sender_id:userId,

receiver_id:receiverId,

message:text

},

{

headers:{

Authorization:`Bearer ${localStorage.getItem("token")}`

}

}

);

setText("");

loadMessages();

};

return(

<div style={styles.page}>

<h1>💬 Discussion Center</h1>

<div style={styles.chat}>

{

messages.length===0 ?

<div style={styles.empty}>

No Messages Yet

</div>

:

messages.map(msg=>(

<div

key={msg.message_id}

style={

msg.sender_id===userId

?

styles.mine

:

styles.other

}

>

{msg.message}

</div>

))

}

</div>

<div style={styles.bottom}>

<input

value={text}

onChange={(e)=>setText(e.target.value)}

placeholder="Type message..."

style={styles.input}

/>

<button

onClick={send}

style={styles.btn}

>

Send

</button>

</div>

</div>

);

}

const styles={

page:{
padding:"30px",
background:"#eef8ff",
minHeight:"100vh"
},

chat:{
background:"white",
height:"450px",
overflowY:"auto",
padding:"20px",
borderRadius:"15px",
boxShadow:"0 4px 10px rgba(0,0,0,.1)"
},

mine:{
background:"#0284c7",
color:"white",
padding:"12px",
marginBottom:"10px",
marginLeft:"35%",
borderRadius:"12px"
},

other:{
background:"#e5e7eb",
padding:"12px",
marginBottom:"10px",
marginRight:"35%",
borderRadius:"12px"
},

bottom:{
display:"flex",
marginTop:"20px",
gap:"10px"
},

input:{
flex:1,
padding:"12px",
borderRadius:"10px",
border:"1px solid #ccc"
},

btn:{
padding:"12px 25px",
background:"#0284c7",
color:"white",
border:"none",
borderRadius:"10px",
cursor:"pointer"
},

empty:{
textAlign:"center",
marginTop:"180px",
fontSize:"20px",
color:"#666"
}

};

export default Discussion;