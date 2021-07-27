import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home';
import Routes from './Routes/Index';
import { FirebaseDatabaseProvider } from '@react-firebase/database';

function App() {
  return (
    <FirebaseDatabaseProvider>
      <Routes />
    </FirebaseDatabaseProvider>
  );
}

export default App;
