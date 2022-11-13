import React, { FC } from 'react';
import styles from './performanceChart.module.css';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import Performances from '../../models/performances';


interface PerformanceChartProps { }

const PerformanceChart: FC<PerformanceChartProps> = () => {
  const data = Performances();
  return (
    <ResponsiveContainer width="100%" height="100%">
    <RadarChart
      cx="50%"
      cy="50%"
      outerRadius="60%"
      data={data}
      style={{ backgroundColor: '#282D30' }}
    >
      <PolarGrid stroke="white" />
      <PolarAngleAxis
        stroke="white"
        dataKey="kind"
        tick={{ fontSize: '15px' }}
        tickLine={false}
      />
      <Radar
        name="Performance"
        dataKey="value"
        stroke="#e60000"
        fill="#e60000"
        fillOpacity={0.6}
      />
    </RadarChart>
  </ResponsiveContainer>
  );
}

export default PerformanceChart;
