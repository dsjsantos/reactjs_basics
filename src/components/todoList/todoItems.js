import React from 'react';

const TodoItems = (props) => {
    const { handleDelete, handleUpdate } = props;
    const todoEntries = props.todoEntries || [];

    const createTasks = (item) => {
        return (
            <div key={item.key} className='todo-item-wrapper'>
                <li>
                    <input type="text" value={item.text} onChange={e => handleUpdate(item.key, e.target.value)} />
                    <button className='btn-remove' onClick={() => handleDelete(item.key)}>X</button>
                </li>
            </div>
        );
    }
  
    return(
        <ol className="theList">
            { todoEntries.map(createTasks) }
        </ol>
    );
  }
  
  export default TodoItems;