import { useState, useEffect } from "react"
import Filter from "./components/Filter"
import Player from "./components/Player"
import "./App.css"

//TODO Use a json instead of an object
import defaultGods from "./gods"

function App() {
    const [gods, setGods] = useState([])
    const [player1Gods, setPlayer1Gods] = useState([])
    const [player2Gods, setPlayer2Gods] = useState([])
    const [nPlayers, setNPlayers] = useState(2)

    useEffect(() => {
        setGods(defaultGods)
    }, [])

    //TODO add support to dynamic number of players
    //TODO add support to filter per category
    //TODO refactor into a more clean code
    const filterGods = (nPlayers) => {
        let p1 = []
        let p2 = []
        let temp = []

        setGods(shuffle(gods))
        temp = gods.filter((god) => god.category === "basic")
        p1.push(temp.pop())
        p2.push(temp.pop())

        temp = gods.filter((god) => god.category === "advanced")
        p1.push(temp.pop())
        p1.push(temp.pop())
        p2.push(temp.pop())
        p2.push(temp.pop())

        setPlayer1Gods(p1)
        setPlayer2Gods(p2)
    }

    const shuffle = (data) => {
        return data
            .map((value) => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value)
    }

    return (
        // TODO make name att on player input based
        <div className='app'>
            <Filter gods={gods} filterGods={filterGods} nPlayers={nPlayers} setNPlayers={setNPlayers} />

            <div className='player-container'>
                <Player gods={player1Gods} name="Erick" /> 
                <Player gods={player2Gods} />
            </div>
        </div>
    )
}

export default App
