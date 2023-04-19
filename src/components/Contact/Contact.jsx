import React from "react";
import "./contact.scss";
import { Google, Instagram } from "@mui/icons-material";

const Contact = () => {
  return (
    <div className="contact">
      <div className="wrapper">
        <span>BE IN TOUCH WITH US</span>
        <div className="mail">
          <input type="text" placeholder="Email?" />
          <button type="submit">JOIN US</button>
        </div>
        <div className="icons">
          <Instagram />
          <Google />
        </div>
      </div>
    </div>
  );
};

export default Contact;
