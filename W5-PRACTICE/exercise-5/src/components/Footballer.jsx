export default function Footballer({ player }) {
  return (
    <div className="card">
      <img src={player.image.src} alt={player.image.alt} />
      <h2>{player.name}</h2>
      <p>{player.club}</p>
      <p>{player.position}</p>
    </div>
  );
}
