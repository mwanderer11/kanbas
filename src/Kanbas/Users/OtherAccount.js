import { useParams, Link } from "react-router-dom";
import {findUserById} from "./client";
function OtherAccount() {
    const {userId} = useParams();
    const viewAccount = findUserById(userId);

    return (
        <div className="w-50">
            <h1>Account</h1>
            {viewAccount && (
                <div>
                    <input className="form-control"  value={viewAccount.firstName} id="disabled-input"/>
                    <input className="form-control" value={viewAccount.lastName} id="disabled-input"/>
                    <input className="form-control" value={viewAccount.dob} id="disabled-input"/>
                    <input className="form-control" value={viewAccount.email} id="disabled-input"/>
                    <select className="form-select">
                        <option value="USER">User</option>
                        <option value="ADMIN">Admin</option>
                        <option value="FACULTY">Faculty</option>
                        <option value="STUDENT">Student</option>
                    </select>
                    <Link to="/Kanbas/Users" className="btn btn-warning w-100">
                        Users
                    </Link>
                </div>
            )}
            {!viewAccount && (
                <div>
                    uh oh
                </div>
            )}
        </div>
    );
}
export default OtherAccount;