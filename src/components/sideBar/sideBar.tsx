import React, { FC } from 'react';
import styles from './sideBar.module.css';
import { GiMeditation } from "react-icons/gi";

interface SideBarProps {}

const SideBar: FC<SideBarProps> = () => (
  <div className={styles.SideBar}>
    <div className={styles.SideMenu}>
      <div className={styles.SideMenuIcon}>
        <GiMeditation />
      </div>
      <div className={styles.SideMenuIcon}>
        <GiMeditation />
      </div>
      <div className={styles.SideMenuIcon}>
        <GiMeditation />
      </div>
      <div className={styles.SideMenuIcon}>
        <GiMeditation />
      </div>
    </div>
    <p className={styles.copyRight}>Copyright, SportSee 2020</p>
  </div>
);

export default SideBar;
