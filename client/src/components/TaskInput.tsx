import React, { useState } from 'react';
import { PlusCircle } from 'lucide-react';
import { motion } from 'framer-motion';

interface TaskInputProps {
  onAdd: (title: string) => void;
}

const TaskInput: React.FC<TaskInputProps> = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) {
      setError(true);
      return;
    }
    onAdd(title);
    setTitle('');
    setError(false);
  };

  return (
    <form onSubmit={handleSubmit} className="task-input-form">
      <div className="input-group">
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            if (e.target.value.trim()) setError(false);
          }}
          placeholder="What needs to be done?"
          className={error ? 'error' : ''}
        />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="add-btn"
        >
          <PlusCircle size={20} />
          Add Task
        </motion.button>
      </div>
      {error && <p className="error-text">Task title is required</p>}
    </form>
  );
};

export default TaskInput;
