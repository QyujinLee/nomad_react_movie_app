import React, { useState, useEffect, useRef } from "react";
import { useScroll } from "./useScroll";
import { useFullscreen } from "./useFullscreen";

const App = () => {
    const { y } = useScroll();
    const onFullS = (isFull) => {
        console.log(isFull ? "We are full" : "We are small");
    };
    const { element, triggerFull, exitFull } = useFullscreen(onFullS);

    return (
        <div className="App" style={{ height: "1000vh" }}>
            <h1 style={{ position: "fixed", color: y > 100 ? "red" : "blue" }}>
                hello
            </h1>
            <div ref={element}>
                <img
                    src="http://akns-images.eoline.com/eol_image"
                    alt="testImg"
                />
            </div>
            <button onClick={triggerFull}>Make fullscreen</button>
            <button onClick={exitFull}>Exit fullscreen</button>
        </div>
    );
};

export default App;

// /**
//  * nomad_coder_react_movie_app ***
//  */
// import React from "react";
// import { HashRouter, Route } from "react-router-dom";
// import Home from "./routes/Home";
// import About from "./routes/About";
// import Detail from "./routes/Detail";
// import Navigation from "./components/Navigation";

// function App() {
//     return (
//         <HashRouter>
//             <Navigation />
//             <Route path="/" exact={true} component={Home} />
//             <Route path="/about" component={About} />
//             <Route path="/movie/:id" component={Detail} />
//         </HashRouter>
//     );
// }

// export default App;
