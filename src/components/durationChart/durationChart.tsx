import React, { FC } from 'react';
import styles from './durationChart.module.css';
import {
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from 'recharts';

interface DurationChartProps {
  duration: [];
}

const DurationChart: FC<DurationChartProps> = (props) => {

  return (
    <ResponsiveContainer width="30%" height="40%" className={styles.chartContainer}>
      <AreaChart
        width={500}
        height={400}
        data={props.duration}
        margin={{
          top: 10,
          right: 10,
          left: 10,
          bottom: 0,
        }}
      >
        <XAxis dataKey="day" />
        <Tooltip />
        <Area type="monotone" dataKey="sessionLength" stroke="#ffff" strokeWidth={3} fill="transparent" />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default DurationChart;
