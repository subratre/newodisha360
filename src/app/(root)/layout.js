import React from "react";
import "./globals.css";
import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";

const RootLayout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default RootLayout;
