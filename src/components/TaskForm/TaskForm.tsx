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
}

// When a task is added
function handleSubmit(e: SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();

    // check and store errors
    const validationErrors = validTask(TaskForm);
    setErrors(validationErrors);

    // No keys = no errors
    if (Object.keys(validationErrors).length === 0) {
        // Adds to dashboard
        onAddTask(formData);

        // Clear form
        FormData(emptyForm);
    }
}

// change handlers
