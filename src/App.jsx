import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import EventList from './components/EventList';
import VolunteerForm from './components/VolunteerForm';
import Footer from './components/Footer';

function App() {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setEvents([
        { id: 1, eventName: "Bakti Sosial", date: "10 Juli 2025" },
        { id: 2, eventName: "Pelatihan Literasi", date: "20 Juli 2025" }
      ]);
    }, 800);
  }, []);

  return (
    <>
      <Navbar title="Sistem Informasi Volunteer" />
      <main>
        <EventList
          events={events}
          selectedId={selectedEvent?.id}
          onSelect={setSelectedEvent}
        />
        <VolunteerForm selectedEvent={selectedEvent} />
      </main>
      <Footer />
    </>
  );
}
export default App;
