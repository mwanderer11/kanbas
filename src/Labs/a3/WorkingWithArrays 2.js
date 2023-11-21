import ArrayIndexAndLength from "./Arrays/ArrayIndexAndLength";
import AddingAndRemovingArrays from "./Arrays/AddingAndRemovingDataFromArrays";
import ForLoops from "./Arrays/ForLoops";
import MapFunction from "./Arrays/MapFunction";
import JsonStringify from "./Arrays/JsonStringify";
import FindFunction from "./Arrays/FindFunction";
import FindIndex from "./Arrays/FindIndex";
import FilterFunction from "./Arrays/FilterFunction";
var functionScoped = 2;
let blockScoped = 5;
const constant1 = functionScoped = blockScoped;
let numberArray1 = [1, 2, 3, 4, 5];
let stringArray1 = ['string1', 'string2'];
let variableArray1 = [functionScoped, blockScoped, constant1, numberArray1, stringArray1];

function WorkingWithArrays() {
    return (
        <>
            <h1>Working with Arrays</h1> <br/>
            numberArray1 = {numberArray1} <br/>
            stringArray1 = {stringArray1} <br/>
            variableArray1 = {variableArray1} <br/>
            <ArrayIndexAndLength/>
            <AddingAndRemovingArrays/>
            <ForLoops/>
            <MapFunction/>
            <JsonStringify/>
            <FindFunction/>
            <FindIndex/>
            <FilterFunction/>
        </>
    )
} export default WorkingWithArrays;