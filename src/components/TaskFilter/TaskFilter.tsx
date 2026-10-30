// Implement filtering by status and priority
// Add search functionality
// Show active filter indicators

// Child component
// Allows filtering tasks by status and priority

// Imports
import { useState } from 'react';
import type { TaskStatus, TaskFilterProps, Task } from '../../types/index';

// Function Component
export default function TaskFilter({ onFilterChange }: TaskFilterProps) {
    // useState
    const [status, setStatus] = useState<TaskStatus | ''>('');
    const [priority, setPriority] = useState<Task['priority'] | ''>('');
    
    function handleStatusChange(e: React.ChangeEvent<HTMLSelectElement>) {
        const newStatus = e.target.value as TaskStatus | '';
        setStatus(newStatus);
        onFilterChange({
            status: newStatus || undefined,
            priority: priority || undefined
        });
    };

    function handlePriorityChange(e: React.ChangeEvent<HTMLSelectElement>) {
        const newPriority = e.target.value as Task['priority'] | '';
        setPriority(newPriority);
        onFilterChange({
            status: status || undefined,
            priority: newPriority || undefined
        });
    };

    return (
        <div className="task-filter">
            <label>
                Status:
                <select value={status} onChange={(handleStatusChange)}>
                    <option value="">All Statuses</option>
                    <option value="pending">Pending</option>
                    <option value="in-progress">In Progress</option>
                    <option value="completed">Completed</option>
                </select>
            </label>

            <label>
                Priority:
                <select value={priority} onChange={handlePriorityChange}>
                    <option value="">All Priorities</option>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
            </label>
        </div>
    )
};
