import ModuleList from "../Modules/ModuleList/ModuleList";
import CourseNavigation from "../CourseNavigation";
import {FaCalendar} from "react-icons/fa";

function Home() {
    return (
        <div className="table-responsive">
            <table>
                <thead>
                <tr>
                    <td valign="top" width="25%">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb bg-light">
                                <li className="breadcrumb-item active">RS4550</li>
                                <li className="breadcrumb-item active">Fall 2023</li>
                                <li className="breadcrumb-item active">Home</li>
                            </ol>
                        </nav>
                    </td>
                    <td valign="top">
                        <select className="form-select-sm float-end small">
                            <option selected>Publish All</option>
                            <option>Publish One</option>
                            <option>Delete One</option>
                            <option>Delete All</option>
                        </select>
                        <button type="button" className="btn btn-light float-end">View
                            Progress
                        </button>
                        <button type="button" className="btn btn-light top-0 end-0">Collapse All
                        </button>
                        <button type="button" className="btn btn-danger top-0 end-0">+Module
                        </button>
                        <hr/>
                    </td>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td valign="top" width="25%">
                        <CourseNavigation/>
                    </td>
                    <td>
                        <ModuleList/>
                    </td>
                    <td valign="top">
                        <h1>Status</h1>
                        <h1><FaCalendar/></h1>

                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Home;