import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Button from "./components/button";
import landinggif from "./static/landing.gif";
import insta from "./static/insta.png";
import fb from "./static/fb.png";
import twitter from "./static/twitter.png";
import About from "./About";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="landing-upper">
        <img src={landinggif} style={{ width: `30vw` }}></img>
        <div>
          <h1 style={{ color: `var(--lightpink)`, textAlign: `center` }}>
            Lingua Franca
          </h1>
          <br></br>
          <h5 style={{ color: `var(--blue)`, textAlign: `left` }}>
            Bridging the language gap through community and education
          </h5>
          <div style={{ display: `flex`, justifyContent: `center` }}>
            <img src={insta} style={{ padding: `0 3vw` }}></img>
            <img src={fb} style={{ padding: `0 3vw` }}></img>
            <img src={twitter} style={{ padding: `0 3vw` }}></img>
          </div>
        </div>
      </div>
      <div className="landing-lower">
        <div className="landing-lower-content">
          <Button children={"Choose Language"} location="/"></Button>
          <Button children={"About Lingua Franca"} location="/about"></Button>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;

/*
position: absolute;
width: 1513.64px;
height: 468.55px;
left: -34.49px;
top: 588px;

background: linear-gradient(180deg, rgba(246, 114, 128, 0.43) -4.3%, #F67280 100%);
transform: rotate(0.67deg); */
