import EventCard from './EventCard';

export default function EventList({ events, selectedId, onSelect }) {
  return (
    <div>
      <h2>Daftar Event Volunteer</h2>
      {events.length === 0 ? (
        <p>Loading...</p>
      ) : (
        events.map(event => (
          <EventCard
            key={event.id}
            eventName={event.eventName}
            date={event.date}
            selected={selectedId === event.id}
            onClick={() => onSelect(event)}
          />
        ))
      )}
    </div>
  );
}
