
import { useEffect, useState } from "react";
import Header from "./Components/1-Header/Header";
import Hero from "./Components/2-Hero/Hero";
import Main from "./Components/3-Main/Main";
import Contact from "./Components/4-Contact/Contact";
import Footer from "./Components/5-Footer/Footer";

function App() {
  const [showScrollButton, setShowScrollButton] = useState(false);
 
  useEffect(()=>{
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    })},
    []
);
  return (
    <>
      <div id="up" className="Container">
        <Header />

        <Hero />
        <div className="divider" />
        <Main />
        <div className="divider" />
        <Contact />
        <div className="divider" />
        <Footer />
      </div>
      <a
        href="#up"
        style={{ opacity: showScrollButton ? 1 : 0, transition: "1s" }}
      >
        <button className="icon-keyboard_arrow_up scroll2Top"></button>
      </a>
    </>
  );
}

export default App;
