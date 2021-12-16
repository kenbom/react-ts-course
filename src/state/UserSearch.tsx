import React from 'react'
import { useState } from 'react'

const users = [
    { name: 'Sarah', age: 20 },
    { name: 'Alex', age: 20 },
    { name: 'Michael', age: 20 },
  ];

const UserSearch:React.VFC = () => {
    const [name, setName] = useState("")
    const [user, setUser] = useState<{name:string, age:number} | undefined >(undefined)
    const onClick = () => {
        const foundUser = users.find((user) => {
            return user.name === name
        })
        setUser(foundUser)
        }
    return (
        <div>
            <h3>User Search</h3>
            <input value={name} onChange={(e) => setName(e.target.value)}/>
            <br />
            <button onClick={onClick}>Find</button>
            <p>{user && user.name}</p>
            <p>{user && user.age}</p>
        </div>
    )
}

export default UserSearch
