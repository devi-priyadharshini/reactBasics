import "./App.css";

import NavBar from "./components/NavBar";
import TravelCard from "./components/TravelCard";
import TravelData from "./data/travelData";

function App() {
  const travelData = TravelData.map((td) => TravelCard({ ...td }));

  return (
    <div>
      <NavBar />
      <main className="main">
        {/* Below plain javascript react element is created with props and function encapsulated within it */}
        {console.log(TravelData.map((td) => <TravelCard {...td} />))}
        {/* Below the function is executed using the given props and the virtual dom react tree element(javascript object) is returned. */}
        {console.log(TravelData.map((td) => TravelCard({ ...td })))} // here the
      </main>
    </div>
  );
}

export default App;
