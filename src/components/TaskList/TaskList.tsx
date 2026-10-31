// Implement list rendering with proper key management
// Handle task status updates
// Implement task addition
// Implement task deletion
// Add sorting functionality
// Add a search bar to search for tasks

// Parent component
// Manages and displays a list of tasks

// imports
import TaskItem from '../TaskItem/TaskItem';
import type { TaskListProps } from '../../types';


// Function Component
export default function TaskList({ tasks, onStatusChange, onDelete }: TaskListProps) {

    if (tasks.length === 0) {
        return <p>No match</p>
    }

    return (
        <div>
            {tasks.map(task => (
                <TaskItem
                    key={task.id}
                    task={task}
                    onStatusChange={onStatusChange}
                    onDelete={onDelete}
                />
            ))}
        </div>
    );

};