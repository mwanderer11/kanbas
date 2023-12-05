import Signin from "../Kanbas/Users/signin";
import Account from "../Kanbas/Users/Account";
import UserTable from "../Kanbas/Users/table";
import { Routes, Route, Navigate } from "react-router-dom";
import Nav from "../Nav";
function Project() {
    return (
        <div className="row">
            <div className="col-10">
                <Routes>
                   {/*<Route path="/" element={<Navigate to="../Kanbas/Courses/Home" />} />*/}
                    <Route path="/signin" element={<Signin/>} />
                    <Route path="/" element={<UserTable/>}/>
                    <Route path="/Account" element={<Account/>}/>
                </Routes>
            </div>
        </div>
    );
}
export default Project;