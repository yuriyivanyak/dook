import React, {useState, useEffect} from "react";
import TodoList from "./components/TodoList";
import Context from "./components/context";
import Loader from "./components/loader";
import Modal from "./components/modal"

const AddTodo = React.lazy(() => import('./components/AddTodo'))

const App = () => {
    const [todos, setTodos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
            .then(response => response.json())
            .then(todos => {
               setTodos(todos)
                setLoading(false)
            })
    }, [])

    function removeTodo(id) {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    const toggleTodo = (id) => {
        setTodos(
            todos.map(todo => {
                if(todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
        )
    }

    function addTodo(title) {
        setTodos(todos.concat([
            {
                title,
                id: Date.now(),
                completed: false
            }
        ]))
    }


    return (
        <Context.Provider value={ {removeTodo} }>

            <div className="wrapper">
                <div className="d-flex justify-content-between border-bottom border-danger mb-5">
                    <h1 className="">List</h1>

                    <Modal />
                </div>



                <React.Suspense fallback={<p>Loadind...</p>}>
                    <AddTodo onCreate={addTodo}/>
                </React.Suspense>
                {loading && <Loader/>}

                {todos.length ? <TodoList todos={todos} onToggle={toggleTodo} />
                    : (loading ? null : <p>No todos</p>)
                }
            </div>
        </Context.Provider>

    )
}

export default App