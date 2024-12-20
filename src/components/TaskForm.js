import React, { useState, useEffect } from 'react';

const TaskForm = ({ currentTask, onTaskAdded, onTaskUpdated }) => {
  const [task, setTask] = useState({ title: '', description: '' });

  // If a task is being edited, populate the form fields with the task data
  useEffect(() => {
    if (currentTask) {
      setTask(currentTask);
    }
  }, [currentTask]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentTask) {
      onTaskUpdated(task);  // Update task if editing
    } else {
      onTaskAdded(task);  // Add task if creating new
    }
    setTask({ title: '', description: '' });  // Clear form after submit
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={task.title}
        onChange={handleChange}
        placeholder="Task Title"
        required
      />
      <textarea
        name="description"
        value={task.description}
        onChange={handleChange}
        placeholder="Task Description"
      />
      <button type="submit">{currentTask ? 'Update Task' : 'Add Task'}</button>
    </form>
  );
};

export default TaskForm;
