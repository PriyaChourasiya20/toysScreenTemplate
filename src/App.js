// import "./App.css";
import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/header/index.js";
import Navbar from "./components/Navbar.js";
import Content from "./components/content/index.js";
import Add from "./components/Add/Add.js";
import NewsLetter from "./components/Newsletter/NewsLetter.js";
import Footer from "./components/Footer/footer.js";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Content />
      <Add />
      <NewsLetter />
      <Footer />
    </>
  );
}

export default App;
