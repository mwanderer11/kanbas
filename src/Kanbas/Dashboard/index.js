import {Link} from "react-router-dom";
import "../index.css"

function Dashboard({courses, course, setCourse, addNewCourse,
                   deleteCourse, updateCourse}) {
    return (
        <div>
            <h1 className="wd-padding-left-small">Dashboard</h1> <br/>
            <div className="wd-padding-left-small">
            <input value={course.name} className="form-control-sm wd-margin-left"
                   onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
            <input value={course.number} className="form-control-sm"
                   onChange={(e) => setCourse({ ...course, number: e.target.value }) } />
            <input value={course.startDate} className="form-control-sm" type="date"
                   onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
            <input value={course.endDate} className="form-control-sm" type="date"
                   onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />
            <button type="button" className="btn btn-success" onClick={addNewCourse} >
                Add
            </button>
            <button type="button" className="btn btn-warning" onClick={updateCourse}>
                Update
            </button>
            </div>
            <br/>

            <div className="wd-flex-row-container wd-padding-left-small">
                {courses.map((course) => (
                        <div className="card wd-dashboard-padding card-width">
                        <img className="card-img-top" src="../../blue.jpeg"
                             width={"200"} height={"200"} alt=""></img>
                            <Link
                                key={course.id}
                                className={`nav-link card-link`}
                                to={`/Kanbas/Courses/${course.id}`}> {course.name}: {course.number}
                                <br/>
                                <button type="button" className="btn btn-danger btn-sm wd-padding-small"
                                    onClick={(event) => {
                                        event.preventDefault();
                                        deleteCourse(course.id);
                                    }}>Delete</button>
                            <button type="button" className="btn btn-primary btn-sm wd-padding-small"
                                onClick={(event) => {
                                    event.preventDefault();
                                    setCourse(course);
                                }}>
                                Edit
                            </button>
                            </Link>

                        </div>
                ))}
            </div>
        </div>
    );
}
export default Dashboard;