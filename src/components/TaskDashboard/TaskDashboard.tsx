// Dashboard

import { useState } from 'react';
import TaskFilter from '../TaskFilter/TaskFilter';
import TaskList from '../TaskList/TaskList';
import type { Task, TaskStatus, Filters } from '../../types';

// Initial (Sample) Tasks
const initialTasks: Task[] = [
    { id: '1', title: 'Task 1', description: 'Description 1', status: 'pending', priority: 'low', dueDate: '2023-31-12' },
    { id: '2', title: 'Task 2', description: 'Description 2', status: 'in-progress', priority: 'medium', dueDate: '2024-01-01' },
    { id: '3', title: 'Task 3', description: 'Description 3', status: 'completed', priority: 'high', dueDate: '2024-01-02' }
];

export default function TaskDashboard() {

    // useState
    const [tasks, setTasks] = useState<Task[]>(initialTasks);
    const [filters, setFilters] = useState<Filters>({});

    // Closure to TaskItem
    function onStatusChange(taskId: string, newStatus: TaskStatus) {
        // Updates only the selected task
        setTasks(prev => prev.map(task => task.id === taskId ? { ...task, status: newStatus } : task))
    };

    // CLosure to T(askFilter
    function onFilterChange( newFilters: Filters ) {
        setFilters(newFilters);
    };

    // Delete
    function onDelete(taskId: string) {
        setTasks(prev => prev.filter(task => task.id !== taskId))
    }

    // Tasks matching the active filters
    const visibleTasks = tasks.filter(task =>
        (!filters.status || task.status === filters.status) &&
        (!filters.priority || task.priority === filters.priority)
    );

    return (
        <div className="dashboard">
            <h1>Task Dashboard</h1>
            <TaskFilter onFilterChange={onFilterChange} />
            <TaskList
                tasks={visibleTasks}
                onStatusChange={onStatusChange}
                onDelete={onDelete}
            />
        </div>
    )
}