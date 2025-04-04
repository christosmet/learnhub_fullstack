import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="p-4">
        <Outlet /> {/* Εδώ εμφανίζονται τα components των routes */}
      </main>
    </div>
  );
}

export default App;
