import React, { useState } from "react";

const App = () => {
    const [item, setItem] = useState(1);
    const incrementItem = () => setItem(item + 1);
    const decrementItem = () => setItem(item - 1);

    return (
        <div className="App">
            <h1>Hello {item}</h1>
            <h2>Start editing to see some magic happen!</h2>
            <button onClick={incrementItem}>Increment</button>
            <button onClick={decrementItem}>Decrement</button>
        </div>
    );
};

export default App;

// class AppUgly extends React.Component {
//   state = {
//     item : 1
//   }

//   render() {
//     return (
//       <div className="App">
//         <h1>Hello {this.state.item}</h1>
//         <h2>Start editing to see some magic happen!</h2>
//         <button onClick={this.incrementItem}>Increment</button>
//         <button onClick={this.decrementItem}>Decrement</button>
//       </div>
//     );
//   }

//   incrementItem = () => {
//     this.setState(state => {
//       return{
//         item: state.item + 1
//       }
//     })
//   }

//   decrementItem = () => {
//     this.setState(state => {
//       return{
//         item: state.item - 1
//       }
//     })
//   }

// }

// export default AppUgly;

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
