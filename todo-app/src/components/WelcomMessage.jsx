import React, { useContext } from 'react'
import { TodoItemsContext } from '../../store/todo-items-store'

const WelcomMessage = () => {
  const {todoItems} = useContext(TodoItemsContext) 
  return todoItems.length === 0 && <h2>Enjoy your Day!</h2>
}

export default WelcomMessage