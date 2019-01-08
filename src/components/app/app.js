import React,{Component} from 'react';

import TodoList from '../todo-list';
import AppHeader from '../app-header';
import SerchPanel from '../serch-panel';
import BtnGroup from '../item-status-filter';

import './app.css';


export default class App extends Component {
    state = {
        todoData:[
            {label:'Drink Coffe',important:false, id:'2'},
            {label:'Build Awesome App',important: true, id:'1'},
            {label:'Have Lanch',important:false, id:'3'}
        ]
    };

    deleteItem = (id) =>{
        this.setState(({todoData})=>{
            const idx = todoData.findIndex((el) => el.id === id );

            const newArray = [
                ...todoData.slice(0,idx),
                ...todoData.slice(idx + 1)
            ];

            return {
                todoData: newArray
            }
        });
    };
    render() {
        return (
            <div className="container">
                <AppHeader dataListCount={this.state.todoData.length}/>
                <div className="serch-panel-box">
                    <SerchPanel/><BtnGroup/>
                </div>
                <TodoList
                    todos={this.state.todoData}
                    onDeleted = {this.deleteItem}
                />
            </div>
        );
    }


};

