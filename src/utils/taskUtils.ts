// Utility functions

// Implement task filtering logic
// Add sorting functions
// Create validation helpers
// Add date formatting utilities

// Imports
import type { Task, Filters, TaskFormData, TaskErrors } from '../types';

const STORAGE_KEY = 'task-dashboard-tasks';

// Save tasks
export function loadTasks(fallback: Task[]): Task[] {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        return saved ? (JSON.parse(saved) as Task[]) : fallback;
    } catch {
        return fallback;
    }
}

export function saveTasks(tasks: Task[]): void {
    try {
        localStorage.setItems(STORAGE_KEY, JSON.stringify(tasks));
    } catch {
        console.error('Tasks could not save');
    }
}

// Returning matching tasks
export function filterTasks(tasks: Task[], filters: Filters): Task[] {
    const term = filters.searchTerm?.trim().toLowerCase();

    return tasks.filter(task =>
    (!filters.status || task.status === filters.status) &&
    (!filters.priority || task.priority === filters.priority) &&
    (!term ||
        task.title.toLowerCase().includes(term) ||
        task.description.toLowerCase().includes(term))
    );

}

// Validate errors
export function validTask(data: TaskFormData): TaskErrors {
    const errors: TaskErrors = {};

    if (!data.title.trim()) {
        errors.title = 'Title is required';
    } else if (data.title.trim().length < 5) {
        errors.title = 'Title must be at least 5 characters';
    }

    if (!data.description.trim()) {
        errors.description = 'Description is required';
    }

    if (!data.dueDate) {
        errors.dueDate = 'Due date is required';
    }

    // run regardless of error
    return errors; 

}