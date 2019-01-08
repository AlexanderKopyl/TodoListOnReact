import React, {Component}from 'react';
import './todo-list-item.css'


export default class ListItem extends Component{

    state ={
        done: false,
        important: false
    };

    onClickItem = () =>{

        this.setState((state) => {
            return{
                done: !state.done
            }
        });
    };

    onMarkImportant = () => {
        this.setState((state) => {
            return{
                important: !state.important
            }
        });
    };

    render() {

        const {label,onDeleted } = this.props;
        const { done,important } = this.state;

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
             onClick={this.onClickItem}>
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
                     onClick={this.onMarkImportant}>
                 <i className="fa fa-exclamation"/>
             </button>
         </div>

     </span>

        );
    }
};


