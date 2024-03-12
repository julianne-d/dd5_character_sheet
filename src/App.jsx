import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/Home/Home.page";
import FormPage from "./pages/CharacterForm/CharacterForm.page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/new_character' element={<FormPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
