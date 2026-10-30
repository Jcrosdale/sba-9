import { useState } from 'react';
import TaskList from './components/TaskList/TaskList';
import type { Task, TaskStatus } from './types';
import './App.css'

// Initial (Sample) Tasks
const initialTasks: Task[] = [
  { id: '1', title: 'Task 1', description: 'Description 1', status: 'pending', priority: 'low', dueDate: '2023-31-12' },
  { id: '2', title: 'Task 2', description: 'Description 2', status: 'in-progress', priority: 'medium', dueDate: '2024-01-01' },
  { id: '3', title: 'Task 3', description: 'Description 3', status: 'completed', priority: 'high', dueDate: '2024-01-02' }
];

export default function App() {
  // useState
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  // Closure to TaskItem
    function onStatusChange(taskId: string, newStatus: TaskStatus) {
        // Updates only the selected task
        setTasks(prev => prev.map(task => task.id === taskId ? { ...task, status: newStatus } : task))
    };

    // Closure to TaskItem
    function onDelete(taskId: string) {
        // Set for a new array to be created if a task is deleted
        setTasks(prev => prev.filter(task => task.id !== taskId));
    };

  return (
    <TaskList 
    tasks={tasks} 
    onStatusChange={onStatusChange} 
    onDelete={onDelete}
    />

  );

};
