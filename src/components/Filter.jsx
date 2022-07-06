export default function Filter({ filterGods, nPlayers, setNPlayers }) {
    const doFilter = (e) => {
        e.preventDefault()
        filterGods(nPlayers)
    }

    return (
        <form>
            <label htmlFor='n-players'>Number of Players:</label>
            <input type='text' name='n-players' value={nPlayers} onChange={(e) => setNPlayers(e.target.value)} />
            <br />

            <button className='shuffle-btn' onClick={(e) => doFilter(e)}>
                Shuffle
            </button>
        </form>
    )
}
