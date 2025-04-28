import React from "react";
import "./Footer.css"; 
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <address>505 NE 3rd Ave Delray Beach, FL</address>
      <p className="copyright">
        &copy; {currentYear} Louis' Portfolio.
      </p>
    </footer>
  );
};

export default Footer;