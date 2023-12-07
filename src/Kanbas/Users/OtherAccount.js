/*
import * as client from "./client"
import { useParams, Link } from "react-router-dom";
import {useEffect, useState} from "react";
function OtherAccount() {
    const [account, setAccount] = useState(null);
    const {userId} = useParams();
    const findUserById = async (userId) => {
        const user = await client.findUserById(userId);
        setAccount(user);
    }
    useEffect(() => {
        findUserById(userId);
    })

    return (
        <div className="w-50">
            <h1>Account</h1>
            {account && (
                <div>
                    <input className="form-control"  value={account.firstName} />
                    <input className="form-control" value={account.lastName}/>
                    <input className="form-control" value={account.dob}/>
                    <input className="form-control" value={account.email} />
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
            {!account && (
                <div>
                    uh oh
                </div>
            )}
        </div>
    );
}
*/
