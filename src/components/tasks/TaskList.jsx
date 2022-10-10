import {TaskCard} from "./TaskCard";
import {TaskContext} from "../../context/TaskContext";
import {useContext} from "react";

export default function TaskList() {
    const {tasks} = useContext(TaskContext)
    if (tasks.length === 0) {
        return <h1 className="text-white text-4xl text-center">No hay tareas aun</h1>;
    }
    return (
        <div className="grid grid-cols-4 gap-1">
            {tasks.map((task) =>
                <TaskCard key={task.id} task={task}/>
            )}
        </div>
    );
}
