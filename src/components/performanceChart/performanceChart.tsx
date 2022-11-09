import React, { FC } from 'react';
import styles from './performanceChart.module.css';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import Performances from '../../models/performances';


interface PerformanceChartProps { }

const PerformanceChart: FC<PerformanceChartProps> = () => {
  const data = Performances();
  return (
    <ResponsiveContainer width="100%" height="100%" className={styles.chartContainer}>
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey='kind' tick={{ fill: 'white' }} tickLine={{ stroke: 'white' }} />
        <Radar name="performances" dataKey='value' stroke="#FF0000" fill="#FF0000" fillOpacity={0.6} />
      </RadarChart>
    </ResponsiveContainer>
  );
}

export default PerformanceChart;
