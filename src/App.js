import React from 'react';
import "./App.css";
import Input from './components/Input';
import { Provider } from 'react-redux';
import store from './app/store';
import TodoItem from './components/TodoItem';
import { useSelector } from 'react-redux';
import { selectTodoList } from './features/todoSlice';

const App = () => {

    const todoList= useSelector(selectTodoList);
    
    return (
      <Provider store={store}>
  
          <div className='app'>
            <div className="app_container">
              <div className="app_todoContainer">
                {
                  todoList.map(item => (
                    <TodoItem 
                      name={item.item}
                      done={item.done}
                      id={item.id}
                    />
                  ))
                }
              </div>
            </div>
  
            <Input />
          </div>
        </Provider>
    );
  };

export default App;