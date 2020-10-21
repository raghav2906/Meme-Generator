import React from "react"
import "./style.css"

const TodoItem = (props) => {
    const stylep = {
        color:"black"
    }
    if(props.item.completed)
    {
        stylep.color="grey";
        stylep.textDecoration="line-through";
        stylep.fontStyle="italic";
    }
        return (
        <div className="todo-item">
            <input 
                type="checkbox" 
                checked={props.item.completed}  
                onChange={() =>  props.handleChange(props.item.id)} 
            />
            <p style={stylep}>{props.item.text}</p>
            
        </div>
    )
}

export default TodoItem;