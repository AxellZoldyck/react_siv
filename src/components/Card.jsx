export default function Card({ children, onClick, selected }) {
  return (
    <div
      className={`card${selected ? " selected" : ""}`}
      onClick={onClick}
      tabIndex={0}
    >
      {children}
    </div>
  );
}
