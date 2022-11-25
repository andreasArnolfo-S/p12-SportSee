import { FC } from 'react';
import styles from './card.module.css';


/**
 * CardProps is an interface with properties title, value, unit, icon, bgColor and color.
 * @typedef CardProps
 * @prop {number} value value to display on card
 * @prop {string} unit unit of value (g, kCal, etc.)
 * @prop {string} title title of card
 * @prop {JSX.Element} icon icon to display on card
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
 * @function Card
 * @param {CardProps} props - props of component
 * @returns {JSX.Element} JSX element
 * 
 * @description The card component is a component that takes in props and returns a div with the user's nutritional information.
 * @example
 * // call the function
 * <Card value={value} unit={unit} title={title} icon={icon} bgColor={bgColor} color={color} />
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
