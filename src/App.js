import './App.css';
import { useEffect, useState } from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import Todo from './Todo/Todo';
import db from './firebase/firebase';
import firebase from "firebase";

function App() {
  const [todos, setTodos] = useState([]); //No data when refreshed
  const [input, setInput] = useState('');

  //getting todos from firebase after refresh
  useEffect(() => {
    //this code here.. fires when app.js loads

    //without order by
    //db.collection('todos').onSnapshot(snapshot => {
    // setTodos(snapshot.docs.map(doc => doc.data().todo))
    //})

    //returns order by time
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => doc.data().todo))
    })

  }, []);

  const addTodo = (event) => {
    //to stop the defualt behavior of a form that is refreshing the page when submit. Now it will not refresh the page.
    event.preventDefault();

    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp() //time of the firebase's server
    });


    //triple dots to append on what is already present and just do not reset
    setTodos([...todos, input]);
    setInput('');
  }

  return (
    <div className="App">
      <h1>Hey</h1>
      <form>
        <FormControl>
          <InputLabel>Write here</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)} />
        </FormControl>
        <Button disabled={!input} variant="contained" color="primary" type="submit" onClick={addTodo}>Add</Button>

      </form>
      
      <ul>
        {todos.map(todo =>(
          <Todo text={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
