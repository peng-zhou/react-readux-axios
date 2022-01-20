import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AD from "./components/AD";
import Teasers from "./components/Teasers";
import { isMobile } from "react-device-detect";

function App() {
  return (
    <div className="page">
      <Header title="Article Feed" />
      <div className="site-wrapper">
        <div className="container">
          <div className="row">
            <Teasers />
            <AD />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
