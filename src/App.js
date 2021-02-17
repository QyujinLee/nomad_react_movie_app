import React, { useState, useEffect, useRef } from "react";
import useAxios from "./useAxios/useAxios";

const App = () => {
    const { loading, data, refetch } = useAxios({
        url: "https://yts.am/api/v2/list_movies.json",
    });

    return (
        <div className="App" style={{ height: "1000vh" }}>
            <h1>{data && data.status}</h1>
            <h2>{loading && "Loading"}</h2>
            <button onClick={refetch}>Refetch</button>
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
