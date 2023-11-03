import React from "react";
import HelloRedux from "./HelloRedux";
import CounterRedux from "./CounterRedux";
import AddRedux from "./AddRedux";
import {useSelector} from "react-redux";

const ReduxExamples = () => {
    const { todos } = useSelector((state) => state.todoReducer)
    return(
        <div>
            <h2>Redux Examples</h2>
            <HelloRedux/>
            <CounterRedux/>
            <AddRedux/>
            <h3>Todos</h3>
            <ul className="list-group">
                {todos.map((todo) => (
                    <li className="list-group-item" key={todo.id}>
                        {todo.title} </li> ))}
            </ul>
        </div>
    );
};

export default ReduxExamples;