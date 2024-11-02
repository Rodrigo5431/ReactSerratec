import React from "react";
import * as styles from "./Header.module.css";
import { Link } from "react-router-dom";

export default function indes() {
  return (
    <header>
      <h2>Empresa XPTO LTDA</h2>
      <div className={styles.menu}>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/empresa">empresa</Link>
            </li>
            <li>
              <Link to="/contato">contato</Link>
            </li>
            <li>
              <Link to="/sobre">sobre</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
