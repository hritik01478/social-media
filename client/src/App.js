import './App.css';
import { Home } from './pages/home/Home';
import { Login } from './pages/login/Login';
import { Register } from './pages/register/Register';

function App() {
  return (
    <div className="App">
      {/* <div className="blur" style={{top:'-18%', right:'0'}}></div>
      <div className="blur" style={{ top: '36%', left: '-8rem' }}></div> */}
      {/* <Home /> */}
      <Register />
      {/* <Login /> */}
    </div>
  );
}

export default App;
