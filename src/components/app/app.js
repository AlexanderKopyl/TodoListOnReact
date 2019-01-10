import React,{Component} from 'react';

import TodoList from '../todo-list';
import AppHeader from '../app-header';
import SerchPanel from '../serch-panel';
import BtnGroup from '../item-status-filter';
import ListItemAdd from '../todo-list-add';

import './app.css';


export default class App extends Component {
    state = {
        todoData:[
            {label:'Drink Coffe',important:false, done:false, id:'2'},
            {label:'Build Awesome App',important: true,done:false, id:'1'},
            {label:'Have Lanch',important:false, done:false, id:'3'}
        ],
        trim: '',
        filter: 'all'
    };

    togglePropert = (arr,id,propName) =>{
        const idx = arr.findIndex((el) => el.id === id );
        const oldItem = arr[idx];
        const newItem = {...oldItem, [propName]:!oldItem[propName]};

        return [
            ...arr.slice(0,idx),
            newItem,
            ...arr.slice(idx + 1)
        ];
    };

    filterProperty = (arr,propName) =>{

       switch (propName) {
           case 'all':
               return arr;
           case 'active' :
               return arr.filter((item) => !item.done);
           case 'done':
               return arr.filter((item) => item.done);
           default:
               return arr;

       }
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
    onItemAdd = () =>{
        this.setState(({todoData})=>{
            const lastIndex = todoData.length;
            const inputAdd = document.getElementsByClassName('add-input');
            const Element = {label:inputAdd[0].value,important:false, done:false,id:lastIndex+1};

            const newArrays = [
                ...todoData,
                Element
            ];
            console.log(inputAdd);
            return {
                todoData: newArrays
            }
        })

    };
    onToggleImportant = (id) =>{
        this.setState(({todoData}) => {

            return {
                todoData: this.togglePropert(todoData,id,'important')
            }
        })
    };
    onToggleDone = (id) =>{
        this.setState(({todoData}) =>{
          return {
                todoData: this.togglePropert(todoData,id,'done')
            }
        });

    };

    serchItem (item,term){
        if(term.length === 0){
            return item;
        }

       return item.filter((el) => {
            return el.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
        });
    };

    onSerchItem = (trim) =>{
        this.setState({trim});
    };

    onSerchButtons = (propName) =>{
        this.setState(({todoData}) =>{
            console.log(propName);
            return {
                filter: propName.name
            }
        })
    };

    render() {
        const doneCount = this.state.todoData.filter((el)=>el.done === true).length;
        const howmatchToTodo = this.state.todoData.length - doneCount ;
        const {todoData,trim,filter} = this.state;
        const visibleItem = this.filterProperty(this.serchItem(todoData,trim),filter);

        return (
            <div className="container">
                <AppHeader todo={howmatchToTodo} done={doneCount}/>
                <div className="serch-panel-box">
                    <SerchPanel
                        onSerchItem = {this.onSerchItem}
                    /><BtnGroup onSerchButtons = {this.onSerchButtons} filter={filter}/>
                </div>
                <TodoList
                    todos={visibleItem}
                    onDeleted = {this.deleteItem}
                    onToggleImportant ={this.onToggleImportant}
                    onToggleDone ={this.onToggleDone}
                />
                <ListItemAdd onItemAdd={this.onItemAdd}/>
            </div>
        );
    }


};

