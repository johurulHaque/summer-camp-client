import React from "react";
import Slider from "../Slider/Slider";
import Popular from "../Popular/Popular";
import Marquee from "react-fast-marquee";
import PopularInstructor from "../PopularInstructor/PopularInstructor";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <h2 className="text-3xl text-center mt-4 text-accent font-semibold">
        ---- Popular Classes ----
      </h2>
      <Popular></Popular>
      <h2 className="text-3xl text-center mt-4 text-accent font-semibold">
        ---- Popular Instructors ----
      </h2>
      <PopularInstructor></PopularInstructor>
      <Marquee>
        <img src="./a.jpg" alt=""  className="w-28 h-w-28"/>
        <img src="./b.jpg" alt=""  className="w-28 h-w-28"/>
        <img src="./c.jpg" alt=""  className="w-28 h-w-28"/>
        <img src="./e.jpg" alt=""  className="w-28 h-w-28"/>
        <img src="./f.png" alt="" className="w-28 h-w-28"/>
        <img src="./c.png" alt="" className="w-28 h-w-28"/>
        <img src="./d.png" alt="" className="w-28 h-w-28"/>
        <img src="./d.jpg" alt=""  className="w-28 h-w-28"/>
        <img src="./e.png" alt="" className="w-28 h-w-28"/>
        <img src="./f.png" alt="" className="w-28 h-w-28"/>
        <img src="./g.png" alt="" className="w-28 h-w-28"/>
      </Marquee>
    </div>
  );
};

export default Home;
