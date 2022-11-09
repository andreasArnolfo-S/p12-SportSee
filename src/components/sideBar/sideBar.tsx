import React, { FC } from 'react';
import styles from './sidebar.module.css';
import { GiMeditation } from "react-icons/gi";

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = () => (
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

export default Sidebar;
