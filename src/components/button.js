import React, { Component } from 'react';
import styles from '../styles/button.module.css';
import { Link } from 'react-router-dom';

// class Button extends Component {
//     render() {
//         return (
//             <button onClick={(e) => {e.preventDefault(); window.location.href='https://chrome.google.com/webstore/category/extensions?hl=en'; }} className = {styles.button} >
//                 <span><p>add to chroeme for fre</p></span>
//             </button>
//         );
//     }
// }

// export default Button;

const Button = ({location, children}) => {
    return (
        // <button className = {styles.button}>
        //     <span><p>{children}</p></span>
        // </button>
        <Link to = {location}>
        <button className = {styles.button}>
            <span><p>{children}</p></span>
        </button>
        </Link>
        
    //   <div className = {styles.card}>
    //       <h3>{title}</h3>
    //       <p>{children}</p>
    //   </div>
    )
  }
  export default Button; 