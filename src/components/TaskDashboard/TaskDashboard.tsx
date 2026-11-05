// Dashboard

import { useState, useEffect } from 'react';
import TaskFilter from '../TaskFilter/TaskFilter';
import TaskList from '../TaskList/TaskList';
import TaskForm from '../TaskForm/TaskForm';
import type { Task, TaskStatus, Filters, TaskFormData } from '../../types';
import { loadTasks, saveTasks } from '../../utils/taskUtils';

// Initial (Sample) Tasks
const initialTasks: Task[] = [
    { id: '1', title: 'Task 1', description: 'Description 1', status: 'pending', priority: 'low', dueDate: '2023-31-12' },
    { id: '2', title: 'Task 2', description: 'Description 2', status: 'in-progress', priority: 'medium', dueDate: '2024-01-01' },
    { id: '3', title: 'Task 3', description: 'Description 3', status: 'completed', priority: 'high', dueDate: '2024-01-02' }
];

export default function TaskDashboard() {

    // useState
    const [tasks, setTasks] = useState<Task[]>(() => loadTasks(initialTasks));
    const [filters, setFilters] = useState<Filters>({});

    // Save after each change
    useEffect(() => {
        saveTasks(tasks);
    }, [tasks]);

    // Closure to TaskItem
    function onStatusChange(taskId: string, newStatus: TaskStatus) {
        // Updates only the selected task
        setTasks(prev => prev.map(task => task.id === taskId ? { ...task, status: newStatus } : task))
    };

    // Add a new task
    function onAddTask(formData: TaskFormData) {
        const newTask: Task = {
            ...formData,
            id: Date.now().toString(),
            status: 'pending'
        };
        
        setTasks(prev => [...prev, newTask])
    }
    // CLosure to TaskFilter
    function onFilterChange(newFilters: Filters) {
        setFilters(newFilters);
    };

    // Delete
    function onDelete(taskId: string) {
        setTasks(prev => prev.filter(task => task.id !== taskId))
    }

    // Tasks matching the active filters
    const visibleTasks = tasks.filter(task =>
        (!filters.status || task.status === filters.status) &&
        (!filters.priority || task.priority === filters.priority) &&
        (
            !filters.searchTerm || 
            task.title.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
            task.description.toLowerCase().includes(filters.searchTerm.toLowerCase())
        )
    );

    return (
        <div className="dashboard">
            <h1>Task Dashboard</h1>

            <TaskForm onAddTask={onAddTask} />

            <TaskFilter onFilterChange={onFilterChange} />
            
            <TaskList
                tasks={visibleTasks}
                onStatusChange={onStatusChange}
                onDelete={onDelete}
            />
        </div>
    )
}