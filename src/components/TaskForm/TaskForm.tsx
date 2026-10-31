// Form to add tasks, with validation and error feedback

import { useState, type ChangeEvent, type SyntheticEvent } from 'react';
import { validTask } from '../../utils/taskUtils';
import type { TaskFormData, TaskErrors, TaskFormProps } from '../../types';

const emptyForm: TaskFormData = {
    title: '',
    description: '',
    priority: 'medium',
    dueDate: '',
};

export default function TaskForm({ onAddTask }: TaskFormProps) {
    const [formData, setFormData] = useState<TaskFormData>(emptyForm);
    // Shows no errors when empty
    const [errors, setErrors] = useState<TaskErrors>({});

    // change handlers
    // Runs on each input
    function handleChange(
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) {
        // New value after change
        const { name, value } = e.target;

        // Copy data and overwrite change
        setFormData(prev => ({ ...prev, [name]: value }));

        // Remove error when editing
        setErrors(prev => ({ ...prev, [name]: undefined }));
}

// When a task is added
function handleSubmit(e: SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();

    // check and store errors
    const validationErrors = validTask(formData);
    setErrors(validationErrors);

    // No keys = no errors
    if (Object.keys(validationErrors).length === 0) {
        // Adds to dashboard
        onAddTask(formData);

        // Clear form
        setFormData(emptyForm);
    }
}

return (
    <form className='task-form' onSubmit={handleSubmit}>
        <h2> Add Task </h2>

        <label>
            Title
            <input name='title' value={formData.title} onChange={handleChange}
            />
        </label>
        {errors.title && <p className="error">{errors.title}</p>}

        <label>
            Description
            <textarea name="description" value={formData.description} onChange={handleChange} 
            />
        </label>
        {errors.description && <p className='error'>{errors.description}</p>}

        <label>
            Priority
            <select name='priority' value={formData.priority} onChange={handlerChange}>
                <option value='low'>Low</option>
                <option value='medium'>Medium</option>
                <option value='high'>High</option>
            </select>
        </label>

        <label>
            Due Date
            <input type='date' name='dueDate' value={formData.dueDate} onChange={handleChange} />
        </label>
        {errors.dueDate && <p className='error'>{errors.dueDate}</p>}

        <button type='submit'>Add Task</button>
    </form>
            
    );

};
