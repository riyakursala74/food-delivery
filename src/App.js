import React from "react";
import ReactDOM from "react-dom/client";
import Header from "../components/Header";
import ContainerMenu from "../components/ContainerMenu";
import Footer from "../components/Footer";
// Main javascript file

const App = () => {
  return (
    <div className="main">
      <Header />
      <ContainerMenu />
      <Footer />
    </div>
  );
};

// React.createElement and ReactDOM.createRoot
// add type module in html- as browser scripts cannot have imports
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
