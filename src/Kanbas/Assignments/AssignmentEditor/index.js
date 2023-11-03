import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

function AssignmentEditor() {
    const { assignmentId } = useParams();
    const {courseId } = useParams();
    const assignments = useSelector((state) => state.assignmentsReducer.assignments);
    const assignment = assignments.find(
        (assignment) => assignment.id === assignmentId);
    const dispatch = useDispatch();

    const navigate = useNavigate();
    const handleSave = () => {
        console.log("Actually saving assignment TBD in later assignments");
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    };
    return (
        <div>
            <h2>Assignment Name</h2>
            <input value={assignment.title}
                   className="form-control mb-2" />
            <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
                  className="btn btn-danger">
                Cancel
            </Link>
            <button onClick={handleSave} className="btn btn-success me-2">
                Save
            </button>
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