import {Navigate, Route, Routes, useParams} from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import Home from "./Home";
import Assignments from "../Assignments/index.js";
import AssignmentEditor from "../Assignments/AssignmentEditor";
import Modules from "./Modules";

function Courses({courses}) {
    const {courseId} = useParams();
    console.log(courseId);
    console.log(...courses);
    console.log(courseId);
    const course = courses.find((course) => course.id === courseId);
    console.log(course);
    return (
        <div className="table-responsive">
            <table className="table" border="0" width="100">
                <tbody>
                <tr className="no-bottom">
                    <td valign="top" width="20%" className="no-border">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb bg-light">
                                <li className="breadcrumb-item active">course</li>
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
                            <Route path="Courses/:courseId/*" element={<Courses/>}/>
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