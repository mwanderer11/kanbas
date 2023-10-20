import React from "react";
import db from "../../../Database";

function ModuleList() {
    const modules = db.modules;
    return (
        <ul className="list-group">
            {
                modules
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