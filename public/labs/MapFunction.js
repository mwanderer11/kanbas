function MapFunction() {
    let numberArray = [1, 2, 3, 4, 5, 6]
    const square = (a) => a * a;

    const squares = numberArray.map(square);
    const cubes = numberArray.map((a) => a * a * a);

    return (
        <div>
            <h2>Map Function</h2>
            numberArray = {numberArray}
            <br/>
            squares = {squares}
            <br/>
            cubes = {cubes}
            <br/>
            <ul>
                {numberArray.map((a) => (
                    <li>{a}</li>
                                 ))}
            </ul>
        </div>
    )
}