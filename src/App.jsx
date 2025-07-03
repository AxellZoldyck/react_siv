import Navbar from './components/Navbar';
import EventList from './components/EventList';
import VolunteerForm from './components/VolunteerForm';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar title="Sistem Informasi Volunteer" />
      <main>
        <EventList />
        <VolunteerForm />
      </main>
      <Footer />
    </>
  );
}

export default App;
