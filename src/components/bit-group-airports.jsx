const BigGroupAirports = ({ airports }) => {
    console.log(airports);
    const string = JSON.stringify(airports, null, 4);
    return (
        <div>
            <pre>{string}</pre>
        </div>
    )
}

export default BigGroupAirports;
