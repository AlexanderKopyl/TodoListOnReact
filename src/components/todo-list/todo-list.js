import React from 'react';
import ListItem from '../todo-list-item/todo-list-item'

import './todo-list.css'

const TodoList = ({todos,onDeleted}) => {

    const elements = todos.map((item)=>{
        const {id,...itemProps} = item;
        return (
         <li key={id} className="list-group-item todo-group-item">
             <ListItem
             {...itemProps}
             onDeleted={()=>onDeleted(id)}
             />
         </li>
        )
    });

    return (
        <ul className="list-group todo-list">
            {elements}
        </ul>
    );
};

export default TodoList;