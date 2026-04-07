import { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
export type Task = {
  id: string;
  title: string;
  completed: boolean;
};
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import TaskStats from './components/TaskStats';
import './App.css';

const API_URL = 'http://localhost:5000/api/tasks';

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get(API_URL);
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    } finally {
      setLoading(false);
    }
  };

  const addTask = async (title: string) => {
    try {
      const response = await axios.post(API_URL, { title });
      setTasks([response.data, ...tasks]);
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const toggleTask = async (id: string, completed: boolean) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, { completed });
      setTasks(tasks.map((t) => (t.id === id ? response.data : t)));
    } catch (error) {
      console.error('Error toggling task:', error);
    }
  };

  const deleteTask = async (id: string) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setTasks(tasks.filter((t) => t.id !== id));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <div className="app-container">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="glass-card"
      >
        <header>
          <h1>Premium Task Manager</h1>
          <p>Full-Stack Edition</p>
        </header>

        <TaskStats tasks={tasks} />

        <div className="main-content">
          <TaskInput onAdd={addTask} />
          
          {loading ? (
            <div className="loader">Loading tasks from server...</div>
          ) : (
            <TaskList
              tasks={tasks}
              onToggle={toggleTask}
              onDelete={deleteTask}
            />
          )}
        </div>
      </motion.div>
    </div>
  );
}

export default App;
