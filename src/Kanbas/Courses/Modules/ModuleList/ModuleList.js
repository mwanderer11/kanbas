import React from "react";
import {useParams} from "react-router-dom";
import { useSelector, useDispatch} from "react-redux";
import {
    addModule,
    deleteModule,
    updateModule,
    setModule,
} from "../modulesReducer";

function ModuleList() {
    const modules = useSelector((state) => state.modulesReducer.modules);
    const module = useSelector((state) => state.modulesReducer.module);
    const dispatch = useDispatch();
    const {courseId} = useParams();
    return (
        <ul className="list-group">
            <li className="list-group-item">
                <button onClick={() => dispatch(addModule({...module, courses: courseId}))}
                        type="button" className="btn btn-success float-end">
                    Add</button>
                <button type="button" className="btn btn-primary float-end"
                        onClick={() => dispatch(updateModule(module))}>Update</button>
                <input className="form-control-sm wd-sidebar-padding-text" value={module.name}
                       onChange={(e) => dispatch(setModule({
                    ...module, name: e.target.value}))}/>
            <br/>
                <textarea className="form-control" value={module.description} onChange={(e) =>
                    dispatch(setModule({...module, description: e.target.value}))}/>
            </li>
            {modules
                    .filter((module) => module.courses === courseId)
                    .map((module, index) => (
                        <li key={index} className="list-group-item module-spacing">
                            <button type="button" className="btn btn-danger float-end"
                                    onClick={() => dispatch(deleteModule(module._id))}>Delete</button>
                            <button type="button" className="btn btn-success float-end"
                                    onClick={() =>
                                        dispatch(setModule(module))}>Edit</button>
                            <h3>{module.name}</h3>
                            <p>{module.description}</p>
                        </li>
                    ))
            }
        </ul>
    );
}
export default ModuleList;