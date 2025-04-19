import React, { useContext } from 'react'
import { MdDeleteForever } from "react-icons/md";
import { TodoItemsContext } from '../../store/todo-items-store';

function ToDoItem({todoName, todoDate}) {

  const {deleteItem} = useContext(TodoItemsContext)  

  return (
    <div className=''>
        <div className="row mt-2 border p-1 align-items-center border-secondary">
          <span className="col-6">{todoName}</span>
          <span className="col-4">{todoDate}</span>
          <span className="col-2">
            <button type="button" className="w-100 btn btn-danger" onClick={() => deleteItem(todoName)}>
              <MdDeleteForever />
            </button>
          </span>
        </div>
    </div>
  )
}

export default ToDoItem