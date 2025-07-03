import { useState } from 'react';

export default function VolunteerForm({ selectedEvent }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedEvent) return;
    setSuccess(true);
    setName('');
    setEmail('');
  };

  if (!selectedEvent)
    return <div className="infoMsg">Pilih salah satu event volunteer yang ingin kamu ikuti sebelum mendaftar!</div>;

  return (
    <form className="formWrap" onSubmit={handleSubmit}>
      <label>Nama Lengkap</label>
      <input
        type="text"
        placeholder="Nama"
        value={name}
        onChange={e => setName(e.target.value)}
        required
      />
      <label>Email</label>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
      />
      <button type="submit">Daftar</button>
      {success && (
        <div className="successMsg">
          <b>Pendaftaran Berhasil!</b> <br />
          Anda mendaftar menjadi volunteer <b>{selectedEvent.eventName}</b>.<br />
          Silahkan cek email anda untuk info selengkapnya.
        </div>
      )}
    </form>
  );
}
