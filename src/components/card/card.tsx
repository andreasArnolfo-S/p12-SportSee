import React, { FC } from 'react';
import styles from './card.module.css';


interface CardProps {
  value: number;
  unit: string;
  title: string;
  icon?: JSX.Element;
  bgColor?: string;
  color?: string;
}

const Card: FC<CardProps> = (props) => {

  return (
    <div className={styles.Card}>
      <div className={styles.icon} style={{backgroundColor: `${props.bgColor}`, color: `${props.color}`}}>
        {props.icon}
      </div>
      <div>
        <h1>{props.value}{props.unit}</h1>
        <p>{props.title}</p>
      </div>
    </div>
  );
}

export default Card;
