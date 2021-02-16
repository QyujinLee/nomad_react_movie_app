import React, { useState, useEffect } from "react";
import { useTitle } from "./useTitle";

const App = () => {
    const titleUpdater = useTitle("Loading...");

    setTimeout(() => titleUpdater("Home"), 3000);

    return (
        <div className="App">
            <div>Hi</div>
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
