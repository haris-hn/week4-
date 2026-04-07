import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

interface Task {
  id: string;
  title: string;
  completed: boolean;
}

let tasks: Task[] = [
  { id: '1', title: 'Welcome to your Full-Stack To-Do App!', completed: false },
  { id: '2', title: 'Try adding a new task below', completed: true },
];

// GET /api/tasks -> return all tasks
app.get('/api/tasks', (req: Request, res: Response) => {
  res.json(tasks);
});

// POST /api/tasks -> add task (validate required fields)
app.post('/api/tasks', (req: Request, res: Response) => {
  const { title } = req.body;
  if (!title) {
    return res.status(400).json({ error: 'Task title is required' });
  }

  const newTask: Task = {
    id: Date.now().toString(),
    title,
    completed: false,
  };

  tasks.push(newTask);
  res.status(201).json(newTask);
});

// PUT /api/tasks/:id -> update task (mark complete/incomplete)
app.put('/api/tasks/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  const { completed, title } = req.body;

  const taskIndex = tasks.findIndex((t) => t.id === id);
  if (taskIndex === -1) {
    return res.status(404).json({ error: 'Task not found' });
  }

  if (completed !== undefined) tasks[taskIndex].completed = completed;
  if (title !== undefined) tasks[taskIndex].title = title;

  res.json(tasks[taskIndex]);
});

// DELETE /api/tasks/:id -> delete task
app.delete('/api/tasks/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  const taskIndex = tasks.findIndex((t) => t.id === id);
  
  if (taskIndex === -1) {
    return res.status(404).json({ error: 'Task not found' });
  }

  const deletedTask = tasks.splice(taskIndex, 1);
  res.json(deletedTask[0]);
});

export default app;

if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}
