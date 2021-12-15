import React from 'react'
import { useState } from 'react'

const GuestList: React.VFC = () => {
    const [name, setName] = useState("")
    const [guests, setGuests] = useState<string[]>([])
    const onClick = () => {
        setName("")
        setGuests([...guests, name])
    }
    return (
        <div>
            <h3>Guest List</h3>
            <input value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={onClick}>Add Guest</button>
            <p>name:{name}</p>
            {guests.map((name) => {
                return (<p>{name}</p>)
            })}
        </div>
    )
}

export default GuestList
