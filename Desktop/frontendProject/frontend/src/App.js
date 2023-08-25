import React from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Layout/Navbar";
import WelcomePage from "./Pages/WelcomePage";
import Layout from "./Layout/Layout";
import HomePage from "./Pages/HomePage";
import BookingPage from "./Pages/BookingPage";
export default function App() {
  return (
    <Routes>
      <Route index element={<WelcomePage />} />
      <Route path="/Home" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/Home/booking" element={<BookingPage />} />
      </Route>
    </Routes>
  );
}
