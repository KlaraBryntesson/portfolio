// import logo from "./logo.svg";
import "./App.css";
import Work from "./Work.js";
import Home from "./Home.js";
import About from "./About.js";
import Blog from "./Blog";
import Root from "./Root.js";
import { createHashRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createHashRouter([
    {
      children: [
        { element: <Home />, path: "/" },
        { element: <About />, path: "/about" },
        { element: <Work />, path: "/work/:projectId" },
        { element: <Blog />, path: "/blog" },
      ],
      element: <Root />,
    },
  ]);

  return <RouterProvider router={router} />;
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //     <Work />
  //   </div>
  // );
}

export default App;
