

import Task from "./Task/Task";

import './styles.scss'

import { AiOutlineClear } from "react-icons/ai";

export default function Tasks({tasks,setTasks}) {
  
  const handleRemovetask = (taskID) => {
    const updatedTask = tasks.filter((task) => task.id !== taskID);
    setTasks(updatedTask);
  };
 
  const handleCleartask = () => {
    setTasks([]);
  };
  

  return (
    <main className="task-list">
      <h1>These are the tasks</h1>

      

      {tasks.map((task, index) => {
        return (
          console.log(task),
          (
            

            <Task
              key={index}
              {...task}
              onRemoveTask={handleRemovetask}
              onClearTask={handleCleartask}
            />
          )
        );
      })}

      <div className="clear-tasks">
        <button onClick={handleCleartask}><AiOutlineClear /><p>Clear Tasks</p></button>
      </div>
    </main>
  );
}
