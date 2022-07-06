import God from "./God"

export default function Player({ gods }) {
    return (
        <div className="player">
            <h2>Player X</h2>
            {gods.map((god) => (
                <God key={god.id} god={god} />
            ))}
        </div>
    )
}