import React from "react";
import "../App.css";
import { Outlet } from "react-router-dom";
import Header from "@/components/Header";

const AppLayout = () => {
  return (
    <>
      <div className="grid-background"></div>

      <main className="container min-h-screen">
        <Header />
        <Outlet />
      </main>

      <footer className="text-center">Made with ❤️ by Idham Hazard</footer>
    </>
  );
};

export default AppLayout;
