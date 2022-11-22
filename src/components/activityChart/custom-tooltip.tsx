import styles from './activityChart.module.css';

export type ActivityCustomTooltipProps = {
  active?: boolean;
  payload?: any;
};

/**
 * Custom Recharts tooltip for the activity graph.
 *
 * @type {React.FC<ActivityCustomTooltipProps>}
 * @param {ActivityCustomTooltipProps} props
 * @return {JSX.Element} JSX element
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
