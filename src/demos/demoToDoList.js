import React from 'react';

import TodoList from '../components/todoList/todoList';

function DemoToDoList() {
    return (
        <div className="demo-todolist-wrapper">
            <div className="row">
                <h3>To do list</h3>
                <TodoList />
            </div>
        </div>
    );
}

export default DemoToDoList;
