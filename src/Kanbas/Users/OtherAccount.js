import * as client from "./client";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {findUserById} from "./client";
function OtherAccount() {
    const [account, setAccount] = useState(null);
    const fetchAccount = async () => {
        const account = await client.account();
        setAccount(account);
    };
    const {userId} = useParams();
    const viewAccount = findUserById(userId);
    useEffect(() => {
        fetchAccount();
    }, []);

    return (
        <div className="w-50">
            <h1>Account</h1>
            {account && (
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
        </div>
    );
}
export default OtherAccount;