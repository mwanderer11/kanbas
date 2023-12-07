import {Route, Routes, Navigate} from "react-router-dom";
import Modules from "../Kanbas/Courses/Modules";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Home from "../Kanbas/Courses/Home"
import KanbasNavigation from "./KanbasNavigation";
import Dashboard from "./Dashboard";
import Courses from "../Kanbas/Courses/index";
import Assignments from "../Kanbas/Assignments/index";
import store from "./store";
import {useEffect, useState} from "react";
import {Provider} from "react-redux";
import axios from "axios"
import Signin from "./Users/signin";
import UserTable from "./Users/table";
import Account from "./Users/Account";
import Signup from "./Users/signup";

function Kanbas() {
    const [courses, setCourses] = useState([]);
    const [course, setCourse] = useState({
                                             name: "New Course",
                                             number: "New Number",
                                             startDate: "2023-09-10",
                                             endDate: "2023-12-15",
                                         });
    const BASE_URL = process.env.REACT_APP_API_BASE;
    const URL = `${BASE_URL}/courses`
    const addNewCourse = async () => {
        const response = await axios.post(URL, course);
        setCourses([response.data, ...courses]);
        setCourse({name: ""});
    }
    const findAllCourses = async () => {
        const response = await axios.get(URL);
        setCourses(response.data);
    };

    useEffect(() => {
        findAllCourses();
    })

    const deleteCourse = async (course) => {
        const response = await axios.delete(`${URL}/${course.id}`);
        setCourses(courses.filter((c) => c.id !== course.id));
        return response;
    };

    const updateCourse = async (course) => {
        const response = await axios.put(
            `${URL}/${course.id}`,
            course);
        setCourses(courses.map((c) => {
                if (c.id === course.id) {
                    return course;
                }
                return c;
            })
        );
        setCourse({ name: "" });
        return response;
    };

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
                            <Route path="Account" element={<Account/>}/>
                            <Route path="/signin" element={<Signin/>} />
                            <Route path="/signup" element={<Signup/>}/>
                            <Route path="/Users" element={<UserTable/>}/>
                            <Route path="/Account" element={<Account/>}/>
                            <Route path="/Account/:id" element={<Account/>}/>
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