import "./App.css";

import NavBar from "./components/NavBar";
import TravelCard from "./components/TravelCard";
import TravelData from "./data/travelData";

function App() {
  const travelData = TravelData.map((td) => TravelCard({ ...td }));
  return (
    <div>
      <NavBar />
      <main className="main">{travelData}</main>
    </div>
  );
}

export default App;
