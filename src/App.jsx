
import "./app.scss"
import Contact from "./components/contact/Contact";
import IntroPage from "./components/intropage/IntroPage";
import Myskills from "./components/myskills/Myskills";
import Navbar from "./components/navabar/Navbar";
import Parallex from "./components/parallex/Parallex";
import Portfolio from "./components/portfolio/Portfolio";
// import StudentProgress from "./components/progressbar/StudentProgress";
import Func from "./components/progressbar/func";

const App = () => {
  return <div>
    <section id="Homepage"><Navbar />
      <IntroPage /></section>
    <section id="My skills"> <Parallex type={"My skills"} /></section>
    <section><Myskills /></section>
    <section><Func /></section>
    <section id="My projects"> <Parallex type={"My projects"} /></section>
    <Portfolio />
    <section id="Contact"><Contact /></section>
  </div>;
};

export default App;
