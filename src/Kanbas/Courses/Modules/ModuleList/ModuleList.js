import React from "react";
import db from "../../../Database";
import {useParams} from "react-router-dom";

function ModuleList() {
    const modules = db.modules;
    const {courseId} = useParams();
    return (
        <ul className="list-group">
            {
                modules
                    .filter((module) => module.courses === courseId)
                    .map((module, index) => (
                        <li key={index} className="list-group-item">
                            <h3>{module.name}</h3>
                            <p>{module.description}</p>
                        </li>
                    ))
            }
        </ul>
    );
}
export default ModuleList;