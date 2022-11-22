import styles from './durationChart.module.css';
export type AverageSessionsCustomTooltipProps = {
     active?: boolean;
     payload?: any;
};


export function AverageSessionsCustomTooltip({ active, payload }: AverageSessionsCustomTooltipProps) {
     return (
          active && (
               <div className={styles.tooltip}>
                    {`${payload[0].payload.sessionLength} min`}
               </div>
          )
     );
}