import React from 'react'
import { TodoListItem } from './TodoListItem'

export const TodoList = ({todos, handleDelete, handleToggle}) => {
    return (        
        <ul className="list-group list-group-flush">
         {
             todos.map( (todo, indice) => (                
                 <TodoListItem
                 key= { todo.id }
                 todo={todo}
                 indice= {indice}
                 handleDelete={handleDelete}
                 handleToggle={handleToggle}
                 />                
             ))
         }     
        </ul>
    )
}
