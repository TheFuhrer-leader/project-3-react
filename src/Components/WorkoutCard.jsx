function WorkoutCard({ name, exercises }) {
  return (
    <div className="workout-card">
      <h3>{name}</h3>

      <ul>
        {exercises.map((exercise, index) => (
          <li key={index}>{exercise}</li>
        ))}
      </ul>
    </div>
  );
}

export default WorkoutCard;