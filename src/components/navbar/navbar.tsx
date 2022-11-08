import React, { FC } from 'react';
import styles from './navbar.module.css';
import { FaRunning } from 'react-icons/fa';
import { Link } from "react-router-dom";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => (
  <nav className={styles.Navbar}>
    <div className={styles.logo}>
      <div className={styles.redCircle}>
        <FaRunning />
      </div>
      <h1 className={styles.logoTitle}>SportSee</h1>
    </div>

    <Link to="/">Accueil</Link>
    <Link to="/">Profil</Link>
    <Link to="/">Reglage</Link>
    <Link to="/">Communaute</Link>

  </nav>
);

export default Navbar;
