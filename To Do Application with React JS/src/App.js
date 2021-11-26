import React, { useState } from "react";
import "./App.css";


function App() {
  const items = [
    { description: "complt Assignment"},
    { description: "Datacamp learning"},
  ];

  const [addItem, setAddItem] = useState(items);
  const [newItem, setNewItem] = useState("");

  const onChangeHandler = (event) => {
    setNewItem(event?.target.value);
  };

  const onClickHandler = () => {
    if (newItem !== "") {
      setAddItem([...addItem, { description: newItem}]);
      setNewItem("");
    }
  };

  const onDeleteHandler = (deleteItem) => {
    deleteItem?.target.parentElement.parentElement.remove();
  };

  const onEditHandler = (edit) => {
    const editPrompt = prompt("Enter the new todo");
    const newList = addItem.map((item) => {
      if (item.description === edit) {
        item.description = editPrompt;
      }
      return item;
    });
    setAddItem(newList);
  };

  return (
  <>
  <p><center><span><input type="text"value={newItem}placeholder="***Add here***"onChange={onChangeHandler}></input></span>
  <span><button onClick={onClickHandler}>Add</button></span></center></p>
  <center><h2><u><i>List of Works To Do:-</i></u></h2></center>
  <div className="rec">
    <p>
      
      #############################################

      {addItem.map((item) => {
        return (
          <p><b>
          <li key={item.id}>{item.description}{" "}
          <span><button onClick={() => {onEditHandler(item.description);}}>Edit</button></span>
          <span><button onClick={onDeleteHandler}>Delete</button></span>
          </li></b></p>
        );
      })}
    </p>
  </div>

  </>
    );
}

export default App;
/*<div>
        <h4>TODO LIST</h4>
        <input type="text"value={newItem}placeholder="Add here"onChange={onChangeHandler}></input>
        <button onClick={onClickHandler}>Add</button>
        {addItem.map((item) => {
            return (
                <li key={item.id}>{item.description}{" "}
                <span><button onClick={() => {onEditHandler(item);}}>Edit</button></span>
                <span><button onClick={() => {onDeleteHandler(item.id);}}>Delete</button></span>
                </li>
            );
        })}
        </div>*/