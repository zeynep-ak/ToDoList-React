import { useState } from 'react'

function FilterTodo({ todos }) {

    const [filterText, setFilterText] = useState('');

    const filtered = todos.filter((item) => {
        return Object.keys(item).some((key) =>
            item[key]
                .toString()
                .toLowerCase()
                .includes(filterText.toLocaleLowerCase())
        );
    });

  return (
    <div className='list-div'>

            <ul>
                {filtered.map((todo, i) => (
                    <li key={i}>
                        <span>{todo.title}</span>
                    </li>
                ))}
            </ul>

            <p className='todos-left'>Total Todos Left: <span className='big-bold'>{filtered.length}</span></p>

            <input
            className='filter-todos'
                placeholder='Filter Todos'
                value={filterText}
                onChange={(event) => setFilterText(event.target.value)}>
            </input>

    </div>
  )
}

export default FilterTodo