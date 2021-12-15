import React from 'react'
import { VFC } from 'react'

interface ChildProps {
    color: string;
    onClick: () => void;
    children: any;
}

// export const Child = ({color, onClick}:ChildProps) => {
//     return (
//         <div>
//             {color}
//             <button onClick={onClick}>Click me</button>
//         </div>
//     )
// }


export const ChildasVFC: VFC<ChildProps> = ({color, onClick, children }) => {
    return (
        <div>
            {color}
            <button onClick={onClick}>Click me</button>
            {children}
        </div>
    )
}