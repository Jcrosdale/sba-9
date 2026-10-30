// Create a controlled form for adding/editing tasks
// Implement form validation
// Handle form submission
// Show validation feedback

// Child component
// Displays individual task information.

// Imports
import type { TaskItemProps, TaskStatus } from '../../types';

// Function Component
export default function TaskItem( { 
    task,
    onStatusChange,
    onDelete
}: TaskItemProps ) {
    
    // Callback functions
    function handleStatusChange(e: React.ChangeEvent<HTMLSelectElement>) {
        onStatusChange(task.id, e.target.value as TaskStatus )
    }

    function handleDelete() {
        onDelete(task.id);
    }

    return (
        <div className={`task-item status-${task.status} priority-${task.priority}`}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>

            <label>
                Status:
                <select value={task.status} onChange={handleStatusChange}>
                    <option value="pending">Pending</option>
                    <option value="in-progress">In Progress</option>
                    <option value="completed">Completed</option>
                </select>
            </label>

            <button type="button" onClick={handleDelete}>
                Delete
            </button>

            <p>
                <h2>Priority:</h2> {task.priority}
            </p>

            <p>
                <h2>Due:</h2> {task.dueDate}
            </p>
        </div>

    );
};