import React, {useState} from 'react';
import './app1.css';
// Assignments
/*
  // mendatory
  0- Prop passing
  // mendatory
  1- Create a delete functionality
  2- Create an edit functionality in the todo list
  // mendatory
  Redux diagram check
  // optional
  3- Learn call, apply & bind in JavaScript (200%)
*/
function app1() {
  const [todoItem, setTodoItem] = useState([
    {description: "Plan a Trip"},
    {description: "Study FSD"}
  ])

  const [newItem, setNewItem] = useState("");
  const onSubmit = () => {
    const appendNewTodoItem = todoItem.concat([{description: newItem}]);
    setTodoItem(appendNewTodoItem);
    setNewItem("");
  }

  const onEdit = () =>{
    console.log("edit")

  }

  const onDelete = () =>{
    console.log("delete")
  }


  return (
    <div className="App">
      <h4>Todo List App</h4>
      
      <input type="text" value={newItem} onChange={(event) => setNewItem(event?.target.value)} />
      <button type="submit" onClick={onSubmit}>Create Todo Item</button>
     {todoItem.map((item) => {
       return (
         <p><li>{item.description} <span><input type="text" value={newItem} onChange={(event) => setNewItem(event?.target.value)} /></span><span><button type="edit" onClick={onEdit}>Edit</button></span><button type="delete" onClick={onDelete}>Delete</button></li></p>
       )
     })}
    </div>
  );
}
export default app1;
