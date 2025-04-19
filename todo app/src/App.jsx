import AddToDo from "./components/AddToDo";
import AppName from "./components/AppName";
import ToDoItems from "./components/ToDoItems";
import WelcomMessage from "./components/welcomMessage";
import TodoItemsContextProvider from "../store/todo-items-store";

function App() {
  return (
    <TodoItemsContextProvider>
      <div className="bg-dark text-light">
        <center className="mx-auto todo-container vh-100 w-50">
          <AppName/>
          <AddToDo/>
          <WelcomMessage/>
          <ToDoItems/>
        </center>
      </div>
    </TodoItemsContextProvider>
  );
}

export default App;
