import React, { useState } from "react";

 const BasicForm = () =>{
const [email,setEmail]  = useState("")
const [password,setPassword]  = useState("")
const [name,setName]  = useState("")

const [allnewEntry, setAllNewEntry] =useState([]);


function submitForm(e){
e.preventDefault();
    const newEntry ={email:email, password:password, name:name}
    setAllNewEntry([...allnewEntry, newEntry])
}
 



    return (
     <>
     <form action=""  onSubmit={submitForm}>
        <div>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </div>

        <div>
            <label htmlFor="email">Password</label>
            <input type="password" name="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        </div>

        <div>
            <label htmlFor="email">Name</label>
            <input type="text" name="Name" id="Name" value={name} onChange={(e)=>setName(e.target.value)}/>
        </div>
        <button type="submit">Submit</button>

     </form>
     {allnewEntry.map((newEle)=>{
        return (<>
        <p>{newEle.email}</p>
        <p>{newEle.password}</p>
        <p>{newEle.name}</p>
        </>

        )
     })}

  
     </>
    );


}
export default BasicForm;