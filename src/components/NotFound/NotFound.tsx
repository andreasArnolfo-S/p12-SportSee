import React, { FC } from 'react';
import styles from './NotFound.module.css';

interface NotFoundProps {}

const NotFound: FC<NotFoundProps> = () => (
  <div className={styles.NotFound}>
    <h1>404</h1>
  </div>
);

export default NotFound;
