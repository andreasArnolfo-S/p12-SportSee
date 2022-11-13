import React, { FC } from 'react';
import styles from './durationChart.module.css';
import Duration from './../../models/duration';
import {
  XAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
} from 'recharts';

interface DurationChartProps { }

const DurationChart: FC<DurationChartProps> = () => {
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
          
        >
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: '10px', fill: 'white' }}
            dy={10}
          />
          <Tooltip
            
            wrapperStyle={{ outline: 'none' }}
          />
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="white"
            strokeWidth={2}
            dot={false}
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
