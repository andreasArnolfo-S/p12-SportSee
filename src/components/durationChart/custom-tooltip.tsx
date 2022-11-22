import styles from './durationChart.module.css';
export type AverageSessionsCustomTooltipProps = {
     active?: boolean;
     payload?: any;
};

/**
* Custom Recharts tooltip for the average sessions graph.
*
* @type {React.FC<AverageSessionsCustomTooltipProps>}
* @param {AverageSessionsCustomTooltipProps} props
* @return {JSX.Element} JSX element
*
* @example
* import { Tooltip } from 'recharts';
*
* <Tooltip
*   content={AverageSessionsCustomTooltip as any}
*   wrapperStyle={{ outline: 'none' }}
* />
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