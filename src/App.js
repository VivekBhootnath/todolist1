import { useState } from 'react';
import './App.css';
import Form from './Form';
import TodoList from './TodoList';


const App = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [editTodo, setEditTodo]=useState(null);

  return (
    <div className="App">
      <header className="App-header">
        <h1 id='heading'>TODO LIST</h1>
        <Form
          input = {input}
          setInput = {setInput}
          todos = {todos}
          setTodos ={setTodos}
          editTodo ={editTodo}
          setEditTodo={setEditTodo}
        />
        <TodoList todos = {todos}
          setTodos ={setTodos}
          setEditTodo={setEditTodo}
         
          />
        
      </header>
      {/* <UseEffectAPI /> */}
    </div>
  );
}

export default App;
