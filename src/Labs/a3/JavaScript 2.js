import VariablesAndConstants from "./JavaScript/VariablesAndConstants";
import VariableTypes from "./JavaScript/VariableTypes"
import BooleanVariables from "./JavaScript/BooleanVariables";
import IfElse from "./JavaScript/IfElse";
import TernaryOperator from "./JavaScript/TernaryOperator";
import WorkingWithFunctions from "./WorkingWithFunctions";
import WorkingWithArrays from "./WorkingWithArrays";
import TemplateLiterals from "./JavaScript/TemplateLiterals";
import House from "./JavaScript/House";
import Spread from "./JavaScript/Spread";
import Destructing from "./JavaScript/Destructing";
import FunctionDestructing from "./JavaScript/FunctionDestructing";
function JavaScript() {
    console.log('Hello World!')
    return(
        <div>
            <h1>JavaScript</h1>
            <VariablesAndConstants/>
            <VariableTypes/>
            <BooleanVariables/>
            <IfElse/>
            <TernaryOperator/>
            <WorkingWithFunctions/>
            <WorkingWithArrays/>
            <TemplateLiterals/>
            <House/>
            <Spread/>
            <Destructing/>
            <FunctionDestructing/>
        </div>
    );
}
export default JavaScript;