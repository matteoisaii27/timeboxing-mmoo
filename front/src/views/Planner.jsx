export default function Planner() {
  const hours = Array.from({ length: 16 }, (_, i) => i + 7); // 7:00 - 22:00

  return (
    <div className="planner">
      <h2>Planificador Diario</h2>

      <section className="priorities">
        <h3>Top Priorities</h3>
        <div className="priority-inputs">
          <input placeholder="Prioridad 1" />
          <input placeholder="Prioridad 2" />
          <input placeholder="Prioridad 3" />
        </div>
      </section>

      <section className="brain-dump">
        <h3>Brain Dump</h3>
        <textarea placeholder="Escribe tus ideas..."></textarea>
      </section>

      <section className="schedule">
        <h3>Horario</h3>
        <div className="grid">
          {hours.map((h) => (
            <div key={h} className="row">
              <span>{h}:00</span>
              <input type="text" placeholder="Actividad" />
              <span>{h}:30</span>
              <input type="text" placeholder="Actividad" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

