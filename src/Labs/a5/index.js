import EncodingParametersInURLs from "./EncodingParametersInURLs";
import WorkingWithObjects from "./WorkingWithObjects";
import WorkingWithArrays from "./WorkingWithArrays";

function Assignment5() {
    return (
        <div>
            <h1>Assignment 5</h1>
            <a href="https://kanbas-node-server-app-d13q.onrender.com">
                I forgot to include the link to the render site in my submission so I'm adding it here
            </a>
            <div className="list-group">
                <a href="localhost:4000/a5/welcome"
                   className="list-group-item">
                   Welcome
                </a>
                <EncodingParametersInURLs/>
                <WorkingWithObjects/>
                <WorkingWithArrays/>
            </div>
        </div>
    );
}
export default Assignment5;