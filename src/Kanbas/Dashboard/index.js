import {Link} from "react-router-dom";
import db from "../Database";
import "../index.css"

function Dashboard() {
    const courses = db.courses;
    return (
        <div>
            <h1 className="wd-padding-left-small">Dashboard</h1>
            <div className="wd-flex-row-container wd-padding-left-small">
                {courses.map((course) => (
                        <div className="card wd-dashboard-padding card-width">
                        <img className="card-img-top" src="../../blue.jpeg"
                             width={"200"} height={"200"}></img>
                            <Link
                                key={course.id}
                                className={`nav-link card-link`}
                                to={`/Kanbas/Home`}> {course.name}: {course.number}
                    </Link>
                        </div>
                ))}
            </div>
        </div>
    );
}
export default Dashboard;