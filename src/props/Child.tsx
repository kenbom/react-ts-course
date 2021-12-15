import React from 'react'
interface ChildProps {
    color: string;
}

export const Child = ({color}:ChildProps) => {
    return (
        <div>
            Hi, hi, there!{color}
        </div>
    )
}


