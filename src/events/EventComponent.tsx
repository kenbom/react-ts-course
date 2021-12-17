import React from 'react'

const EventComponent:React.VFC = () => {
    const onChange = (event:React.ChangeEvent<HTMLInputElement>) => {console.log(event)}
    return (
        <div>
            <input onChange={onChange} />
        </div>
    )
}

export default EventComponent
