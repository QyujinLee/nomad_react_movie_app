import React, { useState, useEffect, useRef } from "react";
import { useFadeIn } from "./useFadeIn";
import { useNetwork } from "./useNetwork";

const App = () => {
    const fadeInH1 = useFadeIn(1, 2);
    const fadeInP = useFadeIn(5, 10);
    const handleNetworkChange = (online) => {
        console.log(online ? "We just went online" : "We are offline");
    };
    const onLine = useNetwork(handleNetworkChange);
    return (
        <div className="App">
            <h1 {...fadeInH1}>FadeIn 1</h1>
            <p {...fadeInP}>FadeIn 2</p>
            <br />
            <h1>{onLine ? "Online" : "Offline"}</h1>
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
