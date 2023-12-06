import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register'
import NoPageFound from './Components/NoPageFound';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Counter from './Components/Counter';
import Counter2 from './Components/06-12/Counter2';
import UseEffect from './Components/06-12/UseEffect';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='*' element={<NoPageFound />} />
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/counter' element={<Counter />} />
        <Route path='/counter2' element={<Counter2 />} />
        <Route path='/use-effect' element={<UseEffect />} />
        {/* assignment - set routes for login and register */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
