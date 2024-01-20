import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { AllEvents, CalendarComp, EventForm } from "./components";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CalendarComp />} />
        <Route path="/addevent" element={<EventForm />} />
        <Route path="/showevents" element={<AllEvents />} />
      </Routes>
    </Router>
  );
}

export default App;
