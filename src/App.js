// import logo from "./logo.svg";
import "./App.css";
import WorkView from "./WorkView.js";
import HomeView from "./HomeView.js";
import AboutView from "./AboutView.js";
import BlogView from "./BlogView";
import Root from "./Root.js";
import { SomeContext } from "./SomeContext";
import { useContext } from "react";
import { createHashRouter, RouterProvider } from "react-router-dom";

function App() {
  const adminUser = useContext(SomeContext);
  const router = createHashRouter([
    {
      children: [
        { element: <HomeView />, path: "/" },
        { element: <AboutView />, path: "/about" },
        { element: <WorkView />, path: "/:projectId" },
        { element: <BlogView />, path: "/blog" },
      ],
      element: <Root />,
    },
  ]);

  return (
    <SomeContext.Provider value={adminUser}>
      <RouterProvider router={router} />
    </SomeContext.Provider>
  );
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
