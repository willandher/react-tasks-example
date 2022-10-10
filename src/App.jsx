import TaskForm from "./components/tasks/TaskForm";
import TaskList from "./components/tasks/TaskList";

const App = () => {

    return (
        <main className="bg-zinc-900 h-screen" >
            <div className="container mx-aut">
            <TaskForm></TaskForm>
            <TaskList></TaskList>
            </div>
        </main>
    );
};
export default App;
