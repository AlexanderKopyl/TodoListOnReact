import React from 'react';
import './todo-list-item.css'
const ListItem = ({label, important = false}) => {
    const style = {
      color: important ? 'tomato' : 'black'
    };
 return  <span className="todo-list-item" style={style}>{label}</span>;
};

export default ListItem;