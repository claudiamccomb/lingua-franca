import React from 'react'; 
import styles from '../styles/footer.module.css'; 

class Footer extends React.Component{
    render(){
        return <div className = {styles.footer}>
            <p style = {{color: `white`}}>Lingua Franca</p>
            <hr style = {{color: `white`}}></hr>
            <div className = {styles.footerFlex}>
                <div style = {{padding: `0 5vw`}}>
                    <h6>Foundation</h6>
                    <p>About Us</p>
                </div>
                <div style = {{padding: `0 5vw`}}>
                    <h6>Our Services</h6>
                    <p>Commonly Asked Questions</p>
                    <p>Resources: Translated Guides</p>
                    <p>Community: Ask a Question</p>
                </div>
                <div style = {{padding: `0 5vw`}}>
                    <h6>Join Lingua Franca</h6>
                    <p>Create an Account</p>
                </div>
            </div>
          </div>
        
    }
  }
  export default Footer;