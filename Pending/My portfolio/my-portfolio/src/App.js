import React from "react";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Experience from "./components/experience/Experience";
import About from "./components/about/About";
import MyProjects from "./components/myprojects/MyProjects";
import Contacts from "./components/contacts/Contacts";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <About />
      <Experience />
      <MyProjects />
      <Contacts />
    </div>
  );
}

export default App;
