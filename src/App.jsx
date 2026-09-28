import Header from "./components/Header";
import Hero from "./components/Hero";
import StatCard from "./components/StatCard";
import WorkoutCard from "./components/WorkoutCard";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />

      <main>
        <Hero />

        <section className="stats" id="stats">
          <h2>My Stats</h2>

          <div className="stats-container">
            <StatCard title="Weight" value="190 lbs" />
            <StatCard title="Squat" value="315 lbs" />
            <StatCard title="Incline Dumbbell Press" value="90 lbs" />
            <StatCard title="Hip Thrust" value="585 lbs" />
          </div>
        </section>

        <section className="workouts" id="workouts">
          <h2>My Workouts</h2>

          <div className="workout-container">
            <WorkoutCard
              name="Chest Day"
              exercises={[
                "Incline Dumbbell Press",
                "Machine Chest Press",
                "Cable Fly",
                "Triceps Pushdown",
              ]}
            />

            <WorkoutCard
              name="Leg Day"
              exercises={[
                "Squats",
                "Leg Press",
                "Hip Thrust",
                "Calf Raises",
              ]}
            />

            <WorkoutCard
              name="Back Day"
              exercises={[
                "Lat Pulldown",
                "Chest-Supported Row",
                "Cable Row",
                "Dumbbell Curl",
              ]}
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;