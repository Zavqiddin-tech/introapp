import React from "react";
import './footer.css'


const Footer = () => {
  return (
    <footer className="footer">
      <footer className="footer__info">
        <div className="footer__logo">LOGO</div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
          voluptas minima repudiandae praesentium quasi, quod modi nobis rerum
          optio tempora nesciunt vero deleniti animi sapiente. Velit,
          distinctio. Temporibus, officia nihil!
        </p>
      </footer>
      <ul className="footer__menu">
        <li><a href="#">Link</a></li>
        <li><a href="#">Link</a></li>
        <li><a href="#">Link</a></li>
        <li><a href="#">Link</a></li>
        <li><a href="#">Link</a></li>
      </ul>
      <ul className="footer__menu">
        <li><a href="#">Link</a></li>
        <li><a href="#">Link</a></li>
        <li><a href="#">Link</a></li>
        <li><a href="#">Link</a></li>
        <li><a href="#">Link</a></li>
      </ul>
      <ul className="footer__menu">
        <li><a href="#">Link</a></li>
        <li><a href="#">Link</a></li>
        <li><a href="#">Link</a></li>
        <li><a href="#">Link</a></li>
        <li><a href="#">Link</a></li>
      </ul>
    </footer>
  );
};

export default Footer