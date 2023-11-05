import React from "react";
import { Link, useParams } from "react-router-dom";
import {FaCheckCircle} from "react-icons/fa";
import { useSelector, useDispatch} from "react-redux";
import {
    setAssignment,
} from "./assignmentsReducer";

function Assignments() {
    const { courseId } = useParams();
    const assignments = useSelector((state) => state.assignmentsReducer.assignments);
    const courseAssignments = assignments.filter(
        (assignment) => assignment.num === courseId);
    const dispatch = useDispatch();

    return (
        <div>
            <Link type="button" className="btn btn-danger float-end"
                  to={`/Kanbas/Courses/${courseId}/Assignments/AssignmentEditor`}>
                +Assignment</Link>
            <h2>Assignments for course {courseId}</h2>
            <div className="list-group">
                {courseAssignments.map((assignment) => (
                    <li
                        className="list-group-item assignment-spacing">
                        {assignment.title} <FaCheckCircle color="color-green"/>
                        <Link type="button" className="btn btn-danger float-end"
                        onClick={() => dispatch(setAssignment(assignment))}
                              to={`/Kanbas/Courses/${courseId}/Assignments/AssignmentEditor`}>Edit</Link>
                    </li>
                ))}
            </div>
        </div>
    );
}
export default Assignments;
