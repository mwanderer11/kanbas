import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../Database/index.js";
import {FaCheckCircle} from "react-icons/fa";

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
                        className="list-group-item assignment-spacing">
                        {assignment.title} <FaCheckCircle color="color-green"/>
                    </Link>
                ))}
            </div>
        </div>
    );
}
export default Assignments;
