import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import aboutgif from "./static/about.gif";
import aboutcard from "./static/aboutcard.png";

function About() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="landing-upper">
        <img src={aboutgif} style={{ width: `30vw` }}></img>
        <div style={{ width: `60%` }}>
          <h1 style={{ color: `var(--blue)`, textAlign: `center` }}>
            Our Mission
          </h1>
          <br></br>
          <h6
            style={{
              color: `var(--blue)`,
              textAlign: `left`,
              textAlign: `center`,
            }}
          >
            Here at Lingua Franca, we strive to bridge language gaps all around
            the world by offering a safe, inclusive space where resources,
            questions and answers can be translated for anyone, anywhere.
            Whether it’s by connecting with our community of volunteer
            translators or finding community members to share similar
            experiences, we aim to break language barriers and foster
            inclusivity{" "}
          </h6>
        </div>
      </div>
      <h1 style={{ color: `var(--blue)`, textAlign: `center` }}>
        What We Offer
      </h1>
      <div style={{ display: `flex`, justifyContent: `center` }}>
        <div className="about-card"></div>
        <div className="about-card"></div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default About;
