import React from 'react';
import { CheckCircle2, ListTodo } from 'lucide-react';
export type Task = {
  id: string;
  title: string;
  completed: boolean;
};

interface TaskStatsProps {
  tasks: Task[];
}

const TaskStats: React.FC<TaskStatsProps> = ({ tasks }) => {
  const completedCount = tasks.filter((t) => t.completed).length;
  const pendingCount = tasks.length - completedCount;

  return (
    <div className="task-stats">
      <div className="stat-card">
        <ListTodo className="stat-icon pending" size={24} />
        <div>
          <h3>{pendingCount}</h3>
          <p>Pending</p>
        </div>
      </div>
      <div className="stat-card">
        <CheckCircle2 className="stat-icon completed" size={24} />
        <div>
          <h3>{completedCount}</h3>
          <p>Completed</p>
        </div>
      </div>
      <div className="stat-card">
        <div>
          <h3>{tasks.length}</h3>
          <p>Total Tasks</p>
        </div>
      </div>
    </div>
  );
};

export default TaskStats;
