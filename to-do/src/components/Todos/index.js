import { useState, useEffect } from 'react'
import FilterTodo from '../FilterTodo';
import AddTodo from '../AddTodo';

function Todos() {

    const [todos, setTodos] = useState([
        {
            title: "Learn React",
        },

        {
            title: "Make Spaghetti",
        },
    ]);

    useEffect(() => {
        console.log(todos);
    }, [todos]);

  return (

    <div>

        <h1 className='main-heading'>TODOS</h1>

        <AddTodo setTodos={setTodos} todos={todos} />

        <FilterTodo todos={todos} />

    </div>
  )
}

export default Todos;