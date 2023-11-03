import {Route, Routes, Navigate} from "react-router-dom";
import Modules from "../Kanbas/Courses/Modules";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Home from "../Kanbas/Courses/Home"
import KanbasNavigation from "./KanbasNavigation";
import Dashboard from "./Dashboard";
import Courses from "../Kanbas/Courses/index";
import Assignments from "../Kanbas/Assignments/index";
import db from "./Database"
import store from "./store";
import { useState } from "react";
import {Provider} from "react-redux";

function Kanbas() {
    const [courses, setCourses] = useState(db.courses);
    const [course, setCourse] = useState({
                                             name: "New Course",
                                             number: "New Number",
                                             startDate: "2023-09-10",
                                             endDate: "2023-12-15",
                                         });
    const addNewCourse = () => {
        setCourses([...courses, {...course, id: new Date().getTime()}]);
    }
    const deleteCourse = (courseId) => {
        setCourses(courses.filter((course) => course.id !== courseId));
    };
    const updateCourse = () => {
        setCourses(
            courses.map((c) => {
                if(c.id === course.id) {
                    return course;
                }
                else {
                    return c;
                }
            })
        )
    }
    return (
        <Provider store={store}>
        <div className="table-borderless table-responsive">
            <table className="table">
            <tbody>
            <tr>
                <td valign="top" width="10%">
                    <KanbasNavigation/>
                </td>
                <td>
                    <div className="overflow-y-scroll">
                        <Routes>
                            <Route path="/" element={<Navigate to="Dashboard" />}/>
                            <Route path="Dashboard" to="/Kanbas/Dashboard"
                                   element={<Dashboard
                                       courses={courses}
                                       course={course}
                                       setCourse={setCourse}
                                       addNewCourse={addNewCourse}
                                       deleteCourse={deleteCourse}
                                       updateCourse={updateCourse}
                                   />}/>
                            <Route path="Home"
                                   element={<Home/>}/>
                            <Route path="Modules"
                                   element={<Modules/>}/>
                            <Route path="Courses/:courseId/*"
                                   element={<Courses
                                   courses={courses}/>}/>
                            <Route path="Assignments" element={<Assignments/>} />
                            <Route path="Assignments/:assignmentId"
                                   element={<AssignmentEditor/>}/>
                            <Route path="Grades" element={<h1>Grades</h1>}/>
                        </Routes>
                    </div>
                </td>
            </tr>
            </tbody>
            </table>
        </div>
        </Provider>
    );
} export default Kanbas;