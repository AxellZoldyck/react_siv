import Card from './Card';
export default function EventCard({ eventName, date, selected, onClick }) {
  return (
    <Card selected={selected} onClick={onClick}>
      <h3>{eventName}</h3>
      <p>{date}</p>
    </Card>
  );
}
