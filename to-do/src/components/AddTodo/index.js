import { useState } from 'react'

function AddTodo({ setTodos, todos }) {

    const [form, setForm] = useState({ title: '' });

    const onChangeInput = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value });
    };

    const onSubmit = (event) => {

        event.preventDefault();

        if (form.title === '') {
            return false;
        }

        setTodos([...todos, form]);

        setForm({ title: '' });

    };

    return (

        <form onSubmit={onSubmit} className="form">

            <div>
                <input className='addTodo' name='title' placeholder='Add new To-Do' value={form.title} onChange={onChangeInput}></input>
            </div>

            <div>
                <button className='addTodoButton'>Add</button>
            </div>

        </form>
    )
}

export default AddTodo