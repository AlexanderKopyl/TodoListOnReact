import React from 'react';
import ReactDOM from 'react-dom';

import TodoList from './components/todo-list'
import AppHeader from './components/app-header'
import SerchPanel from './components/serch-panel'

const App = () => {
  const todoData = [
        {label:'Drink Coffe',important:false, id:'2'},
        {label:'Build Awesome App',important: true, id:'1'},
        {label:'Have Lanch',important:false, id:'3'}
  ];
  return (
      <div>
          <AppHeader/>
          <SerchPanel/>
          <TodoList todos={todoData}/>
      </div>
  );
};

ReactDOM.render(<App/>,document.getElementById('root'));