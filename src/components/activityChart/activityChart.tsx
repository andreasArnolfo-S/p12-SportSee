import { FC } from 'react';
import {
  BarChart,
  CartesianGrid,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend
} from "recharts";
import { Activity }from '../../models/models';
import { ActivityCustomTooltip } from './custom-tooltip';
import styles from './activityChart.module.css';


const ActivityChart =  () => {
  const activities = Activity();
  return (
    <ResponsiveContainer width="100%" height="100%" >
      <BarChart
        width={500}
        height={200}
        barSize={20}
        data={activities}
      >
        <CartesianGrid strokeDasharray="4 4" />
        <XAxis dataKey='formateday' />
        <YAxis dataKey='calories' orientation='left' visibility='hidden' />
        <YAxis dataKey="kilogram" orientation='right' yAxisId={'right'} />

        <Tooltip
          content={ActivityCustomTooltip as any}
          wrapperStyle={{ outline: 'none' }}
          cursor={{ fill: 'gray', opacity: 0.1 }}
        />
        <text
          x={20}
          y={20}
          textAnchor="start"
          dominantBaseline="hanging"
          className={styles.label}
        >
          Activité quotidienne
        </text>
        <Legend />
        <Bar dataKey="kilogram" fill="#282D30" background={{ fill: '#eee' }} radius={[10, 10, 0, 0]} yAxisId={'right'} />
        <Bar dataKey="calories" fill="#E60000" radius={[10, 10, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default ActivityChart;
