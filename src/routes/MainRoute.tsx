import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardLayout from "../components/dashboard/DashboardLayout";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import AddNewUser from "../pages/AddNewUser";

export default function MainRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<HomePage />} />
          <Route path="add" element={<AddNewUser />} />
        </Route>
        <Route path="/" element={<LoginPage />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

const NoPage = () => <div>Page Not Found</div>;
