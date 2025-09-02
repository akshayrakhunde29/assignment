import React from "react";
import "./App.css";
import data from "./config";
import Dashboard from "./component/Dashboard";
import SideMenu from "./component/SideMenu";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LocationSelector from "./component/CountryData";

const Layout = ({ children }) => {
  return (
    <div className="dashboard">
      <SideMenu />
      <Dashboard data={data} />
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Dashboard route */}
        <Route path="/dashboard" element={<Layout />} />
        <Route path="/" element={<LocationSelector />} />

        {/* 404 route */}
        <Route
          path="*"
          element={
            <Layout>
              <div className="error-page">
                <h2>404 - Page Not Found</h2>
                <p>The page you're looking for doesn't exist.</p>
              </div>
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
