import {Route, Routes, Navigate} from "react-router-dom";
import Modules from "../Kanbas/Courses/Modules";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Home from "../Kanbas/Courses/Home"
import KanbasNavigation from "./KanbasNavigation";
import Dashboard from "./Dashboard";

function Kanbas() {
    return (
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
                                   element={<Dashboard/>}/>
                            <Route path="Home"
                                   element={<Home/>}/>
                            <Route path="Modules"
                                   element={<Modules/>}/>
                            {/*<Route path="Courses/:courseId/*"*/}
                            {/*       element={<Courses/>}/>*/}
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
    );
} export default Kanbas;