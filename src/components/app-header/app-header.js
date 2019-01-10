import React, {Component} from 'react';
import './app-header.css';



export default class AppHeader  extends Component{


    render() {

        const {todo,done} = this.props;

        return (
            <div className="box-header">
                <h1>Todo List</h1>
                <div>
                    <span className="badge badge-primary badge-pill">{todo}</span>
                    <span>more to do,</span>
                    <span className="badge badge-primary badge-pill">{done}</span>
                    <span>done</span>
                </div>
            </div>
        );
    }


}

