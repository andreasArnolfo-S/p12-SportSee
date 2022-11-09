import React, { FC } from 'react';
import styles from './durationChart.module.css';
import Duration from './../../models/duration';
import {
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from 'recharts';

interface DurationChartProps { }

const DurationChart: FC<DurationChartProps> = () => {
  const duration = Duration();

  return (
    <ResponsiveContainer width="100%" height="100%" className={styles.chartContainer}>
      <AreaChart
        width={500}
        height={400}
        data={duration}
        margin={{
          top: 10,
          right: 10,
          left: 0,
          bottom: 0,
        }}
      >
        <YAxis dataKey='sessionLength' visibility='hidden' />
        <XAxis dataKey="day" />
        <Tooltip />
        <Area type="monotone" dataKey="sessionLength" stroke="#ffff" strokeWidth={3} fill="transparent" />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default DurationChart;
