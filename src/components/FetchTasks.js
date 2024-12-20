// src/pages/Fetch.js
import React, { useEffect, useState } from 'react';
import { getTasks, deleteTask } from '../api/taskApi';

const FetchTasks = () => {
    const [tasks, setTasks] = useState([]);
    const [message, setMessage] = useState('');

    // Fetch tasks when the component mounts
    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const data = await getTasks();
                setTasks(data);
            } catch (error) {
                setMessage(`Error: ${error.message}`);
            }
        };
        fetchTasks();
    }, []);

    const handleDelete = async (id) => {
        try {
            const deletedTask = await deleteTask(id);
            setTasks(tasks.filter(task => task.id !== deletedTask.id)); // Remove deleted task from state
            setMessage(`Task "${deletedTask.title}" deleted successfully!`);
        } catch (error) {
            setMessage(`Error: ${error.message}`);
        }
    };

    return (
        <div>
            <h2>Task List</h2>
            {message && <p>{message}</p>}
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        {task.title} - {task.completed ? 'Completed' : 'Pending'}
                        <button onClick={() => handleDelete(task.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FetchTasks;
