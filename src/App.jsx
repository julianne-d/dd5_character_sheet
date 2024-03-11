import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/Home/Home.page"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'element={<HomePage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
