import React from "react";
import "./style.scss";
import { Button } from "@chakra-ui/react";

function Hero() {
  return (
    <section id="Hero" className="hero-container">
      <div className="text-area">
        <h1 className="title">Italy</h1>
        <div className="sub-title">
        Trips you couldn't plan, even if you wanted to.
        </div>
        <Button
      width="140px"
      height="24px"
      padding="18px 24px"
      borderRadius="100px"
      bg={"#4A21EF"}
      color={"#fff"}
      
      // Add other button props as needed (e.g., onClick)
    >
      Your Button Text
    </Button>
      </div>
      <div className="search-area">
        <input
          placeholder="Where do you want go?"
          className="search-input"
          type="text"
        />
        <button className="search-icon">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
    </section>
  );
}

export default Hero;
