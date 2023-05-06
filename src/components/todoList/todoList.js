import React, { Component } from 'react';

import TodoItems from './todoItems';

import './todoItems.css';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = this._clearState();

        this._itemAdd = this._itemAdd.bind(this);
        this._itemInput = this._itemInput.bind(this);
    }

    _clearState = () => {
        return({ items: [], currentItem: { text:'', key:'' } });
    }

    _itemAdd(e) {
        e.preventDefault();
        const newItem = this.state.currentItem;
        if (newItem.text !== '') {
            const items = [...this.state.items, newItem];
            this.setState({
                items: items,
                currentItem: { text: '', key: '' },
            });
        }
    }

    _itemInput(e) {
        const itemText = e.target.value;
        const currentItem = { text: itemText, key: Date.now() };
        this.setState({ currentItem });
    }

    _handleItemDelete = (key) => {
        const filteredItems = this.state.items.filter((item) => item.key !== key);
        this.setState({ items: filteredItems });
    }

    _handleItemUpdate = (key, text) => {
        const items = this.state.items;
        items.map((item) => {
            if (item.key === key) {
                item.text = text;
            }
            return item;
        });
        this.setState({ items: items });
    }

    _handleListClear = () => {
        this.setState(this._clearState());
    }

    _handleListSort = descending => {
        const sorted = [...this.state.items];
        sorted.sort((a, b) => {
            const txtA = (a || {}).text;
            const txtB = (b || {}).text
            const asc = descending ? -1 : 1;
            return txtA > txtB ? asc : (txtA < txtB ? -asc : 0);
        });
        this.setState({ items: sorted });
    }

    render() {
        return (
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this._itemAdd}>
                        <input
                            type="text"
                            placeholder="Enter task"
                            value={this.state.currentItem.text}
                            onChange={this._itemInput}
                        />
                        <button className='btn-add' type="submit">Add</button>
                    </form>
                </div>
                <TodoItems 
                    todoEntries={this.state.items}
                    handleDelete={this._handleItemDelete}
                    handleUpdate={this._handleItemUpdate} />

                <div className='list-actions'>
                    <button className='btn-clear' type="button" onClick={this._handleListClear}>Clear List</button>
                    <button className='btn-sort' type="button" onClick={() => this._handleListSort(false)}>Sort List Ascending</button>
                    <button className='btn-sort' type="button" onClick={() => this._handleListSort(true)}>Sort List Descending</button>
                </div>
            </div>
        );
        }
}

export default TodoList;