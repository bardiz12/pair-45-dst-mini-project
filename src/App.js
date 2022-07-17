import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './authentication/firebase';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loggedIn, notLoggedIn } from './store/userStore';

function App() {

  const [loggedInUser] = useAuthState(auth)
  const dispatcher = useDispatch()

  useEffect(() => {
    if (loggedInUser) {
      dispatcher(loggedIn())
    } else {
      dispatcher(notLoggedIn())
    }

  }, [loggedInUser, dispatcher])

  return (
    <div className="App">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
