import { useState } from "react";
import { myProjects } from "../myProjects";
import "./Main.css";
import { AnimatePresence, motion } from "framer-motion";

function Main() {
  const [activeButton, setActiveButton] = useState("all projects");
  const [arr, setArr] = useState(myProjects);
  const handleButtonClick = (buttonCategory) => {
    setActiveButton(buttonCategory);
    const newarr = myProjects.filter((item) => {
      const zzz = item.category.find((myItem) => {
        return myItem === buttonCategory;
      });
      return zzz === buttonCategory;
    });
    setArr(newarr);
  };
  return (
    <main className="flex">
      <section className="left-section flex  ">
        <button
          onClick={() => {
            handleButtonClick("all projects");
            setArr(myProjects);
          }}
          className={activeButton === "all projects" ? "active" : null}
        >
          all projects
        </button>
        <button
          onClick={() => {
            handleButtonClick("css");
          }}
          className={activeButton === "css" ? "active" : null}
        >
          html & css
        </button>
        <button
          onClick={() => {
            handleButtonClick("js");
          }}
          className={activeButton === "js" ? "active" : null}
        >
          javascript
        </button>
        <button
          onClick={() => {
            handleButtonClick("react");
          }}
          className={activeButton === "react" ? "active" : null}
        >
          react & muI
        </button>
        <button
          onClick={() => {
            handleButtonClick("node");
          }}
          className={activeButton === "node" ? "active" : null}
        >
          node & express
        </button>
      </section>

      <section className="right-section flex  ">
        <AnimatePresence>
          {arr.map((item) => {
            return (
              <motion.article
                layout
                initial={{ transform: "scale(0.4)" }}
                animate={{ transform: "scale(1)" }}
                transition={{ type: "spring", damping: 8, stiffness: 50 }}
                key={item.imgPath}
                className="card"
              >
                <img width={266} src={item.imgPath} alt="" />
                <div style={{ width: "266px" }} className="box">
                  <h1 className="title">{item.projectTitle}</h1>
                  <p className="sub-title">
                    Lorem ipsum dolor sit amet consectetur elit adipisicing . Ex
                    tempore dolor in, accusantium laudantium accusamus.
                  </p>
                  <div className="card-links flex">
                    <div className="icons flex">
                      <div className="icon-link "></div>
                      <div className="icon-github"></div>
                    </div>
                    <a href="/" className="link flex">
                      more
                      <span
                        style={{ alignSelf: "end" }}
                        className="icon-arrow-right"
                      ></span>
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </section>
    </main>
  );
}

export default Main;
