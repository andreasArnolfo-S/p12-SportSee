import { FC } from 'react';
import styles from './card.module.css';


/**
 * @prop {number} value value to display
 * @prop {string} unit unit (g, kCal, etc.)
 * @prop {string} title title of card
 * @prop {JSX.Element} icon icon to display
 * @prop {string} bgColor background color of icon
 * @prop {string} color color of icon
 */
interface CardProps {
  value: number;
  unit: string;
  title: string;
  icon?: JSX.Element;
  bgColor?: string;
  color?: string;
}

/**
 * A functional component that takes in props and returns a div with the user's nutritional information.
 * @param {CardProps} props 
 * @returns {JSX.Element} JSX element
 */
const Card: FC<CardProps> = (props) => {

  return (
    <div className={styles.Card}>
      <div className={styles.icon} style={{ backgroundColor: `${props.bgColor}`, color: `${props.color}` }}>
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
