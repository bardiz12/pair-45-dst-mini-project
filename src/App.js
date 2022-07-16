import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { useSelector } from 'react-redux';
import { selectloggedInUser } from './store/userStore';

function App() {
  const isLoggedIn = useSelector(selectloggedInUser) !== null
  return (
    <div className="App">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
