import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route />
        <Route /> */} 
        {/* assignment - set routes for login and register */}
      </Routes>
    </div>
  );
}

export default App;
