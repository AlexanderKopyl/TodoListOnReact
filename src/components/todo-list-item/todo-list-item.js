import React, {Component}from 'react';
import './todo-list-item.css'


export default class ListItem extends Component{

     render() {

        const {label,onDeleted,onToggleDone,onToggleImportant,done,important } = this.props;


        let className = "todo-item";

        if(done){
            className += ' done';
        }

        if(important){
            className += ' important';

        }

        return (
            <span className="todo-list-item">
         <span
             className={className}
             onClick={onToggleDone}
         >

             {label}
         </span>

         <div className="btn-group">
             <button type="button"
                     className="btn btn-outline-danger btn-sm"
                     onClick={onDeleted}
             >
                 <i className="fa fa-trash-o"/>
             </button>
             <button type="button"
                     className="btn btn-outline-success btn-sm"
                     onClick={onToggleImportant}>
                 <i className="fa fa-exclamation"/>
             </button>
         </div>

     </span>

        );
    }
};


