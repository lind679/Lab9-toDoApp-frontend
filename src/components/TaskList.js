import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks = [], onTaskUpdated, onTaskEdited }) => {
  // Ensure tasks is always defined and is an array
  if (!Array.isArray(tasks)) {
    console.error('Expected tasks to be an array, but got:', tasks);
    return <div>Error: Invalid tasks data</div>;
  }

  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.length > 0 ? (
          tasks.map((task) => {
            // Ensure the task has a valid id
            if (!task || !task.id) {
              console.warn('Skipping invalid task:', task);
              return null;  // Skip invalid tasks
            }
            return (
              <TaskItem 
                key={task.id} 
                task={task} 
                onDelete={onTaskUpdated}  // Use the appropriate callback for delete
                onUpdate={onTaskUpdated}  // Use the appropriate callback for update
                onEdit={onTaskEdited}  // Set current task for editing
              />
            );
          })
        ) : (
          <p>No tasks found.</p>  // Handle empty task list
        )}
      </ul>
    </div>
  );
};

export default TaskList;
