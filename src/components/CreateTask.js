import React, { useState } from 'react';
import { createTask } from '../api/taskApi';

const CreateTask = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [completed, setCompleted] = useState(false);
    const [priority, setPriority] = useState('Medium');  // Add priority state
    const [dueDate, setDueDate] = useState('');  // Add dueDate state
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newTask = {
            title,
            description,
            completed,
            priority, // Pass priority
            dueDate: dueDate ? new Date(dueDate) : null, // Format dueDate
        };

        try {
            const createdTask = await createTask(newTask);
            setMessage(`Task "${createdTask.title}" created successfully!`);
            setTitle('');
            setDescription('');
            setCompleted(false);
            setPriority('Medium');
            setDueDate('');
        } catch (error) {
            setMessage(`Error: ${error.message}`);
        }
    };

    return (
        <div>
            <h2>Create New Task</h2>
            {message && <p>{message}</p>}
            <form onSubmit={handleSubmit}>
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
                    <label htmlFor="priority">Priority:</label>
                    <select
                        id="priority"
                        value={priority}
                        onChange={(e) => setPriority(e.target.value)}
                    >
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="dueDate">Due Date:</label>
                    <input
                        type="date"
                        id="dueDate"
                        value={dueDate}
                        onChange={(e) => setDueDate(e.target.value)}
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
                <button type="submit">Create Task</button>
            </form>
        </div>
    );
};

export default CreateTask;
