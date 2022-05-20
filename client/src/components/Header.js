import React from "react";
import styles from "./Header.module.css";

function Header() {
  return (
    <>
      <nav>
        <ul className={styles.navlist}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>
      </nav>
      <h1>Beach Run</h1>
    </>
  );
}

export default Header;
