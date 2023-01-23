import './App.css';
import Sidebar from './Components/Sidebar';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './Components/Nav';
import Create from './Components/Table/Create/Create';

function App() {

  return (
    <>
      <Router>
        <div className="App">
          {/* <Navbar /> */}
          <Sidebar />
          <Routes>
            <Route path='/add' element={<Create />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;