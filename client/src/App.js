import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import './components/Navbar/Navbar.css';
import AllRoutes from'./AllRoutes'
function App() {
  return (
   
      <Router>
        <Navbar/>
        <AllRoutes/>
     </Router>

  );
}

export default App;
