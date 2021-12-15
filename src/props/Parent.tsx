import React from 'react'
import { ChildasVFC } from './Child'

// const onClick = () => {}
const Parent = () => {
    return (
        <ChildasVFC color="blue" onClick={() => console.log('Clicked')}>
           <p> abc </p>
        </ChildasVFC>
    )
}

export default Parent
