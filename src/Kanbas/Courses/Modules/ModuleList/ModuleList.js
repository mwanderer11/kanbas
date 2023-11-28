import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import { useSelector, useDispatch} from "react-redux";
import {
    addModule,
    deleteModule,
    updateModule,
    setModule,
    setModules,
} from "../modulesReducer";
import { findModulesForCourse, createModule } from "../client";
import * as client from "../client"

function ModuleList() {
    const modules = useSelector((state) => state.modulesReducer.modules);
    const module = useSelector((state) => state.modulesReducer.module);
    const dispatch = useDispatch();
    const {courseId} = useParams();
    useEffect(() => {
        findModulesForCourse(courseId).then((modules) =>
                      dispatch(setModules(modules)));
        }, [courseId]);


    const handleAddModule = () => {
        createModule(courseId, module).then((module) => {
            dispatch(addModule(module));
        });
    };

    const handleDeleteModule = (moduleId) => {
        client.deleteModule(moduleId).then((status) => {
            dispatch(deleteModule(moduleId));
        });
    };

    const handleUpdateModule = async () => {
        const status = await client.updateModule(module);
        dispatch(updateModule(module));
        return status;
    };

    return (
        <ul className="list-group">
            <li className="list-group-item">
                <button onClick={handleAddModule}
                        type="button" className="btn btn-success float-end">
                    Add</button>
                <button type="button" className="btn btn-primary float-end"
                        onClick={handleUpdateModule}>Update</button>
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
                                    onClick={() => handleDeleteModule(module._id)}>Delete</button>
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