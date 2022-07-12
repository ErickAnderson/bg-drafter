export default function God({god}) {
  return (
    <div className={`god-card ${god.category}`}>
        <h3 className="god-name">{god.name}</h3>
        <p>{god.category}</p>
    </div>
  )
}