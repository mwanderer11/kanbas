import ModuleList from "./ModuleList/ModuleList";

function Modules() {
    return (
        <div>
            <h2>Modules</h2>
            <br/>
            <select className="form-select-sm float-end small">
                <option selected>Publish All</option>
                <option>Publish One</option>
                <option>Delete One</option>
                <option>Delete All</option>
            </select>
            <button type="button" className="btn btn-light float-end">View
                Progress
            </button>
            <button type="button" className="btn btn-light top-0 end-0">Collapse All
            </button>
            <button type="button" className="btn btn-danger top-0 end-0">+Module
            </button>
            <hr/>
            <ModuleList/>
        </div>
    );
}

export default Modules;