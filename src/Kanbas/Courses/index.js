import {Navigate, Route, Routes, useParams} from "react-router-dom";
import { useState, useEffect} from "react";
import axios from "axios";
import CourseNavigation from "./CourseNavigation";
import Home from "./Home";
import Assignments from "../Assignments/index.js";
import AssignmentEditor from "../Assignments/AssignmentEditor";
import Modules from "./Modules";

function Courses() {
    const {courseId} = useParams();
    const BASE_URL = process.env.REACT_APP_API_BASE;
    const URL = `${BASE_URL}/courses`;

    const [course, setCourse] = useState({});
    const findCourseById = async (courseId) => {
        const response = await axios.get(
            `${URL}/${courseId}`
        );
        setCourse(response.data);
    };
    useEffect(() => {
        findCourseById(courseId);
    }, [courseId]);

    return (
        <div className="table-responsive">
            <table className="table" border="0" width="100">
                <tbody>
                <tr className="no-bottom">
                    <td valign="top" width="20%" className="no-border">
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