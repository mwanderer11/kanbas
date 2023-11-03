import React from "react";
import { Link, useParams } from "react-router-dom";
import {FaCheckCircle} from "react-icons/fa";
import { useSelector, useDispatch} from "react-redux";
import {
    addAssignment,
    deleteAssignment,
    updateAssignment,
    setAssignment,
} from "./assignmentsReducer";

function Assignments() {
    const { courseId } = useParams();
    const assignments = useSelector((state) => state.assignmentsReducer.assignments);
    const assignment = useSelector((state) => state.assignmentsReducer.assignment);
    const dispatch = useDispatch();

    return (
        <div>
            <button type="button" className="btn btn-danger float-end"
                    >+Assignment</button>
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
