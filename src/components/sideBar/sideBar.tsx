import React, { FC } from 'react';
import styles from './sidebar.module.css';
import { GiMeditation } from "react-icons/gi";
import { BiSwim, BiDumbbell } from "react-icons/bi";
import { MdDirectionsBike } from "react-icons/md";

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = () => (
  <div className={styles.SideBar}>
    <div className={styles.SideMenu}>
      <div className={styles.SideMenuIcon}>
        <GiMeditation />
      </div>
      <div className={styles.SideMenuIcon}>
      <BiSwim />
      </div>
      <div className={styles.SideMenuIcon}>
        <MdDirectionsBike />
      </div>
      <div className={styles.SideMenuIcon}>
        <BiDumbbell />
      </div>
    </div>
    <p className={styles.copyRight}>Copyright, SportSee 2020</p>
  </div>
);

export default Sidebar;
