import React, { useContext } from 'react'
import ToDoItem from './ToDoItem'
import { TodoItemsContext } from '../../store/todo-items-store'

const ToDoItems = () => {

  const {todoItems} = useContext(TodoItemsContext)
 
  return (
    <div>
        {todoItems.map(item => 
          <ToDoItem 
            key={item.name} 
            todoName={item.name} 
            todoDate={item.date}
        />)}      
    </div>
  )
}

export default ToDoItems
