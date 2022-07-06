export default function God({god}) {
  return (
    <div className="god-card">
        <h3>{god.name}</h3>
        <p>{god.power}</p>
    </div>
  )
}