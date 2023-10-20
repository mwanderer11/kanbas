import React from "react";
import { Link } from "react-router-dom";
import db from "../Database";


function Assignment() {
    const  assignments = db.assignments;
    return (
        <div>
            return (
            <div>
                <h2>Assignments for course RS4550</h2>
                <div className="list-group">
                    {assignments.map((assignment) => (
                        <Link
                            key={assignment.id}
                            to={`/Kanbas/Assignments/${assignment.id}`}
                            className="list-group-item">
                            {assignment.title}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
} export default Assignment;