import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AppRoute from "./routes/AppRoute";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <AppRoute />
        <Footer/>
      </BrowserRouter>
    </div>
  );
}