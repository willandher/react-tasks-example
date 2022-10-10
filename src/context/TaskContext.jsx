import  {createContext, useState, useEffect}  from "react";
import { tasks as data } from "../data/tasks";

export const TaskContext = createContext();
export default function TaskContextProvider(props) {
  let x = 20;
  const [tasks, setTasks] = useState([]);
  const createTask = (task) => {
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
        description: task.description,
      },
    ]);
  };
  const deleteTask = (task) => {
    setTasks(tasks.filter((n) => n !== task));
  };
  useEffect(() => {
    setTasks(data);
  }, []);
  return (
    <TaskContext.Provider
      value={{
        tasks,
        deleteTask,
        createTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
