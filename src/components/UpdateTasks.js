// src/pages/Update.js
import React, { useState } from 'react';
import { updateTask } from '../api/taskApi';

const UpdateTasks = () => {
    const [id, setId] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [completed, setCompleted] = useState(false);
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const updatedTask = {
            title,
            description,
            completed,
        };

        try {
            const result = await updateTask(id, updatedTask);
            setMessage(`Task "${result.title}" updated successfully!`);
            setId('');
            setTitle('');
            setDescription('');
            setCompleted(false);
        } catch (error) {
            setMessage(`Error: ${error.message}`);
        }
    };

    return (
        <div>
            <h2>Update Task</h2>
            {message && <p>{message}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="id">Task ID:</label>
                    <input
                        type="text"
                        id="id"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="description">Description:</label>
                    <input
                        type="text"
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="completed">Completed:</label>
                    <input
                        type="checkbox"
                        id="completed"
                        checked={completed}
                        onChange={(e) => setCompleted(e.target.checked)}
                    />
                </div>
                <button type="submit">Update Task</button>
            </form>
        </div>
    );
};

export default UpdateTasks;
