import './App.css';
import "./styles.css";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ResponsiveCard from './Components/Cards/Cards_a.js';
import Navbar from './Components/Navbar/Navbar.js';
import Search from './Components/Search_bar/Search.js';
import Calendar1 from './Components/Calendar/Calender.js';
import Dashboard from './Components/HomePage/Dashboard.jsx';
import Form from './Components/JobUpload/Form.jsx';
import { Link } from 'react-router-dom';
import entities from './csvjson.json'

// const HomePage = () =>(
//   <>
//     <Navbar/>
//     <Home/>
//     <Footer/>
//   </>
// ),

export default function App() {
  return (
    <div className="App">
      <Navbar/>
      <Search/>
{
 
  entities.map((element,index)=> {
      var tags = element.generated_tags.split(',');
          return( 
            <ResponsiveCard 
              key = {index} 
              name = {element.Name}
              email = {element.Email}
              phone = {element['Mobile Number']}
              tags = {tags}
            />
          )
      })
}

      <Calendar1/>
      <Dashboard/>
      {/* <Form/> */}
    </div>
  );
}

