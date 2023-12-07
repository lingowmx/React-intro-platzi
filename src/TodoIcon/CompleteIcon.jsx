import React from 'react'
import { TodoIcon } from "./index.jsx";


function CompleteIcon({ completed, onComplete}) {
    return (
        <TodoIcon 
            type= "check"
            color= {completed ? "#4ef037" : "gray"}
            onClick={onComplete}
        />
    )
}

export { CompleteIcon };
