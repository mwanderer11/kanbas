function ClickEvent() {
    const hello = () => {
        alert("Hello World!");
    };
    const good = () => {
        alert("Life is Good!");
    };
    return (
        <div>
            <h2>Click Event</h2>
            <button type="button" className="btn btn-outline-dark" onClick={hello}>
                Click Hello 1 </button>
            <button type="button" className="btn btn-outline-dark" onClick={() => hello()}>
                Click Hello 2 </button>
            <button type="button" className="btn btn-outline-dark"
                onClick={() => {
                    hello();
                    good();
                }}
            >
                Click Hello 3
            </button>
        </div>
    );
}
export default ClickEvent;