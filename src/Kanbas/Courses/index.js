import {Navigate, Route, Routes, useParams} from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import Home from "./Home";
import Assignments from "../Assignments";
import AssignmentEditor from "../Assignments/AssignmentEditor";
import Modules from "./Modules";
import db from "../../Kanbas/Database";

function Courses() {
    const {courseId} = useParams();
    const course = db.courses.find((course) => course.id === courseId);
    return (
        <div className="table-borderless table-responsive wd-padding-left-small">
            <table className="table" border="0" width="100">
                <tbody>
                <tr>
                    <td valign="top" width="25%">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb bg-light">
                                <li className="breadcrumb-item active">{course.name}</li>
                                <li className="breadcrumb-item active">Fall 2023</li>
                                <li className="breadcrumb-item active">Home</li>
                            </ol>
                        </nav>
                        <hr/>
                        <CourseNavigation/>
                    </td>
                    <div className="overflow-y-scroll">
                        <Routes>
                            <Route path="/" element={<Navigate to="Home"/>}/>
                            <Route path="Home" element={<Home/>}/>
                            <Route path="Modules" element={<Modules/>}/>
                            <Route path="Assignments" element={<Assignments/>}/>
                            <Route path="Assignments/:assignmentId"
                                   element={<AssignmentEditor/>}/>
                            <Route path="Grades" element={<h1>Grades</h1>}/>
                        </Routes>

                    </div>
                </tr>
                </tbody>
            </table>
        </div>
    );
} export default Courses;