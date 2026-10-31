// TaskList component that manages and displays a list of tasks
export type TaskStatus = 'pending' | 'in-progress' | 'completed';

export interface Task {
    id: string;
    title: string;
    description: string;
    status: TaskStatus;
    priority: 'low' | 'medium' | 'high';
    dueDate: string;
}

export interface TaskListProps {
    tasks: Task[];
    onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
    onDelete: (taskId: string) => void;
}

// TaskItem component that displays individual task information
export interface TaskItemProps {
    task: Task;
    onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
    onDelete: (taskId: string) => void;
}

// TaskFilter component that allows filtering tasks by status and priority
export interface TaskFilterProps {
    onFilterChange: (filters: {
        status?: TaskStatus;
        priority?: 'low' | 'medium' | 'high';
    }) => void;
}

// Filter
export interface Filters {
    status?: TaskStatus;
    priority?: TaskPriority;
    searchTerm?: string;
}

// Task Data
export interface TaskFormData {
    title: string;
    description: string;
    priority: TaskPriority;
    dueDate: string;
}

