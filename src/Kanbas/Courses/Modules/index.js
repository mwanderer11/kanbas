import ModuleList from "./ModuleList/ModuleList";
import CourseNavigation from "../CourseNavigation";

function Modules() {
    return (
        <div className="table-borderless table-responsive">
            <table className="table" border="0" width="100">
                <tbody>
                <tr>
                    <td valign="top" width="25%">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb bg-light">
                                <li className="breadcrumb-item active">RS4550</li>
                                <li className="breadcrumb-item active">Fall 2023</li>
                                <li className="breadcrumb-item active">Home</li>
                            </ol>
                        </nav>
                        <hr/>
                        <CourseNavigation/>
                    </td>
                    <td>
                        <h2>Modules</h2>
                        <ModuleList/>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Modules;