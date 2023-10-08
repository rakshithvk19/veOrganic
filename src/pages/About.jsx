import React from "react";
import "./About.css";

export default function About() {
  return (
    <main className="main">
      <div className="about-container">
        <h2 className="about-title">About veOrganic</h2>
        <p className="about-info">
          veOrganic is an innovative online platform connecting urban farmers
          with conscious consumers seeking organic produce. Our mission is to
          support local agriculture and provide a convenient way for city
          dwellers to access fresh, sustainably-grown food. We collaborate
          closely with a network of dedicated farmers who cultivate their
          products using environmentally-friendly practices.
          <strong>Part of the veGrowww conglomerate,</strong> we facilitate
          transactions through veCoins, ensuring a seamless and secure shopping
          experience for our users.
        </p>
        <p className="about-info">
          At veOrganic, we believe in transparency and accountability. After
          making a purchase, users have the opportunity to share their
          experiences by posting reviews. These valuable insights not only
          assist fellow consumers in making informed choices but also contribute
          to the growth and improvement of our platform.
        </p>
        <p className="about-info">
          As a token of our appreciation, the veGrowww conglomerate rewards
          farmers based on the positive feedback received. This incentive system
          not only encourages excellence in farming practices but also fosters a
          sense of community and collaboration within the veOrganic ecosystem.
        </p>
      </div>
    </main>
  );
}
