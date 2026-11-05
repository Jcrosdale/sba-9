// Implement list rendering with proper key management
// Handle task status updates
// Implement task addition


// Parent component
// Manages and displays a list of tasks

// imports
import { useState } from 'react';
import TaskItem from './TaskItem';
import type { TaskListProps } from '../../types';


// Function Component
export default function TaskList({ tasks, onStatusChange, onDelete }: TaskListProps) {

    const [searchTerm, setSearchTerm] = useState('');
    const [sortBy, setSortBy] = useState('title');

    // Search tasks
    const filteredTasks = tasks.filter(task =>
        task.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Add sorting functionality
    const sortedTasks = [...filteredTasks].sort((a, b) => {
        if (sortBy === 'title') {
            return a.title.localeCompare(b.title);
        }

        return a.status.localeCompare(b.status);
    });

    if (sortedTasks.length === 0) {
        return <p>No tasks found.</p>
    }

    return (
        <>
            {/* Add a search bar to search for tasks */}
            <input
                type='text'
                placeholder='Search for tasks...'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
            >
                <option value='title'>Title</option>
                <option value='status'>Status</option>
            </select>

            {/* Implement task deletion */}
            <ul className='task-list'>
                {sortedTasks.map(task => (
                    <TaskItem
                        key={task.id}
                        task={task}
                        onStatusChange={onStatusChange}
                        onDelete={onDelete}
                    />
                ))}
            </ul>
        </>
    );

}