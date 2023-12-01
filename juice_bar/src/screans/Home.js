import React from "react";
import Navbar from "../components/Navbar";
import Cards from "../components/Cards";
import Carousal from "../components/Carousal";

export default function Home() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div><Carousal/></div>
      <div><Cards/></div>
      

    </div>
  );
}
