import React, { useContext, useRef } from "react";
import { MdAddCircle } from "react-icons/md";
import { TodoItemsContext } from "../../store/todo-items-store";

function AddToDo() {
  const { addNewItem } = useContext(TodoItemsContext);

  const todoNameElement = useRef();
  const todoDateElement = useRef();

  const handleButtonClicked = (e) => {
    e.preventDefault();
    const todoName = todoNameElement.current.value;
    const todoDate = todoDateElement.current.value;
    todoNameElement.current.value = "";
    todoDateElement.current.value = "";
    addNewItem(todoName, todoDate);
  };

  return (
    <div className="container">
      <form className="row mb-4" onSubmit={handleButtonClicked}>
        <div className="col-12 col-md-6 mb-3">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="Enter Todo Here"
            className="form-control"
          />
        </div>
        <div className="col-12 col-md-4 mb-3">
          <input type="date" ref={todoDateElement} className="form-control" />
        </div>
        <div className="col-12 col-md-2 mb-3 d-flex justify-content-center align-items-center">
          <button className="btn btn-success w-100 w-md-auto" type="submit">
            <MdAddCircle size={24} />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddToDo;
