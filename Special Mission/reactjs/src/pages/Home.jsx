import React from "react";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer"

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div class="d-none d-md-block">
          <div class="row mt-5">
            <div class="col-md-6">
              <div class="d-flex h-100">
                <div class="justify-content-center align-self-center">
                  <h2>
                    You Deserve the Best <strong>Tiramisu</strong> in Town
                  </h2>
                  <p>
                    "Simplicity is the ultimate Sophistication" <br />- Leonardo
                    da Vinci
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-6 mb-5">
              <img src="./assets/images/hero.svg" width="100%" />
            </div>
          </div>
        </div>

        <ProductCard />

      </div>

      <Footer/>
    </div>
  );
};

export default Home;
