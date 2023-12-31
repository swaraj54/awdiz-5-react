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
import PropsMaps from './Components/09-12/PropsMaps';
import { Children, useState } from 'react';
import MapObject from './Components/09-12/MapObject';
import StyledComponent from './Components/09-12/StyledComponent';
import Js from './Components/10-12/Js';
import ChildrenProp from './Components/10-12/ChildrenProp';
import RegisterForm from './Components/10-12/RegisterForm';
import LoginForm from './Components/15-12/LoginForm';
import ChildToParent from './Components/16-12/ChildToParent';
import AllProducts from './Components/16-12/AllProducts';
import Todo from './Todo';
import SingleProduct from './Components/20-12/SingleProduct';
import UseMemo from './Components/22-12/UseMemo';
import UseCallback from './Components/23-12/UseCallback';
import UseReducer from './Components/24-12/UseReducer';
import ReduxCounter from './Components/31-12-redux/ReduxCounter';

function App() {

  const [myName, setMyName] = useState("Awdiz")

  const [students, setStudents] = useState([{ image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs1wQLZqIhYASivJhwDTSzAD7sN-N9w-3sCQKc4XrV8wIgFwsB-Sb_RRqKe3akMfSPxiA&usqp=CAU', name: "virat", marks: "100" }, { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs1wQLZqIhYASivJhwDTSzAD7sN-N9w-3sCQKc4XrV8wIgFwsB-Sb_RRqKe3akMfSPxiA&usqp=CAU", name: "rahul", marks: "100" }, { name: "rohit", marks: "100", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs1wQLZqIhYASivJhwDTSzAD7sN-N9w-3sCQKc4XrV8wIgFwsB-Sb_RRqKe3akMfSPxiA&usqp=CAU" }]);


  function ChangeName() {
    setMyName("Awdiz Institute.")
  }

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
        <Route path='/props-map' element={<PropsMaps kuchbhi={myName} myAge="25" ChangeName={ChangeName} myStudents={["krish", "jay", "shahbaj", "shrusti", "adesh"]} />} />
        <Route path='/map-object' element={<MapObject myStudentsData={students} />} />
        <Route path='/styled-component' element={<StyledComponent />} />
        <Route path='/js' element={<Js />} />
        <Route path='/children-prop' element={<ChildrenProp />} />
        <Route path='/register-form' element={<RegisterForm />} />
        <Route path='/login-form' element={<LoginForm />} />
        <Route path='/child-to-parent' element={<ChildToParent />} />
        <Route path='/all-products' element={<AllProducts />} />
        <Route path='/single-product/:id' element={<SingleProduct />} />
        <Route path='/use-memo' element={<UseMemo />} />
        <Route path='/use-callback' element={<UseCallback />} />
        <Route path='/use-reducer' element={<UseReducer />} />
        <Route path='/redux-counter' element={<ReduxCounter />} />
        {/* assignment - set routes for login and register */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
