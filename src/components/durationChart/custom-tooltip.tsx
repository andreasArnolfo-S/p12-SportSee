import styles from './durationChart.module.css';
/**
 * AverageSessionsCustomTooltipProps is an object with optional properties active and payload, where
 * active is a boolean and payload is any.
 * @property {boolean} active - boolean
 * @property {any} payload - The payload object is the data object that is passed to the tooltip
 * component.
 */
export type AverageSessionsCustomTooltipProps = {
     active?: boolean;
     payload?: any;
};


/**
 * It's a function that returns a div with a className of styles.tooltip and the text of the
 * sessionLength property of the payload object.
 * @param {AverageSessionsCustomTooltipProps}  - AverageSessionsCustomTooltipProps
 * @returns A React component.
 */
export function AverageSessionsCustomTooltip({ active, payload }: AverageSessionsCustomTooltipProps) {
     return (
          active && (
               <div className={styles.tooltip}>
                    {`${payload[0].payload.sessionLength} min`}
               </div>
          )
     );
}