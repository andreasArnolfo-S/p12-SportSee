import styles from './activityChart.module.css';

/**
 * ActivityCustomTooltipProps is an object with optional properties active and payload, where active is
 * a boolean and payload is any.
 * @typedef ActivityCustomTooltipProps
 * @property {boolean} active - boolean
 * @property {any} payload - The payload object is the data object that is passed to the tooltip
 * component.
 */
export type ActivityCustomTooltipProps = {
  active?: boolean;
  payload?: any;
};

/**
 * It's a function that takes in an object with two properties, active and payload, and returns a div
 * with some text in it.
 * @param {ActivityCustomTooltipProps}  - active - boolean - whether the tooltip is active or not
 * @returns A React component.
 */
export function ActivityCustomTooltip ({ active, payload }: ActivityCustomTooltipProps) {
  if (active && payload && payload.length) {
    return (
      <div className={styles.tooltip}>
        {`${payload[0].payload.kilogram} kg`}
        <br />
        <span className={styles.tooltipCalories}>
          {`${payload[0].payload.calories} Kcal`}
        </span>
      </div>
    );
  }
  return <></>;
}
