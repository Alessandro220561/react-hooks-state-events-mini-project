import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [selectedCategory, setSelectedCategory] = useState("All")
  
  function handleCategoryClick(category) {
    setSelectedCategory(category);
    //console.log("clicked category:", category)
  }

  function handleDeleteTask(text) {
    const updatedTasks = tasks.filter((task) => task.text !== text);
    setTasks(updatedTasks)
  }

  const filteredTasks = tasks.filter(task => task.category === selectedCategory || selectedCategory === "All")

  function onTaskFormSubmit(newTask) {
    //console.log(newTask)
    setTasks([...tasks, newTask])
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={ CATEGORIES }  selectedCategory={ selectedCategory } handleCategoryClick={ handleCategoryClick }/>
      <NewTaskForm categories={ CATEGORIES.filter((category) => category !== "All") } onTaskFormSubmit={ onTaskFormSubmit }/>
      <TaskList tasks={ filteredTasks } handleDeleteTask={ handleDeleteTask }/>
    </div>
  );
}

export default App;
