// Utility functions

// Implement task filtering logic
// Add sorting functions
// Create validation helpers
// Add date formatting utilities

// Imports
import type { Task, Filters, TaskFormData, TaskErrors } from '../types';

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