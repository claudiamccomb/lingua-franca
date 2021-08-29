import React from 'react'; 
import styles from '../styles/navbar.module.css'; 
import { Link } from 'react-router-dom';

class Navbar extends React.Component{
    render(){
        return <div className = {styles.navbar}>
          <div style = {{float:"left", display:"flex"}}>
          <p className = {styles.navbarItem}>Lingua Franca</p>
          </div>
          <div style = {{float:"right", display:"flex"}}>
          <p className = {styles.navbarItem}>Home</p>
          <p className = {styles.navbarItem}>Community</p>
          <p className = {styles.navbarItem}>Common Questions</p>
          <p className = {styles.navbarItem}>Resources</p>
          <p className = {styles.navbarItem}>Sign Up</p>
          </div>
          </div>
    }
  }
  export default Navbar;

  