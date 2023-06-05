import React from "react";
import Header from "../components/Layout/Header.jsx";
import Hero from "../components/Route/Hero";
import Categories from "../components/Route/Categories/Categories";
import BestDeals from "../components/Route/BestDeals/BestDeals";
import FeaturedProducts from "../components/Route/FeaturedProducts/FeaturedProducts";
import Events from "../components/Route/Events/Events";
import Sponsord from "../components/Route/Sponsord/Sponsord";
import Footer from "../components/Layout/Footer";

const HomePage = () => {
  return (
    <div>
      <Header activeHeading={1} />
      <Hero />
      <Categories />
      <BestDeals />
      <Events />
      <FeaturedProducts />
      <Sponsord />
      <Footer />
    </div>
  );
};

export default HomePage;
