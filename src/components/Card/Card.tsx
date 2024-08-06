import React from 'react'
import { Todo } from '../../Model'
import { MdDone, MdDelete, MdEdit } from "react-icons/md";
import './styles.css'

interface Props {
    todo: Todo,
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}


const Card: React.FC<Props> = ({ todo, todos, setTodos}) => {
  return (
    <form className='todo__card'>
        <span className='todo__text'>{todo.todo}</span>

        <div>
            <span className='icon'>
                <MdEdit />
            </span>
            <span className='icon'>
                <MdDelete />
            </span>
            <span className='icon'>
                <MdDone />
            </span>
        </div>
    </form>
  )
}

export default Card