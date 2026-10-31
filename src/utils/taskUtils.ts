// Utility functions

// Implement task filtering logic
// Add sorting functions
// Create validation helpers
// Add date formatting utilities

// Imports
import type { Task, Filters, TaskFormData } from '../types';

// Returning matching tasks
export function filterTasks(tasks: Task[], filters: Filters): Task[] {
    const term = filters.searchTerm?.trim().toLowerCase();
}