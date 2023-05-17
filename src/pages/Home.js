import React, { useState } from "react";
import TaskCard from "../components/TaskCard";

function Home() {

    //hooks
  const [newTask, setNewTasks] = useState({ title: "", desc: "" });
  const [tasks, setTasks] = useState([]);


  //handle functions
  const handleAddNew = (e) => {
    const { name, value } = e.target;
    setNewTasks((prevVal) => {
      return {
        ...prevVal,
        [name]: value,
      };
    });
  };

  const handleAddNewSubmit = (e) => {
    e.preventDefault();
    setTasks((p) => {
      return [...p, newTask];
    });
    setNewTasks({ title: "", desc: "" });
  };

  const handleDelete = (taskIndex) => {
    const updatedTasks = tasks.filter((task, index) => index !== taskIndex);
    setTasks(updatedTasks);
  };

  const handleSave = (index, editedTask) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = editedTask;
    setTasks(updatedTasks);
  };

  //render functions
  const renderInputBox = () => {
    return (
      <form className="addNew">
        <div>
          <input
            type="text"
            name="title"
            placeholder="Title.."
            value={newTask.title || ""}
            onChange={handleAddNew}
          />
          <textarea
            name="desc"
            placeholder="Description.."
            value={newTask.desc || ""}
            onChange={handleAddNew}
          />
        </div>
        <button className="addBtn" onClick={handleAddNewSubmit} disabled={newTask.title===""}>
          +
        </button>
      </form>
    );
  };

  const renderTaskCardsLoopWrapper = () => {
    if (tasks.length === 0)
      return (
        <>
          <div className="noTask"><p>No Tasks</p></div>
        </>
      );
    return (
      <>
        {tasks.map((item, index) => {
          return (
            <div key={index}>
              <TaskCard data={item} index={index} onDelete={handleDelete} onSave={handleSave} />
            </div>
          );
        })}
      </>
    );
  };

  return (
    <div className="HomeWrapper">
      {renderInputBox()}
      <div className="taskLoopWrapper">{renderTaskCardsLoopWrapper()} </div>
    </div>
  );
}

export default Home;
