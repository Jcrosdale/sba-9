// Implement list rendering with proper key management
// Handle task status updates
// Implement task addition
// Implement task deletion
// Add sorting functionality
// Add a search bar to search for tasks

// Parent component
// Manages and displays a list of tasks

// imports
import { useState } from 'react';
import TaskFilter from '../TaskFilter/TaskFilter';
import TaskItem from '../TaskItem/TaskItem';
import type { Task, TaskStatus, TaskListProps } from '../../types';


// Function Component
export default function TaskList({ tasks, onStatusChange, onDelete }: TaskListProps) {

    // useState
    const [filters, setFilters] = useState<{ status?: TaskStatus; priority?: Task['priority'] }>({});


    return (
        <div>
            <TaskFilter onFilterChange={onFilterChange} />

            {visibleTasks.length === 0 ? (
                <p>No tasks match</p>
            ) : (
                visibleTasks.map(task => (
            <TaskItem
                key={task.id}
                task={task}
                onStatusChange={onStatusChange}
                onDelete={onDelete}
            />
            ))
            )}
        </div>
    );

};