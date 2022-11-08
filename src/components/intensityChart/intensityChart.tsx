import { FC } from 'react';
import styles from './intensityChart.module.css';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';


interface IntensityChartProps {
  performances: [];
  kind: [];
}

const IntensityChart: FC<IntensityChartProps> = (props) => {


  /* Mapping the props.performances array to a new array with the same values but with a new key. */
  const data = Array.isArray(props.performances)
    ? props.performances.map((performance: any, index: number) => {
      return {
        kind: props.kind[index +1],
        value: performance.value,
      }
    }) : [];
    

  return (
    <ResponsiveContainer width="30%" height="40%" className={styles.chartContainer}>
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey='kind' tick={{ fill: 'white' }} tickLine={{ stroke: 'white' }} />
        <Radar name="performances" dataKey='value' stroke="#FF0000" fill="#FF0000" fillOpacity={0.6} />
      </RadarChart>
    </ResponsiveContainer>
  );
}

export default IntensityChart;
