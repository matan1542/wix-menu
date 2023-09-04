import React from "react";

function ContextMenu({ onContextMenu }) {
  const handleContextMenu = (event) => {
    event.preventDefault();
    onContextMenu();
  };

  const addHandler = () => {
    console.log("Add");
  };

  const updateHandler = () => {
    console.log("Update");
  };

  const deleteHandler = () => {
    console.log("Delete");
  };

  return (
    <div onContextMenu={handleContextMenu} className="context-menu">
      <button onClick={addHandler}>Add</button>
      <button onClick={updateHandler}>Update</button>
      <button onClick={deleteHandler}>Delete</button>
    </div>
  );
}

export default ContextMenu;
