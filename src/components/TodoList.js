import React from "react";
import TodoItem from "./TodoItem";
import PropTypes from 'prop-types';


function TodoList(props) {
    return(
        <ul>
            { props.todos.map((todo , i) => {
                return <TodoItem key={todo.id} todo={todo}
                                 index={i}  onCheck={props.onToggle}/>
            }) }
        </ul>
    )
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggle: PropTypes.func.isRequired
}

export default TodoList