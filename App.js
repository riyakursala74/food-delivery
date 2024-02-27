import React from "react";
import ReactDOM from "react-dom/client";
// Main javascript file

const Header = () => {
  return (
    <div className="header-main">
      <div>
        <img
          className="imgClass"
          src="https://assets.materialup.com/uploads/08467c74-4744-4eac-817f-598b2f2fd680/preview.png"
          alt="flogo"
        />
      </div>
      <ul className="header-links">
        <li className="li-item">Home</li>
        <li className="li-item">About</li>
      </ul>
    </div>
  );
};

const Card = () => {
  return (
    <div className="card">
      <h3 className="card-header">Dominos</h3>
      <img
        className="card-image"
        src="https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/lbben1a5fegprtigwdec"
        alt=""
      />
      <div className="card-meta">
        <h4>4.1</h4>
        <h4>Italian, Mexican</h4>
      </div>
    </div>
  );
};
const ContainerMenu = () => {
  return (
    <div className="container-menu">
      <div>Search</div>
      <div className="card-container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};
const Footer = () => {
  return <div className="footer">&#169;</div>;
};
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
