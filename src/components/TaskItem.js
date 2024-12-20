// src/components/TaskItem.js
import React, { useState } from 'react';

const TaskItem = ({ task, onDelete, onUpdate }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [updatedTask, setUpdatedTask] = useState({ ...task });

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedTask((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    // Save updates to the backend and notify parent component
    const handleSave = async () => {
        await onUpdate(updatedTask);  // Pass updated task to parent component
        setIsEditing(false);
    };

    // Toggle editing state
    const handleEdit = () => {
        setUpdatedTask({ ...task });
        setIsEditing(!isEditing);
    };

    return (
        <li>
            {isEditing ? (
                <div>
                    <input
                        type="text"
                        name="title"
                        value={updatedTask.title}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="description"
                        value={updatedTask.description}
                        onChange={handleChange}
                    />
                    <button onClick={handleSave}>Save</button>
                </div>
            ) : (
                <div>
                    <h4>{task.title}</h4>
                    <p>{task.description}</p>
                    <p>Priority: {task.priority}</p>
                    <p>Due Date: {task.dueDate}</p>
                    <p>Status: {task.completed ? 'Completed' : 'Pending'}</p>
                    <button onClick={() => onDelete(task.id)}>Delete</button>
                    <button onClick={handleEdit}>Edit</button>
                </div>
            )}
        </li>
    );
};

export default TaskItem;
