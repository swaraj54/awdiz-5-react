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
import UseEffect2 from './Components/08-12/UseEffect2';
import UseEffect3 from './Components/08-12/UseEffect3';
import UseEffect4 from './Components/08-12/UseEffect4';
import UseParams from './Components/08-12/UseParams';
import DynamicRouting from './Components/08-12/DynamicRouting';

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
        <Route path='/use-effect-2' element={<UseEffect2 />} />
        <Route path='/use-effect-3' element={<UseEffect3 />} />
        <Route path='/use-effect-4' element={<UseEffect4 />} />
        <Route path='/dynamic-routing' element={<DynamicRouting />} />
        <Route path='/use-params/:age' element={<UseParams />} />
        {/* assignment - set routes for login and register */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
