import React, { FC } from 'react';
import styles from './bonjour.module.css';

interface BonjourProps { 
  firstname: string;
}

const Bonjour: FC<BonjourProps> = (props) => (
  <div className={styles.Bonjour}>
    <h1>
      Bonjour <span className={styles.firstname}>{props.firstname}</span>
    </h1>
    <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
  </div>
);

export default Bonjour;
