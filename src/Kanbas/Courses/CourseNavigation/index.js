import { Link, useLocation } from "react-router-dom";
import "../../index.css"

function CourseNavigation() {
    const links = ["Home", "Modules", "Piazza", "Zoom Meetings", "Assignments",
                   "Quizzes", "Grades", "People", "Pantop Video", "Announcements"];
    const { pathname } = useLocation();
    return (
        <div className="list-group position-fixed " style={{width: 150}}>
            {links.map((link, index) => (
                <Link
                    key={index}
                    to={`/Kanbas/${link}`}
                    className={`nav-link list-group-item-flush list-group-item-primary
                     ${pathname.includes(link) ? "active" : ""}`}>
                    {link}
                </Link>
            ))}
        </div>
    );
}
export default CourseNavigation;