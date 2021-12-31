import Navbar from "./components/Navbar";
import { Routes, Route } from 'react-router-dom';
import AddApplicant from './components/AddApplicant';
import ViewApplicant from './components/ViewApplicant';
import EditApplicant from "./components/EditApplicant";

function App() {
  return (
    <div>
      <h1 className="text-center">Hostel Application System</h1>
      <Navbar />
      <Routes>
        <Route path="/hostelApplicants" element={<AddApplicant />} />
        <Route
          path="/viewApplicants"
          element={<ViewApplicant />}
        />
        <Route
          path="/edit/:sid/:studentName/:registrationNumber"
          element={<EditApplicant />}
        />
      </Routes>
    </div>
  );
}

export default App;
