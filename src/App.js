import React, { useState, useEffect, useRef } from "react";
import { useClick } from "./useClick";

const App = () => {
    const sayHello = () => console.log("say hello");
    const title = useClick(sayHello);
    return (
        <div className="App">
            <h1 ref={title}>Hi</h1>
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
