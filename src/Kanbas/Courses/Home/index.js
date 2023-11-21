import ModuleList from "../Modules/ModuleList/ModuleList";
import {FaCalendar, FaHome, FaFileImport, FaChartBar, FaBullhorn, FaFile} from "react-icons/fa";

function Home() {
    return (
        <div className="table-responsive">
            <table className="table-borderless" border="0">
                <thead>
                <tr>
                    <td valign="top">
                        <h1>Home</h1>
                        <hr/>
                    </td>
                    <td>
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
                        <hr/>
                    </td>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>
                        <h2>Modules</h2>
                        <ModuleList/>
                    </td>
                    <td valign="top" width="30%">
                        <h1> Course Status</h1>
                        <button type="button" className="btn btn-light">Publish</button>
                        <button type="button" className="btn btn-light">Unpublish</button>
                        <button type="button" className="btn btn-light">
                           <FaFile/> Import Content
                        </button>
                        <button type="button" className="btn btn-light">
                            <FaFileImport/> Import from Commons
                        </button>
                        <button type="button" className="btn btn-light">
                            <FaHome/> Choose Home Page
                        </button>
                        <button type="button" className="btn btn-light">
                            <FaChartBar/>View Course Stream
                        </button>
                        <button type="button" className="btn btn-light">
                            <FaChartBar/> New Analytics
                        </button>
                        <button type="button" className="btn btn-light">
                            <FaBullhorn/>View Course Notifications
                        </button>
                        <h2>Coming up</h2>
                        <h1><FaCalendar/></h1>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Home;