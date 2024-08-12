const PartysList = ({ partys }) => {
    return (
        <div className>
            <ul>
                {
                partys.map((party, index) => (
                    <li key={index}>
                        <p><strong>{party.party}</strong>: {party.count} presidentes</p>
                    </li>
            ))}
            </ul>
        </div>
    );
}

export default PartysList;