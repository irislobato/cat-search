import React from "react";
import { BrowserRouter ,Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Detalhes from "./Pages/Detalhes";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="gato/:nome" element={<Detalhes />}></Route>
        </Route>
      </Routes>
      </BrowserRouter>
  );
}
