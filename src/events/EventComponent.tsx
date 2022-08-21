import React from 'react'

const EventComponent:React.VFC = () => {
    const onChange = (event:React.ChangeEvent<HTMLInputElement>) => {console.log(event)}
    const onDragStart = (event: React.DragEvent<HTMLDivElement> ) => {console.log("im being dragged")}
    //    const onDragStart = (event ) => {
    //      console.log("im being dragged");
    //    };
 
    return (
        <div>
            <input onChange={onChange} />
            <div draggable onDragStart={onDragStart}>Drag me!</div>
        </div>
    )
}

export default EventComponent