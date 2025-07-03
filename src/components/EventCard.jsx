export default function EventCard({ eventName, date }) {
  return (
    <div>
      <h3>{eventName}</h3>
      <p>{date}</p>
    </div>
  );
}
