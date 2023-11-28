import { Link, useLocation } from "react-router-dom";
import {FaUser, FaCalendar, FaClock, FaEnvelope, FaUserFriends, FaInfoCircle}
    from "react-icons/fa";
import "./index.css"

function KanbasNavigation() {
    const links = ["Inbox", "Groups", "Calendar", "Help"];
    const N = <img src="../n.png" width={100} height={100} alt=""></img>
    const icons = [<FaEnvelope/>, <FaUserFriends/>, <FaCalendar/>,
    <FaInfoCircle/>]
    const { pathname } = useLocation();
    return (
        <div className="list-group wd-pos-fixed" style={{ width: 125 }}>
            <div className="nav list-group-item list-group-item-danger">
                {N}
            </div>
            <Link
                key={0}
                to={`Account`}
                className={
                    `nav-link list-group-item list-group-item-danger ${pathname.includes(`Account`) && "active"}`}>
                <h2> {<FaUser/>} </h2> Account
            </Link>
            <Link
                key={1}
                to={`Dashboard`}
                className={
                    `nav-link list-group-item list-group-item-danger ${pathname.includes("Dashboard") && "active"}`}>
                <h2> {<FaClock/>} </h2> Dashboard
            </Link>
            <Link
                key={2}
                to={`Home`}
                className={
                    `nav-link list-group-item list-group-item-danger ${pathname.includes("Home") && "active"}`}>
                <h2> {icons[2]} </h2> Courses
            </Link>
            {links.map((link, index) => (
                <Link
                    key={index}
                    to={`${link}`}
                    className={
                    `nav-link list-group-item list-group-item-danger ${pathname.includes(link) && "active"}`}>
                    <h2> {icons[index]} </h2> {link}
                </Link>
            ))}
        </div>
    );
}
export default KanbasNavigation;