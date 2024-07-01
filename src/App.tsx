import { useEffect } from "react";
import Dashboard from "./pages/dashboard/Dashboard.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import NoDataFound from "./pages/NoDataFound.tsx";

export default function App() {
  useEffect(() => {
    console.log("helo");
  }, []);
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/noDataFound" element={<NoDataFound />} />
        </Routes>
      </BrowserRouter>
    </React.Suspense>
  );
}
