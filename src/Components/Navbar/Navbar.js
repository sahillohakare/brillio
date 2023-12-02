import { Component } from "react";
import {Link} from "react-router-dom";
import "./NavbarStyles.css";

class Navbar extends Component{
  state = {clicked: false};
  handleClick = () => {
    this.setState({clicked: !this.state.clicked})
  }
  render(){
    return (
        <>
            <nav>
                <img id = "im" src = "https://www.brillio.com/wp-content/uploads/2022/01/Brillio_Primary-Logo_12.2021.svg" alt = "Brillio"></img>
                <div>
                    <ul id = "navbar" className={this.state.clicked ? "#navbar active" : "#navbar"}>
                        {/* {/* <li><a className = "active" href="index.html">About Brillio</a></li>*/}
                        {/* <li><a href="index.html">Let's Connect</a></li>
                        <li><a href="index.html">Careers</a></li> */}
                        <li><Link to = '/upload_job' className="active">Upload Job</Link></li>
                        <li><Link to ='/upload_resume'>Upload Resume</Link></li>
                        <li><Link to ='/my_profile'>My Profile</Link></li>
                        {/* <li><Link to ='/'>Careers</Link></li> */}
                    </ul>
                </div>

                <div id = "mobile" onClick={this.handleClick}>
                    <i id ="bar" 
                    className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
            </nav>
        </>
    );
  }
}

export default Navbar;