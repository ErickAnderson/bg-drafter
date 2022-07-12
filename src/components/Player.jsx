import God from "./God"

export default function Player({ gods, name = '' }) {
    return (
        <div className="player">
            <h2>Player {name}</h2>
            {gods.map((god) => (
                <God key={god.id} god={god} />
            ))}
        </div>
    )
}