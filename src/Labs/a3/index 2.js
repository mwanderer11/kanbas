import 'bootstrap/dist/css/bootstrap.min.css';
import JavaScript from "./JavaScript";
import PathParameters from "./PathParameters";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import TodoList from "./todos/TodoList";
import { useSelector } from "react-redux";

function Assignment3() {
    const { todos } = useSelector((state) => state.todoReducer)
    return (
        <div className="container">
            <h1>Assignment 3</h1>
            <h3>Todos</h3>
            <ul className="list-group">
                {todos.map((todo) => (
                    <li className="list-group-item" key={todo.id}>
                        {todo.title} </li>
                    ))}
            </ul>
            <Styles/>
            <Classes/>
            <PathParameters/>
            <JavaScript/>
            <ConditionalOutput/>
            <TodoList/>
        </div>
    );
}
export default Assignment3;