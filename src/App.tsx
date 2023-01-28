import React from 'react';
import './App.css';
import {Box} from "@mui/material";
import {Header} from "./components/Header/Header";
import {Panel} from "./components/Panel/Panel";
import {TodoList} from "./components/TodoList/TodoList";

export type Todo = {
    id: number;
    name: string;
    desc: string;
    checked: boolean;
};

function App() {

  const [todoList, setTodoList] = React.useState([
      {id:1, name: 'task1', desc:'desc', checked: false},
      {id:2, name: 'task2', desc:'descdesc', checked: false},
      {id:3, name: 'task3', desc:'descdescdesc', checked: true}
  ])

  const delTodo = (id: Todo['id']) => {
      setTodoList(todoList.filter(todo => todo.id !== id))
  }

    const addTodo = ({name, desc}: Omit<Todo, 'id' | 'checked'>) => {
        setTodoList([
            ...todoList,
            {id: todoList[todoList.length - 1].id + 1, desc, name, checked: false}
        ])
    }

    const checkedTodo = (id: Todo['id']) => {
        setTodoList(
            todoList.map(todo => {
                if (todo.id === id) {
                    return {...todo, checked: !todo.checked}
            }
                return todo;
        })
        )
    };

  return (
    <div className="App">
        <Box display='flex' flexDirection='column' width='500px'>
            <Header />
            <Panel addTodo={addTodo}/>
            <TodoList todoList={todoList} delTodo={delTodo} checkedTodo={checkedTodo}/>
        </Box>
    </div>
  );
}

export default App;
