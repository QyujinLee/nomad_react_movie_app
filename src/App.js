import React, { useState, useEffect, useRef } from "react";
import { useNotification } from "./useNotification";

const App = () => {
    const customOptions = {
        body: "I love it",
    };
    const triggerNofif = useNotification("Can I Steel It ?", customOptions);
    return (
        <div className="App" style={{ height: "1000vh" }}>
            <button onClick={triggerNofif}>hello</button>
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
