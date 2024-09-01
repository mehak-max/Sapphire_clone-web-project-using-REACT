import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import Newin from './Component/Newin';
import Women from './Component/Women'
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div >
      <Navbar/>
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route path="/Newin" element={<Newin />} />
        <Route path="/Women" element={<Women />} />
      </Routes>
    </div>
  );
}
export default App;
