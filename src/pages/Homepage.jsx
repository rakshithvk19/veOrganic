import React from "react";
import VendorList from "../components/VendorList";
import Footer from "../components/Footer";
import "./Homepage.css";

export default function Homepage() {
  return (
    <main className="main">
      <section className="vendor-section">
        <h2 className="vendor-list-title">Vendor List</h2>
        <VendorList />
        <VendorList />
        <VendorList />
      </section>
      <Footer />
    </main>
  );
}
