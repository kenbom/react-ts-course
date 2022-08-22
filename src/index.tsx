import React from "react";
import ReactDOM from "react-dom";
// import UserSearch from "./classes/UserSearch";
// import GuestList from "./state/GuestList";
import UserSearch from "./state/UserSearch";
// import EventComponent from "./events/EventComponent"

const App = () => {
  return(
    <div>
    <UserSearch/>
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'))