let NumberArray1 = [1, 2, 3, 4, 5];
let stringArray1 = ['string1', 'string2']
NumberArray1.push(6);
stringArray1.push('string3')
NumberArray1.splice(2, 1); // remove 1 item starting at 2
stringArray1.splice(1, 1);

function AddingAndRemovingArrays() {
    return (
        <>
            <h2>Add and remove data from arrays</h2>
            numberArray1 = {NumberArray1} <br/>
            stringArray1 = {stringArray1} <br/>
        </>
    )
} export default AddingAndRemovingArrays;