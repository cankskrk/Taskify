import React from 'react'
import { Todo } from '../../Model'
import Card from '../Card/Card'

interface Props {
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <div className='todos'>
        {todos.map((todo) => (
            <Card todo={todo} key={todo.id} todos={todos} setTodos={setTodos} />
        ))}
    </div>
  )
}

export default TodoList