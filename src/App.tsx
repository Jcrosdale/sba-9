import { useState } from 'react';
import TaskList from './components/TaskList/TaskList';
import type { Task, TaskStatus } from './types';
import './App.css'

export default function App() {

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
