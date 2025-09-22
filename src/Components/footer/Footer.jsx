import React from "react";
import "./footer.css";
import { SiGmail } from "react-icons/si"; // أيقونة Gmail من react-icons

export default function Footer() {
  return (
    <footer className="flex">
      <div className="social-links">
        <a
          href="https://www.instagram.com/ahmedds_25?igsh=NmFjNGt4d3l5aDZz&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
          className="icon icon-instagram"
        ></a>
        <a
          href="https://www.linkedin.com/in/ahmed-sayed-9351a4297?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
          target="_blank"
          rel="noopener noreferrer"
          className="icon icon-linkedin"
        ></a>
        {/* أيقونة Gmail */}
        <a href="mailto:ahmedsayeddd25@gmail.com" className="icon icon-gmail">
          <SiGmail size={24} />
        </a>
      </div>
      <p className="dom">Ahmed Sayed</p>
    </footer>
  );
}
