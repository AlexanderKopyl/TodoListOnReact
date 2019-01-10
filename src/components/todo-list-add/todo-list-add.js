import React from 'react';

import './todo-list-add.css';

const ListItemAdd = ({onItemAdd}) => {

    return (
        <div className="add-group">
            <input type='text' className="form-control add-input" placeholder="add-todo"/>
            <button
                type="button"
                className="btn btn-success"
                onClick={onItemAdd}
            >Add</button>
        </div>
    );

};

export default ListItemAdd;