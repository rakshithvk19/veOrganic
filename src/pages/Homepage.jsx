import React from "react";
import VendorList from "../components/VendorList";
import Footer from "../components/Footer";
import "./Homepage.css";

export default function Homepage() {
  return (
    <main className="main">
      <section className="vendor-section">
        <h2 className="vendor-list-title">Vendor List</h2>
        <VendorList img={"src/assets/profile-pic-1.jpg"} />
        <VendorList img={"src/assets/profile-pic-2.jpg"} />
        <VendorList img={"src/assets/profile-pic-3.jpg"} />
      </section>
      <Footer />
    </main>
  );
}
