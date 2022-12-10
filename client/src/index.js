

import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from './components/Home';
import Course from './components/course';
import Attendance from './components/Attendance';
import { createRoot } from 'react-dom/client';
import Register from './components/Register';
import View from './components/view';
import Edit from './components/edit';
//import ContextProvider from "./components/context/ContextProvider";
import Viewatt from './components/viewatt';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <Router>
    <Routes>
      <Route path='/'element={<App/>}/>
      <Route path='/Home'element={<Home/>}/>
      <Route path='/Course'element={<Course/>}/>
      <Route path='/Attendance'element={<Attendance/>}/>
      <Route path='/components/Register'element={<Register/>}/>
      <Route path='/view'element={<View/>}/>
      <Route path='/Edit'element={<Edit/>}/>
         <Route path='/viewatt'element={<Viewatt/>}/>


    </Routes>
   </Router>
);


