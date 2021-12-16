import React from 'react'
import { useState } from 'react'

const GuestList: React.VFC = () => {
    const [name, setName] = useState("")
    const [guests, setGuests] = useState<string[]>([])
    const onClick = () => {
        setName("")
        setGuests([...guests, name])
        // setName('')
    }
    return (
        <div>
            <h3>Guest List</h3>
            <input value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={onClick}>Add Guest</button>
            <p>name:{name}</p>
            <ul>
                {guests.map((name) => {
                return (<li key={name}>{name}</li>)
            })}
              </ul>
        </div>
    )
}

export default GuestList
