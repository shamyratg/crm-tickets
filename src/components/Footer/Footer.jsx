import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accesories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          {" "}
          <h1>Links</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accesories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          {" "}
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            molestiae placeat debitis expedita minus, ipsa magnam architecto
            aspernatur cupiditate illum, autem dolore, voluptatem nihil
            recusandae! Natus laborum ratione qui non.
          </span>
        </div>
        <div className="item">
          {" "}
          <h1>Contact</h1>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit
            commodi consectetur laudantium at culpa ipsum eaque porro
            repudiandae voluptatibus ea. Excepturi molestias eum quaerat facilis
            quae dolore nam beatae alias.
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">Logo</span>
          <span className="copyright">Copyright 2023. All Rights Reserved</span>
        </div>

        <div className="right">
          <img src="/img/download.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
