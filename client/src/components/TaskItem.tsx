import React from 'react';
import { Trash2, CheckCircle, Circle } from 'lucide-react';
import { motion } from 'framer-motion';
export type Task = {
  id: string;
  title: string;
  completed: boolean;
};

interface TaskItemProps {
  task: Task;
  onToggle: (id: string, completed: boolean) => void;
  onDelete: (id: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onToggle, onDelete }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className={`task-item ${task.completed ? 'completed' : ''}`}
    >
      <div className="task-content">
        <button
          onClick={() => onToggle(task.id, !task.completed)}
          className="toggle-btn"
        >
          {task.completed ? (
            <CheckCircle className="check-icon" size={24} />
          ) : (
            <Circle className="circle-icon" size={24} />
          )}
        </button>
        <span className="task-title">{task.title}</span>
      </div>
      <button onClick={() => onDelete(task.id)} className="delete-btn">
        <Trash2 size={20} />
      </button>
    </motion.div>
  );
};

export default TaskItem;
