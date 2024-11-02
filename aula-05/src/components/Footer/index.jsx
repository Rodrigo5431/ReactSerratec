import React from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import * as styles from "./Footer.module.css";

export default function index() {
  return (
    <footer>
      <ul className={styles.social}>
        <li>
          <FaFacebook />
        </li>
        <li>
          <FaLinkedin />
        </li>
      </ul>
      <p><span>Rodape</span>&copy;2024- </p>
    </footer>
  );
}
