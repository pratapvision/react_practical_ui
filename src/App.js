import './App.css';
import Sidebar from './Components/Sidebar';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Components/Nav';

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Navbar /> */}
        <Sidebar />
      </div>
    </Router>
  );
}

export default App;