import React, {useContext} from "react";
import PropTypes from 'prop-types';
import Context from "./context";


function TodoItem({todo, index, onCheck}) {
    const classes = [];

    if( todo.completed ) {
        classes.push('done')
    }

   const {removeTodo} = useContext(Context);

    return(
        <li className="d-flex justify-content-between align-items-center my-1">
            <div className="d-flex w-100" >
                <input className="form-control w-25" type="checkbox"
                       onChange={ () => onCheck(todo.id)}
                        checked={todo.completed}
                />
                <b className="mx-2">{index + 1}</b>
                <p className={classes.join(' ')}>{todo.title} </p>
            </div>
            <button className="btn btn-danger"
                onClick={()=> {removeTodo(todo.id) }}
            >Delete</button>
        </li>
    )
}


TodoItem.prototype = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    onCheck: PropTypes.func.isRequired
}


export default TodoItem