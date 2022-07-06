import { useState, useEffect, useRef } from "react";
import Filter from "./components/Filter";
import God from "./components/God";

function App() {
    const dGods = [
        {
            id: 1,
            name: "Apollo",
            category: "basic",
        },
        {
            id: 2,
            name: "Pan",
            category: "basic",
        },
        {
            id: 3,
            name: "Chaos",
            category: "advanced",
        },
        {
            id: 4,
            name: "Selene",
            category: "advanced",
        },
        {
            id: 5,
            name: "Zeus",
            category: "advanced",
        },
    ];

    const [gods, setGods] = useState(dGods);
    const [nPlayers, setNPlayers] = useState(2);

    const filterGods = (nPlayers) => {
        if (nPlayers >= 1) {
            setGods(shuffle(dGods).slice(0, nPlayers));
        }
    };

    const shuffle = (data) => {
        return data
            .map((value) => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value);
    };

    const player = (nPlayers) => {
        var show = [];
        for (let i = 0; i <= nPlayers; i++) {
            show.push(<p>Players nPlayers </p>);
        }
        console.log(show)
        return show;
        // export as a component
    };

    return (
        <div className='App'>
            <Filter gods={gods} filterGods={filterGods} nPlayers={nPlayers} setNPlayers={setNPlayers} />

            {player()}
            {gods.map((god) => (
                <God key={god.id} god={god} />
            ))}
        </div>
    );
}

export default App;
