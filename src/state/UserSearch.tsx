import { stringify } from "querystring";
import React from "react";
import { useState } from "react";

const users = [
  { name: "Sarah", age: 25 },
  { name: "Alex", age: 20 },
  { name: "Michael", age: 30 },
];

const UserSearch: React.VFC = () => {
  const [name, setName] = useState("");
  const [result, setResult] = useState<{ name: string; age: number }| undefined>(undefined);
  const userSearchHandler = () => {
    setResult(users.find((user)=>{return name===user.name}))
  };
  return (
    <>
      <h4>User Search</h4>
      <input onChange={(e) => setName(e.target.value)}></input>
      <button onClick={userSearchHandler}>Search</button>
      {result?<><h6>{result.name}</h6><h6>{result.age}</h6></>:<h6>No usesr found</h6>}
    </>
  );
};
export default UserSearch;

//     const [name, setName] = useState("")
//     const [user, setUser] = useState<{name:string, age:number} | undefined >(undefined)
//     const OnChange = (e:any) => {
//         // e.prevent.default()
//         setName(e.target.value)
//     }
//     const onClick = () => {
//         const foundUser = users.find((user) => {
//             return user.name === name
//         })
//         setUser(foundUser)
//         }
//     return (
//         <div>
//             <h3>User Search</h3>
//             <input value={name} onChange={OnChange}/>
//             <br />
//             <button onClick={onClick}>Find</button>
//             <p>{user && user.name}</p>
//             <p>{user && user.age}</p>
//         </div>
//     )
