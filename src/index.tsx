// Copyright 2022 The Aquachain Authors. All rights reserved.
// Use of this source code is governed by the MIT license

import ReactDOM from 'react-dom/client';
import './index.css';
import { HashRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/Home";
import { AboutPage } from "./pages/About";
import { DocumentationPage } from "./pages/Learn";
import { ConnectPage } from "./pages/Connect";
import { ParticlesContainer } from "./components/ParticleBox";
import './App.css';
import { Toaster } from "react-hot-toast";
import { NavMain } from "./components/NavMain";
export const Header = () => {
  return (<div id="header" className="header"><nav><NavMain /></nav ></div >)
}
export const Footer = () => {
  return (
    <div>
      <div style={{ textAlign: "center", backgroundColor: "rgba(228,235,243, 0.4)" }}><img className="flex center" src={process.env.PUBLIC_URL + "/img/aqua_header.png"} /></div>
      <div id="footer">

        Copyright &copy; 2018-2023 the Aquachain Authors.
        {" "}
        <a target="_blank" rel="noreferrer" href="https://github.com/orgs/aquachain/repositories">Become one</a>
        {" "}
      </div>
    </div>
  ) // thats all
}
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <HashRouter>
    <Header />
    <Toaster containerClassName="toaster" position="bottom-center" />
    <div id="content" style={{ minHeight: "40vh" }}>
      <Routes>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/learn" element={<DocumentationPage />} />
        <Route path="/learn/*" element={<DocumentationPage />} />
        <Route path="/connect" element={<ConnectPage />} />
        <Route path="*" element={<p>not found</p>} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
    <Footer />
    <ParticlesContainer />
  </HashRouter>
);
