import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../Database";


function Assignments() {
    const { courseId } = useParams();
    const assignments = db.assignments;

    return (
        <div>
            <h2>Assignments for course {courseId}</h2>
            <div className="list-group">
                {assignments.map((assignment) => (
                    <Link
                        key={assignment.id}
                        to={`/Kanbas/Courses/${courseId}/Assignments/${assignment.id}`}
                        className="list-group-item">
                        {assignment.title}
                    </Link>
                ))}
            </div>
        </div>
    );
}
export default Assignments;