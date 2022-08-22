import React from 'react'
import { useState } from 'react'

const GuestList: React.VFC = () => {
    const [name, setName] = useState("")
    const [guests, setGuests] = useState<string[]>([])
    const onClick = () => {
        // setName("")
        setGuests([...guests, name])
        setName('')
    }
    const deleteHandler = (name:string, index:number)=> {
        setGuests(guests.filter((guest) => name!== guest))
        console.log(guests.i)
    }

    return (
        <div>
            <h3>Guest List</h3>
            <input value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={onClick}>Add Guest</button>
            <p>name:{name}</p>
            <ul>
                {guests.map((name, index) => {
                return (<li key={index}>{name}
                    <button onClick={()=>deleteHandler(name, index)}>Delete Guest</button>
                    </li>
                    )
            })}
              </ul>
        </div>
    )
}

export default GuestList
