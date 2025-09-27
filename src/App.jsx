import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Gallery from "./components/Gallery";
import "./index.css";

export default function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main">
        <Header />
        <Gallery />
      </div>
    </div>
  );
}
