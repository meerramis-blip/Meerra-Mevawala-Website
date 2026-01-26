import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Test = () => {
  return (
    <div style={{ padding: 40 }}>
      <h1>Site is working</h1>
      <p>If you see this, routing and Netlify are correct.</p>
    </div>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Test />} />
        <Route path="*" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
}
