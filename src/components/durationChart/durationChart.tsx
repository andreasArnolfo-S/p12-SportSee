import React, { FC } from 'react';
import styles from './durationChart.module.css';
import { Duration } from './../../models/models';
import {
  XAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  YAxis,
} from 'recharts';
import { AverageSessionsCustomTooltip } from './custom-tooltip';



const DurationChart = () => {
  const duration = Duration();

  return (
    <ResponsiveContainer width="100%" height="100%" className={styles.chartContainer}>
      <LineChart
        width={500}
        height={300}
        data={duration}
        margin={{
          top: 50,
          right: 10,
          left: 10,
          bottom: 5,
        }}
        className={styles.chart}
      >
        <XAxis
          dataKey="day"
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: '15px', fill: 'white', fontWeight: 'bold' }}
          dy={10}
        />
        <YAxis hide={true} domain={['dataMin - 10', 'dataMax + 10']} dataKey="sessionLength" />

        <Tooltip
          content={AverageSessionsCustomTooltip as any}
          wrapperStyle={{ outline: 'none' }}
        />
        <Line
          type="natural"
          dataKey="sessionLength"
          stroke="white"
          strokeWidth={2}
          dot={false}
          activeDot={{ r: 3 }}
        />
        <text
          x="20"
          y="20"
          textAnchor="start"
          dominantBaseline="hanging"
          className={styles.label}
          fill="white"
        >
          Durée moyenne des sessions
        </text>

      </LineChart>

    </ResponsiveContainer>

  );
}

export default DurationChart;
