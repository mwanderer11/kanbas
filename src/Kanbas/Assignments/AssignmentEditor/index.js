import React from "react";
import { useParams, Link } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {
    addAssignment,
    deleteAssignment,
    setAssignment,
} from "../assignmentsReducer";
import { createAssignment } from "../client";
import * as client from "../client";

function AssignmentEditor() {
    const {courseId } = useParams();
    const assignment = useSelector((state) => state.assignmentsReducer.assignment)
    const dispatch = useDispatch();
    const handleAddAssignment = () => {
        createAssignment(courseId, assignment).then((assignment) => {
            dispatch(addAssignment(assignment));
        });
    };
    const handleDeleteAssignment = (assignmentId) => {
        client.deleteAssignment(assignmentId).then(() => {
            dispatch(deleteAssignment(assignmentId));
        });
    };
    return (
        <div>
            <Link type="button" className="btn btn-danger float-end"
                    to={`/Kanbas/Courses/${courseId}/Assignments`}
                    onClick={() => handleDeleteAssignment(assignment.id)}>
                Delete Assignment</Link>
            <h2>Assignment Name</h2>
            <textarea value={assignment.title}
                   className="form-control"
                      onChange={(e) =>
                          dispatch(setAssignment({...assignment, title: e.target.value}))}/>
            <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
                  className="btn btn-danger">
                Cancel
            </Link>
            <Link type="button"
                  to={`/Kanbas/Courses/${courseId}/Assignments`}
                  onClick={handleAddAssignment}
                    className="btn btn-success me-2">
                Save
            </Link>
            <br/> <br/>
            Points:
            <input placeholder="100" className="form-control-sm"/>
            <br/> <br/>
            Show grade as:
            <select className="form-select-sm">
                <option selected>Percent</option>
                <option>Points</option>
            </select>
            <br/><br/>
            Do not count this assignment towards the final grade:
            <input type="checkbox" className="wd-padding-small"/>
            <br/><br/>
            Submission type:
            <select className="form-select-sm">
                <option selected>Online</option>
                <option>Paper</option>
                <option>Email</option>
            </select>
            Online Entry Options:
            <br/>
            Text entry <input type="checkbox" className="wd-padding-small"/>
            <br/>
            Website URL <input type="checkbox" className="wd-padding-small"/>
            <br/>
            Media Recording <input type="checkbox" className="wd-padding-small"/>
            <br/>
            Annotation <input type="checkbox" className="wd-padding-small"/>
            <br/>
            Uploads <input type="checkbox" className="wd-padding-small"/>
            <br/><br/>
            Allowed attempts
            <select className="form-select-sm">
                <option selected>Unlimited</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
            </select>
            <br/> <br/>
            Plagiarism Review:
            <select className="form-select-sm">
                <option selected>Review for plagiarism</option>
                <option>None</option>
            </select>
            <br/> <br/>
            Group assignment <input type="checkbox" className="wd-padding-small"/>
            <br/>
            Require peer reviews <input type="checkbox" className="wd-padding-small"/>
            <br/>
            Assign To:
            <input  value="Everyone" className="form-control-sm"/>
            <br/>
            Due date
            <div className="form-group">
                <input type="date" className="form-control-sm"/>
            </div>
            <br/>
            Available From
            <div className="form-group">
                <input type="date" className="form-control-sm"/>
            </div>
            <br/>
            Available Until
            <div className="form-group">
                <input type="date" className="form-control-sm"/>
            </div>

        </div>
    );
}
export default AssignmentEditor;