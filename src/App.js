import './App.css';
import { useState } from 'react';
import { Input } from './components/Input'
import { Todos } from './components/Todos'
import { Button } from './components/Button'
import uniqid from 'uniqid';

function App() {
  const [todos, setTodos] = useState([]) 
  // nao debe ser-> todos = ["tarefa2", "tarefa1"...] 
  // debe ser-> todos = [{id: xyx, name: "tarefa1"}]
  const [newTodo, setNewTodo] = useState("")
  
  const handleAddTodo = () => {
    if (newTodo !== "") {
      const newTodoObject = {
        name: newTodo,
        id: uniqid()
      }
      setTodos([...todos, newTodoObject])
    }
  }

  const handleInputChange = (val) => {
    setNewTodo(val)
  }

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
      <div>
        <Input onValueChange={(val) => handleInputChange(val)}></Input>
        <Button label="Add" onButtonClicked={() => handleAddTodo()}/>
      </div>
      <Todos todos={todos} onTodoDeleted={(id) => handleTodoDelete(id)}></Todos>
    </div>
  );
}

export default App;
