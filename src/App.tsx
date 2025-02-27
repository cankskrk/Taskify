import React, { useState} from 'react';

// Styles
import './App.css';

// Components
import InputField from './components/InputField/InputField';
import { Todo } from './Model';
import TodoList from './components/TodoList/TodoList';

const App: React.FC = () => {

  const [todo, setTodo] = useState<string>("")
  const [todos, setTodos] = useState<Todo[]>([])


  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault()

    if(todo) {
      setTodos([...todos, {id: Date.now(), todo, isDone: false}])
      setTodo("")
    }
  }

  console.log(todos)

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
