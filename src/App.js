import './App.css';
import { useState } from 'react';
import { Input } from './components/Input/Input'
import { Todos } from './components/Todos/Todos'
import { Button } from './components/Button/Button'
import uniqid from 'uniqid';


/**
 * Main Component of the app, it uses the 
 * Input, Todos and Button components
 * @returns 
 */
function App() {
  const [todos, setTodos] = useState([]) 
  const [newTodo, setNewTodo] = useState("")
  
  // Handle when the "add" button is clicked
  const handleAddTodo = () => {
    if (newTodo !== "") {
      const newTodoObject = {
        name: newTodo,
        id: uniqid()
      }
      setTodos([...todos, newTodoObject])
    }
  }

  // Handle when the input has changed (new letter is typed)
  // *React suggest to handle each key typed on inputs  
  const handleInputChange = (val) => {
    setNewTodo(val)
  }

  // Handle when a delete button is clicked
  const handleTodoDelete = (id) => {
    const newTodos = []

    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id !== id)
        newTodos.push(todos[i])
    }
    setTodos(newTodos) 
  }

  return (
    <div className="App">
      <h1> To-do List </h1>
      <div className="form-wrapper">
        <Input onValueChange={(val) => handleInputChange(val)}></Input>
        <Button label="Add" onButtonClicked={() => handleAddTodo()}/>
      </div>
      <Todos todos={todos} onTodoDeleted={(id) => handleTodoDelete(id)}></Todos>
    </div>
  );
}

export default App;
